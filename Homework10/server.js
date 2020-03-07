const express = require("express");
const routesapi = require("./routes/routesapi");
const routeshtml = require("./routes/routeshtml");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routesapi);
app.use("/", routeshtml);
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));
