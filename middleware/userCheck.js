const Auth = (req,res,next)=>{
    let {username,password,email} = req.body;
    if(username && password && email){
        res.send("User Data Added")
        next();
    }
    else{
        console.error("Fill the valid data");
    }
    
}
module.exports = Auth;