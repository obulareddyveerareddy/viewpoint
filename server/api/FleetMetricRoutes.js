
import authentication from "./../db/Spreadsheet";

module.exports = function(app){

  app.use('/api/fleetmetric/active/user', function(req, res){
    authentication.readSpreadSheetById();
    res.send({user:req.user});
  });

};
