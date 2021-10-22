import express from 'express'
import { getPosts,createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';
// ? we include the middleware on specific actions aka in this case we want to give them one like per a post
import auth from "../middleware/auth.js";


const router = express.Router()

router.get('/', getPosts);
router.post('/',auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
// *this is a patch request because it involves us increasing the number of likes
router.patch('/:id/likePost',auth, likePost);



export default router




// router.get('/', (req,res) => {
//      res.send('this works!!!')
//  })