import Prisma from "../../prisma.js";
import CustomError from "../../utils/CustomError.js";
import asyncHandler from "../../utils/asyncHandler.js";

const cookieoptionslogout = {
    httpOnly: true,
    expires: new Date(Date.now()),
  };

// user logout 
const logout = asyncHandler(async (req, res) => {

  const user = req.user

  if(!user )  throw new CustomError("login first user is not logged in " , 401 , "line 15 logout")
// clear cookies first 
  res.cookie("accessToken", null,  cookieoptionslogout);
  res.cookie("refreshToken", null,  cookieoptionslogout);
// delete refresh token from user table in db 
 const updateResult =  await  updateTokensTable(user.id , null )

  res.status(200).json({
    success: true,
    message: "user logged out",
    responce : updateResult
  });
});

// delete/set to  null  refresh token from user table in db 
const updateTokensTable = async(userId) => {

  const tokenTable = await Prisma.tokens.update({
    where : {userId : userId}, 
    data : {refreshToken : null}


  })

  return tokenTable

}



export {  logout };