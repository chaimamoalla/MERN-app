import Post from '../models/posts.js'; // Import the Post model

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, content, user } = req.body; // Extract post data from request body

        const newPost = new Post({ title, content, user }); // Create a new post instance
        const savedPost = await newPost.save(); // Save the post to the database

        res.status(201).json(savedPost); // Respond with the created post
    } catch (error) {
        res.status(500).json({ error: 'Server error while creating post' });
    }
};

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name email'); // Fetch all posts with user info
        res.status(200).json(posts); // Respond with all posts
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching posts' });
    }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('user', 'name email'); // Find post by ID

        if (!post) return res.status(404).json({ error: 'Post not found' }); // Handle post not found

        res.status(200).json(post); // Respond with the found post
    } catch (error) {
        res.status(500).json({ error: 'Server error while fetching post' });
    }
};

// Update a post by ID
export const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body; // Extract new post data from request body
        const post = await Post.findById(req.params.id); // Find post by ID

        if (!post) return res.status(404).json({ error: 'Post not found' }); // Handle post not found

        // Update post fields
        post.title = title || post.title; // Update title if provided
        post.content = content || post.content; // Update content if provided

        const updatedPost = await post.save(); // Save the updated post
        res.status(200).json(updatedPost); // Respond with the updated post
    } catch (error) {
        res.status(500).json({ error: 'Server error while updating post' });
    }
};

// Delete a post by ID
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id); // Find post by ID

        if (!post) return res.status(404).json({ error: 'Post not found' }); // Handle post not found

        await post.remove(); // Remove the post
        res.status(200).json({ message: 'Post deleted successfully' }); // Confirm deletion
    } catch (error) {
        res.status(500).json({ error: 'Server error while deleting post' });
    }
};
