const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/Person");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Person.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Invalid username." });
      }
      const isPasswordMatch = user.password === password;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrecct password." });
      }
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;
