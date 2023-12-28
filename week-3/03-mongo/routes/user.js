const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    User.create({
        username,
        password
    })
    res.json({
        message: 'User created successfully' 
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic.
    Course.find().then((courses) => res.json(courses))
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const { courseId } = req.params;
    const { userId } = req.headers.username;
    User.findById(userId).then((user) => {
        user.courses.push(courseId);
        user.save();
    })  
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const { userId } = req.headers.username;
    User.findById(userId).then((user) => {
        const { courses } = user;
        res.json(courses);
    })
});
