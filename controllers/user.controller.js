import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated");
  } catch (error) {}
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
