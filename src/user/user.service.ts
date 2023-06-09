import User from "./user.schema";

class UserService {
  async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      console.error("Error creating user: ", error);
    }
  }

  async findAllUsers() {
    try {
      const usersFound = await User.find();
      return usersFound;
    } catch (error) {
      console.error("Error finding users: ", error);
    }
  }

  async findUser(id) {
    try {
      const userFound = await User.findById(id);
      return userFound;
    } catch (error) {
      console.error("Error finding user: ", error);
    }
  }
  async deleteUser(id) {
    try {
      const userDeleted = await User.findByIdAndDelete(id);
      return userDeleted;
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  }
  async updateUser(id: any, data: any) {
    try {
      const userToUpdate = await User.findByIdAndUpdate(
        id,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          age: data.age,
        },
        { new: true }
      );

      return userToUpdate;
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  }
}

export default new UserService();
