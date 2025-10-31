const helloWorld = require(`${__models}/helloWorld`);
const { responseHandler } = require(`${__utils}/responseHandler`);
const { connectToDatabase, disconnectFromDatabase, startIdleTimer } = require(`${__config}/dbConn`)

exports.helloWorld = async (req, res) => {
    try {
        await connectToDatabase();
        return responseHandler.success(res, null, "Hello World!");
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};

// CREATE
exports.createHelloWorld = async (req, res) => {
    try {
        await connectToDatabase();
        const { helloWorld: message } = req.body;

        const created = await helloWorld.create({ helloWorld: message });

        return responseHandler.success(res, created, "Created successfully", 201);
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};

// READ ALL
exports.getAllHelloWorlds = async (req, res) => {
    try {
        await connectToDatabase();

        const allMessages = await helloWorld.find();

        return responseHandler.success(res, allMessages, "Fetched all records");
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};

// READ BY ID
exports.getHelloWorldById = async (req, res) => {
    try {
        await connectToDatabase();
        const { id } = req.params;

        const message = await helloWorld.findById(id);

        if (!message) return responseHandler.notFound(res, "Record not found");

        return responseHandler.success(res, message, "Record fetched");
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};

// UPDATE
exports.updateHelloWorld = async (req, res) => {
    try {
        await connectToDatabase();
        const { id } = req.params;
        const { helloWorld: message } = req.body;

        const updated = await helloWorld.findByIdAndUpdate(
            id,
            { helloWorld: message },
            { new: true }
        );

        if (!updated) return responseHandler.notFound(res, "Record not found");

        return responseHandler.success(res, updated, "Updated successfully");
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};

// DELETE
exports.deleteHelloWorld = async (req, res) => {
    try {
        await connectToDatabase();
        const { id } = req.params;

        const deleted = await helloWorld.findByIdAndDelete(id);

        if (!deleted) return responseHandler.notFound(res, "Record not found");

        return responseHandler.success(res, deleted, "Deleted successfully");
    } catch (error) {
        console.log(error);
        return responseHandler.error(res, error);
    }
};
