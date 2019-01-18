import express = require('express');

import UserRoutes = require('../UserRoutes');

var app = express();

class BaseRoutes {

    get routes() {
        app.use("/api/v1", new UserRoutes().routes);
        return app;
    }
}
export = BaseRoutes;