import express, { Router } from 'express'
import { createPort, deletePost, getAllPosts, getSinglePost, updatePost } from '../controllers/postController'

const router:Router = express.Router()

router.get('/',getAllPosts)
router.get('/:id',getSinglePost)
router.post('/',createPort)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)


export default router