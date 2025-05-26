
const  mongoose  = require("mongoose");





const Post  = mongoose.model("Post" , {

postTitle : {type : String},
postDesc: { type :String},
shortDesc : {type : String},
postImgUrl : {type : String}


})


module.exports = {Post}

