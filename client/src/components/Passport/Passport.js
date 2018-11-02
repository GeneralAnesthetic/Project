var passport = require("passport");
var JWTStrategy = require("passport-jwt").Strategy;
var { ExtractJwt } = require("passport-jwt");
var { JWT_SECRET } = require("../Configuration/Config.js");
var SnippetModel = require("../../../../server/models.js");
var LocalStrategy = require("passport-local").Strategy;
// for production you'll need to set up bcrypt, not bcrypt.js, just change the requires and it should work

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await SnippetModel.findById(payload.sub);
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) => {
      try {
        const user = await SnippetModel.findOne({ email });
        if (!user) {
          return done(null, false);
        }
        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
          return done(null, false);
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
