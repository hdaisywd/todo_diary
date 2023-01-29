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
    default:moment().format("YYYY-MM-DD hh:mm:ss")
  },
  updated_date: {
    type: Date
  }
}
);

module.exports = new mongoose.model("Diary", DiarySchema, "Diary");



//시간 저장
//enrolled:
    //type: Date,
    //default: Date.now
//혹은 이렇게 해주면 됨 
//timestamps: true