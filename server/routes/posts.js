import express from 'express'
import { getPosts,createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';


const router = express.Router()
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
// *this is a patch request because it involves us increasing the number of likes
router.patch('/:id/likePost', likePost);
// router.get('/:id', getPost);


export default router




// router.get('/', (req,res) => {
//      res.send('this works!!!')
//  })