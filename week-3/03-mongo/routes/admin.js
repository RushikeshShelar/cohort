const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db')

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    Admin.create({
        username,
        password
    });

    res.json({
        message: 'Admin created successfully'
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink } = req.body;
    Course.create({
        title, 
        description, 
        price, 
        imageLink
    })

    res.json({
        message: 'Course created successfully', 
        courseId: "new course id",
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((courses) => res.json(courses))
});

module.exports = router;