import express from 'express'
import { getPosts,createPost, updatePost} from '../controllers/posts.js';


const router = express.Router()
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
// router.get('/:id', getPost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);


export default router




// router.get('/', (req,res) => {
//      res.send('this works!!!')
//  })