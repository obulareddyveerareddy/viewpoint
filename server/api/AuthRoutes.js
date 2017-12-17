import jwt        from 'jsonwebtoken';
import cfg        from './../config';
import passport   from 'passport';
import session    from 'express-session';

module.exports = function(app, db, instance){
  
  let passportConfig = {
      clientID:'1092169932515-86emdthiplvoij4n1gieekep3g4thjv3.apps.googleusercontent.com',
      clientSecret:'N0N6E3yjzDyTuYoxJGzDczIT',
      callbackURL:'https://viewpoint-obulareddyveerareddy.c9users.io/api/auth/google/callback',
      passReqToCallback   : true
    };
  if(instance === 'prod'){
    passportConfig = {
      clientID:'1092169932515-86emdthiplvoij4n1gieekep3g4thjv3.apps.googleusercontent.com',
      clientSecret:'N0N6E3yjzDyTuYoxJGzDczIT',
      callbackURL:'https://uvatech.herokuapp.com/api/auth/google/callback',
      passReqToCallback   : true
    }
  }

  var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
  passport.use(new GoogleStrategy(passportConfig,
  function(req, accessToken, refreshToken, profile, done){
    done(null, profile);
  }));

  app.use(session({
    secret:'breeza'
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  passport.serializeUser(function(user, done){
    done(null, user);
  });
  passport.deserializeUser(function(user, done){
    done(null, user);
  });

  app.route('/api/auth/google/callback')
     .get(passport.authenticate('google', {
       successRedirect:'/api/fleetmetric/active/user',
       failure:'/api/auth/failure'
  }));

  app.route('/api/auth/google')
     .get(passport.authenticate('google', {
       scope:['https://www.googleapis.com/auth/userinfo.profile',
              'https://www.googleapis.com/auth/userinfo.email']
     }));

  app.use('/api/auth/success', function(req, res){
    res.redirect('/#/fleetmetric/');
  })

  app.use('/api/auth/failure', function(req, res){
    res.redirect('/#/failure/');
  })
}
