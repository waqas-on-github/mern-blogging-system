import Prisma from "../prisma.js";
import CustomError from "../utils/CustomError.js";


const checkVerifiedUser = async(userId) => {

    const Verified = await Prisma.user.findUnique({
        where : {
            id: parseInt(userId) , 
            isVerfied : true 
        }
    })
  
    if(!Verified) throw new CustomError("user not exists or not verified ", 401 , "line 15 checkVerifiedUser") 

    return Verified
}



export{checkVerifiedUser}