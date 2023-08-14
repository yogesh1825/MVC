const Auth = (req,res,next)=>{
    let {username,password,email} = req.body;
    console.log(req.body);
    if(username && password && email){
        
   return next();
    }
    else{
        console.error("Fill the valid data");
        return res.send("User Data Invalid")
    }
    
}
module.exports = Auth;