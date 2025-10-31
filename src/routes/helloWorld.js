// const passport = require("passport");

module.exports = (router, controller) => {
    router.post("/helloWorld", controller.helloWorld);
    router.post("/createHelloWorld", controller.createHelloWorld);
    router.get('/getAllHelloWorlds', controller.getAllHelloWorlds);
    router.get('/getHelloWorldById/:id', controller.getHelloWorldById);
    router.put('/updateHelloWorld/:id', controller.updateHelloWorld);
    router.delete('/deleteHelloWorld/:id', controller.deleteHelloWorld);
};
