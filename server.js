const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./configs/webpack.config');
const Express = require('express');

const app = new Express();
const port = 3000;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use('/static', Express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/bad', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-bad.html'));
});

app.get('/good', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-good.html'));
});

app.get('/awesome', (req, res) => {
  res.sendFile(path.join(__dirname, '/index-awesome.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
