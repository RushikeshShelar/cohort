const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { url } = require("inspector");

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

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic.
    await Course.find().then((course) => res.json(course))
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
   const username =  req.headers.username

    const user = await User.findOne({
        username
    });

    console.log(user.purchasedCourses);

    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })

    res.json({
        purchasedCourses: courses
    })
});

module.exports = router