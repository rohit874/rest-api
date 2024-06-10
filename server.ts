import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/db";

const startServer = async () => {
    await connectDB(); //connect database
    const port = config.port || 3000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
};

startServer();