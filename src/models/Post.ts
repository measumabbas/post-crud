import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required:true
    },
    discription: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);
export default mongoose.model('Post',postSchema)