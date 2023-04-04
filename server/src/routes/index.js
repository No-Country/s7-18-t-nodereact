import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js";

export const routerApi = (app) => {
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/api/v1/comment", commentRouter);
};
