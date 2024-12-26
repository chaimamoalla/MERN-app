import express from 'express';
import { 
  createPost, 
  getAllPosts, 
  getPostById, 
  updatePost, 
  deletePost 
} from '../controllers/postsController.js';
import authMiddleware from '../middlewares/authMiddleware.js'; // Import your authentication middleware

const router = express.Router();

// Routes mapped to controller functions with auth middleware
router.post('/', authMiddleware, createPost);              // Create a post (auth required)
router.get('/', getAllPosts);                              // Get all posts (public)
router.get('/:id', getPostById);                           // Get a post by ID (public)
router.put('/:id', authMiddleware, updatePost);           // Update a post by ID (auth required)
router.delete('/:id', authMiddleware, deletePost);        // Delete a post by ID (auth required)

export default router;  // Export the router
