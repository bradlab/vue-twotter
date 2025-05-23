const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enfonce = require('express-sslify');

const app = express();

app.use(enfonce.HTTPS({trustProtoHeader: true}));
app.use(serveStatic(__dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);
