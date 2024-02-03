const User = require("../Model/User");
const YtSchema = require("../Model/YtSchema");

exports.getEdAllDetail = async (req, res) => {
  try {
    console.log("1");
    const allEditor = await User.find({ accountType: "Editor" });
    if (!allEditor) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    console.log("2");

    return res.status(200).json({
      success: true,
      message: "All Data Fetch",
      allEditor,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Data Fetch Error",
    });
  }
};

exports.getYtAllDetail = async (req, res) => {
  try {
    const allYoutuber = await User.find({ accountType: "YouTuber" });
    if (!allYoutuber) {
      return res.status(400).json({
        success: false,
        message: "Data not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All Data Fetch",
      allYoutuber,
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: "Data Fetch Error",
    });
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const { userId } = req.body;

    const data = await User.findById(userId);

    return res.status(200).json({
      success: true,
      data,
      message: "User data retrieved successfully",
    });
  } catch (err) {
    return result.status(200).json({
      success: false,
      message: "User data not retrieved ",
    });
  }
};

exports.updateInCard = async (req, res) => {
  try {
    const { newStatus, id } = req.body;
    console.log(id);
    console.log(newStatus);
    const response = await YtSchema.findByIdAndUpdate(id, { status: newStatus }, { new: true });
    console.log(response);
    return res.status(200).json({
      success: true,
      response,
      message: "Card data updated successfully",
    });
  } catch (err) {
    return res.status(200).json({
        success: false,
        message: "Card data Not updated",
      });
  }
};
