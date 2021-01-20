const UserController = require('../controllers/user.controller');

module.exports = app =>{
    app.post("/api/myShoeCloset/register", UserController.registerUser);
    app.post("/api/myShoeCloset/login", UserController.loginUser);
    app.post("/api/myShoeCloset/logout", UserController.logoutUser);

    app.get("/api/myShoeCloset/user/", UserController.getLoggedInUser);
    app.get("/api/myShoeCloset/user/shoes", UserController.getShoes);
    app.put("/api/myShoeCloset/user/createShoe", UserController.createShoe);
    app.put("/api/myShoeCloset/user/deleteShoe/:shoeId", UserController.deleteShoe);
};