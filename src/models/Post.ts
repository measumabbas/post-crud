import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    status:{
      type:String,
      enum:["completed","in progress","cancelled"],
    },
    
  },
  { timestamps: true }
);
export default mongoose.model('Post',postSchema)