require('dotenv').config();
const app = require('./api');

const port = process.env.PORT;

app.listen(port, () => console.log('listening on port', port));
