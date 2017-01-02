global.base_url = process.cwd()
var express = require('express'),
	stylus 	= require('stylus'),
	nib 	= require('nib'),
	app = express(),
	router = require(base_url+'/router/router')(app);

function compile(str, path){
	return stylus(str)
		.set('filename',path)
		.use(nib())
}

app.set('views',__dirname + '/views')
app.set('view engine','jade')
app.use(stylus.middleware(
	{
		src: __dirname + '/public'
		, compile :compile
	}
))
app.use(express.static(__dirname  + '/public'))
app.listen(3000)




