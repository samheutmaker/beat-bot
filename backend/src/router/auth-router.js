import {Router} from 'express';
import bodyParser from 'body-parser';
import User from '../model/user.js';
import basicAuth from '../middleware/basic-auth.js';
import superagent from 'superagent';


export default new Router()
  .get('/oauth/google/code', (req, res, next) => {
    console.log('req.query', req.query);
    if(!req.query.code){
      res.redirect(process.env.CLIENT_URL);
    })
      .then(res => {
        console.log('google token data', res.body);
        return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
          .set('Authorization', `Bearer ${res.body.access_token}`);
      })

.post('/signup', bodyParser.json(), (req, res, next) => {
  new User.createFromSignup(req.body)
    .then(user => user.tokenCreate())
    .then(token => {
      res.cookie('Dictation-Token', token);
      res.send(token);
    })
    .catch(next);
})
.get('/login', basicAuth, (req, res, next) => {
  req.user.tokenCreate()
    .then((token) => {
      res.cookie('Dictation-Token', token);
      res.send(token);
    })
    .catch(next);
})
.get('/usernames/:username', (req, res, next) => {
  User.findOne({username: req.params.username})
    .then(user => {
      console.log('user', user);
      if(!user)
        return res.sendStatus(200);
      return res.sendStatus(409); // test
    })
    .catch(next);
})
.get('/user', (req, res, next) => {
  User.fromToken(req.headers.authorization.split('Bearer ')[1])
    .then(user => {
      res.json(user);
      return user;
    })
    .catch(next);
});
