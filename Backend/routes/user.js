const router = require("express").Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.post("/signUp", async (req, res) => {
    try {
        console.log('req body',req.body);
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password,
        });

        const token = await user.generateAuthToken();
        await user.save();
        //console.log(user.password)
        res.json( user );
    } catch (e) {
        console.log('error ',e)
        res.status(401).json({msg: e.message});
    }
});

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.status(201).json(user);
    } catch (e) {
        //console.log(e)
        res.send(e);
    }
});

router.get("/users/profile", auth, async (req, res) => {
    res.json(req.user);
});

router.get("/users/:id", async (req, res) => {
    var _id = req.params._id;
    try {
        const user = await User.findOne({ _id });
        res.send(user);
    } catch (e) {
        res.send({ error: e });
    }
});

router.get("/auth", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
