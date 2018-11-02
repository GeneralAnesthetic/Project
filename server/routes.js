var express = require("express");
var router = express.Router();
var controllers = require("./controllers");
var passport = require("passport");
var passportConfig = require("../client/src/components/Passport/Passport");
var {
  validateBody,
  schemas
} = require("../client/src/components/Helpers/routeHelpers");
// const userController = controllers.User;
const snippetController = controllers.Snippet;
// const router = Router();

router.get("/", (req, res) => {
  console.log("root api");

  res.status(200).json({
    message: "welcome to portfolio Api"
  });
});
router.post(
  "/snippet/signup",
  validateBody(schemas.authSchema),
  snippetController.signUp
);
router.post(
  "/snippet/signin",
  validateBody(schemas.authSchema),
  passport.authenticate("local", { session: false }),
  snippetController.signIn
);
router.get(
  "/snippet/secret",
  passport.authenticate("jwt", { session: false }),
  snippetController.secret
);
// getting and posting new portfolio
router
  .get("/snippet", snippetController.getAll)
  .post("/snippet", snippetController.addNew);

// gettting, updating and deleting a single portfolio
router
  .get("/snippet/:snippetId", snippetController.getSingle)
  .put("/snippet/:snippetId", snippetController.update)
  .delete("/snippet/:snippetId", snippetController.remove);
// router.post("user/login", userController.login);
// router.post("user/signup", userController.signup);

module.exports = router;
