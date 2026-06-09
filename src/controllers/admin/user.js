const User = require("../../models/admin/User");

const createUser = async (req, res) => {
  const user = await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin"
  });

  res.json(user);
};

module.exports = {
  createUser
};