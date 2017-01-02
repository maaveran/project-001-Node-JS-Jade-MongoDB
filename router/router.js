module.exports = (app)=>{

	app.get('/',(req,res)=>{
		res.end('hi there')
	})
	app.get('/index',function(req,res){
		res.render('index',{
			title : 'Home'
		})
	})
}