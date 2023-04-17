import User from '../models/User.js';

export const get = async (id) => {
    const user = await User.findById(id);
    // .populate("favorites").populate("postulations")

    if (!user) return 'error';
    const { password: _, ...userData } = user.toJSON();
    return userData;
};