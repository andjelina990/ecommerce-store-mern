const mongoose = require("mongoose");

const subsribersSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
    },
    subscribetAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const SubscribersModel = mongoose.model("subscribes", subsribersSchema);

module.exports = SubscribersModel;
