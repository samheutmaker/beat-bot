SHELL := /bin/bash
.SILENT:

all:
	yarn
	yarn run build

dev: 
	yarn
	yarn run dev

start: 
	make all
	node server

prod:
	yarn
	yarn run build-prod

clean:
	rm -rf static
