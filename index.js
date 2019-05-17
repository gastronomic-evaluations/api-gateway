require('dotenv').config()
const http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
 
const app = express()
const ApiServiceProxy = httpProxy(process.env.GASTRONOMIC_EVALUATIONS_API)
const AppServiceProxy = httpProxy(process.env.GASTRONOMIC_EVALUATIONS_APP)
const LandingPageServiceProxy = httpProxy(process.env.LANDING_PAGE)

const PORT = process.env.PORT

app.get('/', (req, res, next) => {
  LandingPageServiceProxy(req, res, next);
})

app.get('/api/*', (req, res, next) => {
  ApiServiceProxy(req, res, next);
})
 
app.get('/app/*', (req, res, next) => {
  AppServiceProxy(req, res, next);
})
 
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 
const server = http.createServer(app);
server.listen(PORT, () => console.log(`Running on port ${PORT}`));
