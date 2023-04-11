import router from './userRoutes.js'
import postRouter from './postRoutes.js'
import commentRouter from './commentRoutes.js'

const routerApi = (app) => {
    app.use("/user", router);
    app.use("/post", postRouter);
    app.use("/comment", commentRouter);
};


export default routerApi