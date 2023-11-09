const router = require("express").Router();

const userControler = require("../controlers/userControler");

router.route("/user").post((req, res) => userControler.create(req, res));

router.route("/user").get((req, res) => userControler.getAll(req, res));

router.route("/user/:id").get((req, res) => userControler.get(req, res));

router.route("/user/:id").delete((req, res) => userControler.delete(req, res));

router.route("/user/:id").put((req, res) => userControler.update(req, res));

module.exports = router;