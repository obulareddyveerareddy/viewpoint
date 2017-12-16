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

require('./api/AuthRoutes')(app, db);
require('./api/FleetMetricRoutes')(app, db);
require('./api/GoogleCalendarRoutes')(app, db);

/***
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${port}`);
  }
});

*/

var port = Number( process.env.PORT || 8080 );
app.listen(port, function(){
  console.log( "Listening on port " + port );
});
