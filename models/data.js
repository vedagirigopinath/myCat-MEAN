const mongoose = require('mongoose');
//const bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost:27017/meanauth');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  description: String,
  rate: Number
});

const blogs = mongoose.model('blogs', BlogPost);

module.exports.getProductDetails = function(callback){
	
	//working code
	blogs.find({}, function (err, docs) {
		docs.forEach(()=>{
			//console.log("from data model"+docs);
		});
	  });
	//blogs.find({}, callback);
}

module.exports.getBlogs = function(callback){
/*	blogs.find({}, function (err, docs) {
		docs.forEach(()=>{
			//console.log("method 2 data model"+docs);
			//console.log(callback);
			//callback;
		});
	});
*/
	blogs.find({}, callback);
		
}

module.exports.getPagining = function(callback){
	
	var query = {}
	var size= 10;
	var pageNo= 4;

  query.skip = size * (pageNo - 1)
  query.limit = size;

	blogs.find({},{}, query, callback);
	pageNo++;
}

module.exports.getPaginingByQuery = function(pageNum, callback){
	
	var query ={};
	var size= 100;
	var pageNo = pageNum;
	console.log('page number from DATA MODEL: ', pageNo);
	
	query.skip = size * (pageNo - 1)
	query.limit = size;
	blogs.find({},{}, query, callback);
	
}