
import { Router } from "express";
import { createPost } from "../controlers/post/createPost.js";
import { getAllPosts } from "../controlers/post/getAllPosts.js";
import { getAllPostsByUser } from "../controlers/post/getAllPostsByUser.js";
import { deleteAllPostsByUser } from "../controlers/post/deleteAllPostsByUser.js";
import { deleteOnePost } from "../controlers/post/deleteOnePost.js";
import { updatePostByUser } from "../controlers/post/updatePostByUser.js";

const router = Router() 



router.post("/new" , createPost)
router.get("/all" ,getAllPosts )
router.delete("/delete/all" , deleteAllPostsByUser)
router.delete("/delete/:id" , deleteOnePost)
router.patch("/update" , updatePostByUser)



export{
    router
}