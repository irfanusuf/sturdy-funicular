const nodemailer = require ("nodemailer")




const transport = nodemailer.createTransport({

service : "mail322.mailasp.net",
auth : {

    user : "contact@australasia-apparels.shop",
    pass : "8Nb_h2!BK@p3"    // app password 
},
port: 587


})



module.exports = {transport}