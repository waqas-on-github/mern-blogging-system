import Prisma from "../prisma.js"
import CustomError from "../utils/CustomError.js"

const getOneUser = async (userId) => { 
  
   console.log(userId);
   
    const user = await Prisma.user.findUnique({
       where : {id : parseInt(userId)}
    }) 
   
    if(!user) throw new CustomError("can not find user " , 401 , "line 9 getoneuser helper")
   
    return user
   
   
   }
   
   export {
    getOneUser
   }