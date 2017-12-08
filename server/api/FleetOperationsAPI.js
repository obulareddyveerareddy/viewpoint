
module.exports = function(app){

  app.get("/api/org/fleetoperations", function(req, res){
    console.log('------------------->>> /api/org/fleetoperations <<<-------------------');
    let fleet = [];
    fleet.push({id:1, category:'LMV', regNumber:'KA 05 ME 2691', shortName:'Breeza', service:'Personal', seatCapacity:5, status:true, viewId:4});
    fleet.push({id:2, category:'LMV', regNumber:'KA 05 ME 2691', shortName:'Breeza', service:'Personal', seatCapacity:5, status:true, viewId:4});
    fleet.push({id:3, category:'LMV', regNumber:'KA 05 ME 2691', shortName:'Breeza', service:'Personal', seatCapacity:5, status:true, viewId:4});
    fleet.push({id:4, category:'LMV', regNumber:'KA 05 ME 2691', shortName:'Breeza', service:'Personal', seatCapacity:5, status:true, viewId:4});
    res.send(fleet);
  });

}
