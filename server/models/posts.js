import mongoose from 'mongoose';

// Create a schema for posts with title, content, user, and timestamps
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Title is required
  },
  content: {
    type: String,
    required: true, // Content is required
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who created the post
    ref: 'User', // 'User' refers to the User model
    required: true, // Each post must be linked to a user
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

export default mongoose.model('Post', postSchema); // Export the Post model
