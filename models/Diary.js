const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");


const DiarySchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  created_date: {
    type: String,
    default:moment().format("YYYY-MM-DD")
  },
  updated_date: {
    type: Date
  }
}
);

module.exports = new mongoose.model("Diary", DiarySchema, "Diary");