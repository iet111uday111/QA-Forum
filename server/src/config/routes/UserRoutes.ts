import express = require('express');

import UserController = require('../../controllers/UserController');
import ValidateUser = require('../middlewares/ValidateUser');

var router = express.Router();

class UserRoutes {
    private _UserController: UserController;

    constructor() {
        this._UserController = new UserController();
    }

    get routes() {
        var controller = this._UserController;



        router.post("/user", controller.create);
        router.post("/login", controller.login);

        /**
        * @description allUsers route is protected with validate user guard
        */
        router.get("/auth/allUsers", ValidateUser.auth, controller.retrieve);
        router.get("/auth/logout", ValidateUser.auth, controller.logout);



        return router;
    }
}

Object.seal(UserRoutes);
export = UserRoutes;