const YtSchema = require("../Model/YtSchema");
exports.getAllTaskData = async (req, res) => {
  try {
    let data = [];
    const { category, status, email } = req.body;
    console.log("status", status);
    console.log(category);
    console.log(email);
    if (category === "All") {
      if (status === "All") {
        data = await YtSchema.find({
          $or: [
            { status: status },
            {
              requestedMail: { $ne: email },
              assignEmail: { $in: [null, "", undefined] },
            },
          ],
        });
        console.log("GetALLTaskData",data);

        // data = await YtSchema.find({requestedMail:{$ne:email},assignEmail:{$ne:email} });
      } else if (status === "Requested") {
        data = await YtSchema.find({ requestedMail: email, status: status });
      } else if (status === "Assigned") {
        data = await YtSchema.find({ status: status, assignEmail: email });
      }
    } else {
      data = await YtSchema.find({ ytCategory: category, status: status });
    }
    // console.log("3")
    // console.log("Data Print",data)
    // console.log("4")
    console.log(data);
    return res.status(200).json({
      success: true,
      data,
      message: "Video Upload Data Found",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "Upload Video Data Not Found",
    });
  }
};
