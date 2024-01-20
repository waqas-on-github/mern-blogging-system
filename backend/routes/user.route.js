import { Router } from "express";
import { createAccount } from "../controlers/user/createUser.js";
import { verifyEmail } from "../controlers/user/verifyEmail.js";
import { login } from "../controlers/user/login.js";
import { getProfiles } from "../controlers/user/getProfiles.js";
import { deleteOne } from "../controlers/user/deleteOne.js";
import { logout } from "../controlers/user/logout.js";
import { updateProfile } from "../controlers/user/updateuser.js";
import { refreshAccessToken } from "../controlers/user/refreshAccessToken.js";
import { isLoggendIn } from "../middlewares/auth.middleware.js";
import { limiter } from "../utils/rateLimit.js";

const router = Router() 

router.get("/" , (_, res) => res.send("sanity check user ") )

router.post("/new" , createAccount)
router.get("/verify/:token" , verifyEmail)
router.post("/login" , limiter,  login) // rate limit on more then 50 request per 15 minuts on this route 
router.get("/profiles" , isLoggendIn,   getProfiles)
router.delete("/delete/:id" , deleteOne)
router.get("/logout" , isLoggendIn,logout)
router.patch("/update/:id", updateProfile)
router.post("/refresh" , refreshAccessToken)



export {
    router
}