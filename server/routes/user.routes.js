const UserController = require('../controllers/user.controller');

module.exports = app =>{
    app.post("/api/myShoeCloset/register", UserController.registerUser);
    app.post("/api/myShoeCloset/login", UserController.loginUser);
    app.post("/api/myShoeCloset/logout", UserController.logoutUser);

    app.get("/api/myShoeCloset/user/loggedIn", UserController.getLoggedInUser);
}