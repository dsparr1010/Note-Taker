const path = require('path');
const express = require("express");
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
let noteCount = 1;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(morgan ('dev'));

require("./routes/apiRoutes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});