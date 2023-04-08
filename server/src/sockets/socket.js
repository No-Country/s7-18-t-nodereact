import  createPost  from '../controllers/postController.js';
import socketIo from 'socket.io' 

export default createSocketServer = (server) => {
    const io = socketIo(server, {
        cors: {
            origin: '*',
        },
        });
    
        io.on('connection', (socket) => {
        // console.log(`New socket connection: ${socket.id}`);
    

        socket.on('online-client', async(payload) => {
            const { id } = payload;
            try {
                const user=await  User.findByIdAndUpdate(id, 
                { isOnline: true,socketId:socket.id },
                {new:true})

            } catch (error) {
                console.log(error);
            }
        });
        socket.on('get-posts', async () => {
            try {
            const posts = await getPosts();
            io.to(socket.id).emit('posts', posts);
            } catch (err) {
            console.error(err);
            }
        });
        
        socket.on('get-comments', async ({ place, docId }) => {
            try {
            const comments = await getComments(place, docId);
            io.to(socket.id).emit('comments', comments);
            } catch (err) {
            console.error(err);
            }
        });
    
    
        socket.on('create-post', async ({ payload }) => {
            try {
            const post = await createPost(payload, socket.id);
            io.emit('post-created', post);
            } catch (err) {
            console.error(err);
            }
        });
    
        socket.on('create-comment', async ({ payload, place, docId }) => {
            try {
            const comment = await createComment(payload, place, docId, socket.id);
            io.emit('comment-created', comment);
            } catch (err) {
            console.error(err);
            }
        });
    
        socket.on('disconnect', async() => {
            try {
                await User.updateOne({socketId:socket.id},
                { isOnline: false,lastSeen:Date.now(),socketId:null })
            } catch (e) {
                console.log(e);
            }
        });
        });
    };