const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");
const router = Router();

const secret = require("../config")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;
        const admin =await Admin.create({
            username,
            password
        });

        res.json({
            message: 'Admin created successfully'
        });

    } catch (error) {
        console.log("SIGNUP ERROR", error);
    }
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({
            username,
            password
        });

        if (!admin) {
            return res.status(404).json({
                message: 'Admin not found'
            });
        }

        const token = jwt.sign({
            username: admin.username
        }, secret);

        res.json({
            message: 'Admin signed in successfully',
            token
        });

    } catch (error) {
    console.log("SIGNIN ERROR", error);
}

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const { title, description, imageLink, price } = req.body;
        const course = await Course.create({
            title,
            description,
            imageLink,
            price
        });

        res.json({
            message: 'Course created successfully',
            courseId: course._id
        });

    } catch (error) {
        console.log("Create Course ERROR", error);
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.json({
        courses
    });
});

module.exports = router;