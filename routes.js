const HTTP_STATUS = require("./modules/helpers/httpStatus");

module.exports = (app) => {

  app.get('/', function(req, res, next) {
    res.render('home');
  });

  app.use("/api/v1/admin", require("./modules/routes/Admin"));
  
  app.use("/api/v1/users", require("./modules/routes/Users"));

  app.use((req, res, next) => {
    
    if (res._headerSent) {
      return next();
    }
    
    res
      .status(HTTP_STATUS.NOT_FOUND)
      .json({ error: "This route doesn't exist" });
  });
};
