import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).send("You are not authenticated");
  } catch (error) {}
};
