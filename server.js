require("dotenv").config()
const dbClient = require("./src/config/database")
const express = require("express")
const cors = require("cors")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")


dbClient();

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Account API",
            version: "1.0.0",
            description: "Here is the documentation of the account micro service."
        },
    },
    apis: ["./src/1.0/routes/account.routes.js"],
}

const specs = swaggerJSDoc(options)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.use("/1.0/accounts", require("./src/1.0/routes/account.routes"))

// Middleware pour gérer les requêtes OPTIONS
app.options("/1.0/accounts/register", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.sendStatus(200);
});

app.use("/1.0/accounts", require("./src/1.0/routes/account.routes"));

app.listen(process.env.APP_PORT, process.env.APP_URL, () =>
  console.log(`API server started on ${process.env.APP_URL}:${process.env.APP_PORT}`)
);
