const httpProxy = require('express-http-proxy');

const {
  GASTRONOMIC_EVALUATIONS_API,
  GASTRONOMIC_EVALUATIONS_APP,
  LANDING_PAGE,
  GE_USERS_API
} = process.env

const ApiServiceProxy = httpProxy(GASTRONOMIC_EVALUATIONS_API);
const AppServiceProxy = httpProxy(GASTRONOMIC_EVALUATIONS_APP);
const UserServiceProxy = httpProxy(GE_USERS_API);
const LandingPageServiceProxy = httpProxy(LANDING_PAGE);

module.exports = (app) => {
  app.route(['/', '/assets/*']).get(LandingPageServiceProxy);
  app.route('/app/*').get(AppServiceProxy);
  app.route('/users/api/*').all(UserServiceProxy);
  app.route('/restaurants/api/*').all(ApiServiceProxy);
  app.route('/healthcheck')
    .get((req, res) => res.status(200).json({ status: 'ok' }));
}
