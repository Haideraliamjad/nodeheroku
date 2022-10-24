import express from "express";
const app = express();
const port = 3000;
import router from "./router/web.js";
import middleware from "./middlewares/app_middleware.js";
app.use(middleware);
app.use(express.static("public"));
app.use(router);
app.set("view engine", "ejs");
app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});