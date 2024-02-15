const express = require('express');
const v1ProductRoutes = require("./v1/routes/productRoutes");
const morgan = require('morgan');
const cors = require('cors');

const appServer = express();
const PORT = process.env.PORT || 3000;
appServer.use(cors())
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true }));
appServer.use(morgan("tiny"));
appServer.use("/api/v1/products", v1ProductRoutes);

appServer.listen(PORT, ()=> {
    console.log('🚀 Server up and running on port: ', PORT);
});
