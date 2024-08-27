import express, { Router } from 'express'
import { createPort, deletePost, getAllPosts, getSinglePost, updatePost } from '../controllers/postController'

const router:Router = express.Router()

router.get('/post',getAllPosts)
router.get('/post/:id',getSinglePost)
router.post('/post',createPort)
router.put('/post/:id',updatePost)
router.delete('/post/:id',deletePost)


export default router