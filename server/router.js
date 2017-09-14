
const path = require('path')
const AuthenticationRouter = require('./routes/Authentication/authentication.router');
const passport = require('passport');
const passportService = require('./services/passport');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {

  console.log('>>> router.js <<< in app');

  // evaluate if user request has JWT && if provided JWT authenticates
  // send appropriate res (user/!user) locals with route/response
  // set client-side view/state/context changes for above response
  // need to further review react method for above response

  app.get('/', function (req, res) {
  // app.get('/', requireAuth, function(req, res) {
    // res.send({ message: 'Super secret code is ABC123' });
    res.sendFile(res.locals.publicViews + '/index.html');
  });

  app.get('/signin', function (req, res) {
    res.send('>>>>>>> app.get /signin <<<<<<<<<<');
  });

  app.get('/signup', function (req, res) {
    res.send('>>>>>>> app.get /signup <<<<<<<<<<');
  })

  app.use(AuthenticationRouter);

}

/*
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user.profile);
    }
);
*/
