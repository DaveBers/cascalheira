const router = require("express").Router()

const userRoutes = require("./service")

router.use("/", userRoutes);

module.exports= router;