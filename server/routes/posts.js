import express from 'express'
import { getPosts,createPost, updatePost, deletePost} from '../controllers/posts.js';


const router = express.Router()
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
// router.get('/:id', getPost);
// router.patch('/:id/likePost', likePost);


export default router




// router.get('/', (req,res) => {
//      res.send('this works!!!')
//  })