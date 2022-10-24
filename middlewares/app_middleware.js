const middleware = (req, res, next) => {
    console.log("Request Parameters", req.params);
    console.log("I am Application Level Middleware");
    next();
};
export default middleware;
