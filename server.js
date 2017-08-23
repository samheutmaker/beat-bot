let express = require('express');
let app = express();
let PORT = process.env.PORT || 8080;

app.use(express.static('public'))

app.listen(PORT, () => {
	console.log('Server live on port ' + PORT);
})

