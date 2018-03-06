var express = require('express');
var router = express.Router();
var UserModel = require('../model/UserModel');
var GoodsModel = require('../model/GoodsModel');
var multiparty = require('multiparty');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page', {});
});
router.get('/login',function(req,res){
	res.render('login',{});
});
router.get('/add',function(req,res){
		res.render("add", {});
})
router.get('/list',function(req,res){
	var pagenum = parseInt(req.query.pagenum||1);
	var count = parseInt(req.query.count || 5);
	GoodsModel.count({},function(err,title){
		var query = GoodsModel.find({}).skip((pagenum-1)*count).limit(count).sort({date:-1})
		var sum = Math.ceil(title/count);
		query.exec(function(err,docs){
			
			res.render("list", {listes:docs,pagenum:pagenum,count:count,sum:sum,title:title});
		})
	})
	
})
router.post('/api/add',function(req,res){
	var Form = new multiparty.Form({
		uploadDir :'./public/images'
	})
	Form.parse(req,function(err,body,files){
		var goods_name = body.goods_name[0];
		var size = body.size[0];
		var sel = body.sel[0];
		var addsel = body.addsel[0];
		var bigname = body.bigname[0];
		var saleprice = body.saleprice[0];
		var count_1 = body.count_1[0];
		var count_2 = body.count_2[0];
		var count_3 = body.count_3[0];
		var count_4 = body.count_4[0];
		var count_5 = body.count_5[0];
		var count_6 = body.count_6[0];
		var count_7 = body.count_7[0];

		var imgName = files.img[0].path;
		imgName = imgName.substr(imgName.lastIndexOf('\\') +1);
		var gm = new GoodsModel();
		gm.goods_name = goods_name;
		gm.size = size;
		gm.sel = sel;
		gm.addsel = addsel;
		gm.bigname = bigname;
		gm.saleprice = saleprice;
		gm.count_1 = count_1;
		gm.count_2 = count_2;
		gm.count_3 = count_3;
		gm.count_4 = count_4;
		gm.count_5 = count_5;
		gm.count_6 = count_6;
		gm.count_7 = count_7;
		
		gm.img = imgName;
		gm.save(function(err){
			if(!err){
				res.send('商品保存成功');
			}else{
				res.send('商品保存失败')
			}
		})
	})
})
router.post('/api/add',function(req,res){
	GoodsModel.find({},function(err,docs){
		res.render('list',{list:docs});
	})
})
router.post('/api/del',function(req,res){
	GoodsModel.findByIdAndRemove({_id:req.body.gid},function(err){
			var result = {
				status:1,

				message:"删除成功"
			}
			if(err){
				result.status = 109;
				result.message = '删除失败'
			}
			res.send(result);

	})
})
router.post('/api/search',function(req,res){
	var goods_name = req.body.goods_name;
	// console.log(goods_name);
	var result = {
		status:1,

		message:"查询成功"
	}
	GoodsModel.count({goods_name:{$regex:goods_name}},function(err,title){
			var pagenum = parseInt(req.query.pagenum||1);
			var count = parseInt(req.query.count || 5);
			var sum = Math.ceil(title/count);
		GoodsModel.find({goods_name:{$regex:goods_name}},function(err,docs){
			
			if(!err){
				console.log("保存成功")
				result.status = 2;
				//res.render('search',{listes:docs});
				// res.send(docs);
				var json = {
					"arr" :docs,
					"abc" :{pagenum:pagenum,count:count,sum:sum,title:title}
				}
				res.send(json);
				console.log(json)
					
			}

		})
		
	})
})
router.post("/api/login",function(req,res){
	var username = req.body.username;
	var psw = req.body.psw;
	var result = {
		status:1,
		message:"登录成功"
	}
	UserModel.find({username:username,psw:psw},function(err,docs){
		if(!err && docs.length > 0){
			console.log('登录成功')
			res.send(result);
		}else{
			console.log('登录失败，请检查您的用户名或密码');
			result.status = -190;
			result.message = '登录失败，请检查您的用户名或密码';
			res.send(result);
		}
	})

})

module.exports = router;
