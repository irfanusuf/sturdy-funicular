const registerController = (req, res) => {

    // const username = req.body
    // const email = req.body
    // const password = req.body


    // destructuring 
    const {username , email , password} = req.body 



    //  server side validation

    if(username === "" || email === "" || password === ""){
       return res.status(400).json({message : "All the feilds with * are required !" , success : false})
    } 


    










};

const loginController = (req, res) => {};





module.exports = {
  registerController,
  loginController,
};
