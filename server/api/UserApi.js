import jwt        from 'jsonwebtoken';
import cfg        from './../config';

module.exports = function(app){
  app.post("/api/user/validate",  function(req, res) {
    console.log('------------------->>> /api/user/validate <<<-------------------');
    console.log(req.body);
    console.log(req.body.userName);
    console.log(req.body.userPassword);
    let payload = {userName:req.body.userName, firstName:'Veera Reddy', lastName:'obulareddy', mobile:'+918105555322'}
    var token = jwt.sign(payload, cfg.jwtSecret , { expiresIn: cfg.jwtSession.expiresIn  });

    // return the information including token as JSON
    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  });
}
