// Require and setup mongoosy
const {
  mongoose,
  express,
  app,
  pwencrypt,
  session
} = require('mongoosy')({
  expressJson: {
    limit: '100mb'
  },
  connect: {
    url: require('./settings/dbConnectionUrl.json')
  }
});

// Add logic to handle SSE (Server Sent Events)
require('./SSE-handler')(app);

// Start the Express web server
app.listen(4000, () =>
  console.log('Backend running!'));