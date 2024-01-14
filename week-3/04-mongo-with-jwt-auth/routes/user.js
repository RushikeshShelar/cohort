const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

const secret = require("../config")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const user = await User.create({
        username,
        password
    });

    res.json({
        message: 'User created successfully'
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            username,
            password
        });

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }


        const token = jwt.sign({
            username: user.username
        }, secret);

        res.json({
            message: 'User signed in successfully',
            token
        });

    } catch (error) {
        console.log("SIGNIN ERROR", error);

    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find();
    res.json({
        courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {

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
    } catch (error) {
        console.log("COURSE PURCHASE ERROR", error);
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const username = req.headers.username;

    const user = await User.findOne({
        username
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({
        purchasedCourses: courses
    });


});

module.exports = router