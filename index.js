const express = require('express');
const basicAuth = require('express-basic-auth');

/*
 *
 */

const app = express();

app.use('/admin', basicAuth({
  challenge: true,
  realm: 'now-express-basic-auth',
  users: { 'admin': 'admin' },
  unauthorizedResponse: 'Restricted area. Please login (admin:admin).'
}));

app.use(express.static(__dirname + '/example'));

/*
 *
 */

app.listen(4444, () => console.log('Listening on port 4444...'));
