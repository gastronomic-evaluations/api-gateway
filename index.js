const http = require('http');
const app = require('./src/app');

const { PORT } = process.env;

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Running on port ${PORT}`));
