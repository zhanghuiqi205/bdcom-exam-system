var express = require('express');
var router = express.Router();
var fs = require('fs');
var file ="../data/db.json";
// var db =JSON.parse(fs.readFileSync(file));   //在此读取文件不实时

/* GET users listing. */
router.post('/', function(req, res, next) {
  //读取数据库文件
  var db =JSON.parse(fs.readFileSync(file));
  
  if(db.users){
  	for(var i = 0; i < db.users.length; i++) {
  		
		console.log(req.body.login_id)
		console.log(req.body.login_password)
		console.log(db.users[i].id)
  		if(req.body.login_id == db.users[i].id && req.body.login_password == db.users[i].password){
  			console.log(11111);
  			res.render('users', { data: db.users[i]});
  			return;
  		}
  	}
  }else {
  	res.send('数据库出错！');
  	return;
  }

  res.send({
  	status:"false",
  	info: "用户不存在或者密码错误"
  });


  
});

module.exports = router;
