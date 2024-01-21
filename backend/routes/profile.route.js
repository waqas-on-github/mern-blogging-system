import { Router } from "express";
import { createProfile } from "../controlers/profile/createProfile.js";
import { getOneProfile } from "../controlers/profile/getOneProfile.js";
import { deleteOne } from "../controlers/user/deleteOne.js";
import { updateOneProfile } from "../controlers/profile/updateProfile.js";
const router = Router() 



router.post("/new" , createProfile)
router.get("/:id" , getOneProfile)
router.delete("/delete/:id" , deleteOne)
router.patch("/update/:id" , updateOneProfile)




export{
    router
}