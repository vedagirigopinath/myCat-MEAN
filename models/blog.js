var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/mydb', ['blogs']);

// On Connection
db.on('connect', function () {
  console.log('Mongo JS database connected')
});
//On Error
db.on('error', function (err) {
  console.log('Mongo JS database error', err)
});
  
module.exports.getBlogs = function(res) {
  //var data = db.blogs.find();
  db.blogs.find({}, (rec, res)=>{
    if(rec){
      res.json(rec);
      console.log('Data '+ rec)
    }else{
      console.log('No Data '+ rec)
    }
  });
}