import express    from 'express';
import webpack    from 'webpack';
import path       from 'path';
import config     from '../webpack.config';
import bodyParser from 'body-parser';
import morgan     from 'morgan';

const app      = express();
const compiler = webpack(config);

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

console.log('App.js Get Environment instance -- '+process.env.instance);
let instance;
if(process.env.instance){
  instance= process.env.instance
}else{
  instance = 'dev';
}

require('./api/AuthRoutes')(app, instance);
require('./api/FleetMetricRoutes')(app, instance);
require('./api/HomePageRoutes')(app, instance);


var port = Number( process.env.PORT || 8080 );
app.listen(port, function(){
  console.log( "Listening on port " + port );
});
