import Order from "../models/order.model.js";
import Gig from "../models/gig.model.js";

export const createOrder = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.gigId);
    const newOrder = new Order({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "cash",
    });

    const savedOrder = await newOrder.save();
    res.status(200).send("Successful");
  } catch (error) {
    next(error);
    console.log(error);
  }
};
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).json(orders);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
