import express    from 'express';
import webpack    from 'webpack';
import path       from 'path';
import config     from '../webpack.config';
import bodyParser from 'body-parser';
import morgan     from 'morgan';
import low        from 'lowdb';
import FileSync   from 'lowdb/adapters/FileSync';

const app      = express();
const compiler = webpack(config);
const adapter  = new FileSync('fleetmetric.json');
const db       = low(adapter);
db.defaults({ authTokenDetails:{}, user: {} }).write();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function(req, res) {
  console.log('------------------- >>> This is default get route <<< -------------------');
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

console.log('instance -- '+process.env.instance);
let instance;
if(process.env.instance){
  instance= process.env.instance
}else{
  instance = 'dev';
}

require('./api/AuthRoutes')(app, db, instance);
require('./api/FleetMetricRoutes')(app, db, instance);
require('./api/GoogleCalendarRoutes')(app, db, instance);


var port = Number( process.env.PORT || 8080 );
app.listen(port, function(){
  console.log( "Listening on port " + port );
});
