import userRouter from "./userRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js";

export const routerApi = (app) => {
  app.use("/user", userRouter);
  app.use("/post", postRouter);
  app.use("/comment", commentRouter);
};
