import userRouter from "./userRoutes.js";
import adminRouter from "./adminRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js";

const routerApi = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/admin", adminRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/comment", commentRouter);
};

export default routerApi;

