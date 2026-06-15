const bcrypt = require("bcryptjs");
const User = require("../../models/admin/User");

const generateToken = require("../../utils/generateToken");

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials"
    });
  }

  const hashedPassword = await bcrypt.hash(
    "123456",
    10
  );

  console.log(hashedPassword)
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid pwd"
    });
  }

  const token = generateToken(user);

  res.json({
    success: true,
    token,
    user
  });
};