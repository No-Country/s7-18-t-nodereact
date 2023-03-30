const userRouter = require("./userRoutes.js");
const postRouter = require("./postRoutes.js");
const commentRouter = require("./commentRoutes.js")

const routerApi = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/comment", commentRouter);
};


module.exports = routerApi;