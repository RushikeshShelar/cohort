const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const admin = await Admin.create({
        username,
        password
    });
    await admin.save();

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    const course = await Course.create({
        title, 
        description, 
        price, 
        imageLink
    })

    res.json({
        message: 'Course created successfully', 
        courseId: course._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    await Course.find().then((courses) => res.json(courses))
});

module.exports = router;