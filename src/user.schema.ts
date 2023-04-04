 import { Schema, model } from "mongoose";

class UserClass {
    private userSchema: Schema;
  
    constructor() {
      this.userSchema = new Schema({
        email: {
          required: true,
          type: String,
        },
        firstName: {
          required: true,
          type: String,
        },
        lastName: {
          required: true,
          type: String,
        },
      }, {
        timestamps: true,
      });
    }
  
    public getModel() {
      return model("User", this.userSchema);
    }
  }
  
  const User = new UserClass().getModel();
  
  export default User;