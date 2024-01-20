import Prisma from "../prisma.js";


const checkUserExists = async  (email) => {
    
    const userExists = await Prisma.user.findUnique({ 
        where : {
            email: email,
        }
    })

    // if(!userExists) throw new CustomError("user don not exists" , 401 , "line 11 ceckuserexists helper")
    return userExists
}


export{
    checkUserExists}