const mongoose = require("mongoose");
const { Schema } = mongoose;


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
  date: {
    type: String,
    reuqired: true,
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