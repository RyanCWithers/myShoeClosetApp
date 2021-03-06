const UserController = require('../controllers/user.controller');

const {authenticate} = require('../config/jwt.config');

module.exports = app =>{
    app.post("/api/myShoeCloset/register/", UserController.registerUser);
    app.post("/api/myShoeCloset/login/", UserController.loginUser);
    app.post("/api/myShoeCloset/logout/", UserController.logoutUser);

    app.get("/api/myShoeCloset/user", authenticate, UserController.getLoggedInUser);
    app.get("/api/myShoeCloset/user/:shoeId", authenticate, UserController.getShoe);
    app.get("/api/myShoeCloset/allUsers", UserController.getAllUsers); //for development purposes

    app.put("/api/myShoeCloset/user/:id/update", authenticate, UserController.updateUser);
    app.put("/api/myShoeCloset/user/createShoe",  authenticate, UserController.createShoe);
    app.put("/api/myShoeCloset/user/update/:shoeId", authenticate, UserController.updateShoe);
    
    app.delete("/api/myShoeCloset/user/:id/delete", UserController.deleteUser);
    app.delete("/api/myShoeCloset/user/deleteShoe/:shoeId", authenticate, UserController.deleteShoe);
};