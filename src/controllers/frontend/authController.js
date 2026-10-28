const bcrypt = require("bcryptjs");
const User = require("../../models/admin/User");
const authMiddleware = require("../../middleware/authMiddleware");

const generateToken = require("../../utils/generateToken");

exports.login = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    role: "user",
  }); 
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid Credentials"
    });
  }

  // const hashedPassword = await bcrypt.hash(
  //   "123456",
  //   10
  // );

  // console.log(hashedPassword)

  
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


exports.me = [
  authMiddleware,
  async (req, res) => {
    try {
      const userId = req.user.id;      

      const user = await User.findById(userId).select(
        "name email role"
      );

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User account is unavailable",
        });
      }

      return res.status(200).json({
        success: true,
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("User verification error:", error.message);

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
];

exports.register = async (req, res) => {
    try {
        const {
            name,
            email,
            username,
            phone,
            country_iso2,
            country_name,
            state,
            city,
            address,
            password,
            confirm_password
        } = req.body;

        //Check required fields
        if (
            !name ||
            !email ||
            !username ||
            !phone ||
            !country_iso2 ||
            !country_name ||
            !state ||
            !city ||
            !address ||
            !password ||
            !confirm_password
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        //Validate email
        const normalizedEmail = email.trim().toLowerCase();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid email address."
            });
        }

        //Validate username
        const normalizedUsername = username.trim();

        if (!/^[a-zA-Z0-9._]{3,30}$/.test(normalizedUsername)) {
            return res.status(400).json({
                success: false,
                message: "Invalid username."
            });
        }

        //Validate password
        if (password.length < 8 || password.length > 128) {
            return res.status(400).json({
                success: false,
                message: "Password must contain 8–128 characters."
            });
        }

        if (
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[^A-Za-z0-9]/.test(password)
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Password must contain uppercase, lowercase, a number and a special character."
            });
        }

        if (password !== confirm_password) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match."
            });
        }

        //Check existing email or username
        const existingUser = await User.findOne({
            $or: [
                { email: normalizedEmail },
                { username: normalizedUsername }
            ]
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message:
                    existingUser.email === normalizedEmail
                        ? "Email already registered."
                        : "Username already exists."
            });
        }

        //Hash password    
        const hashedPassword = await bcrypt.hash(
          password,
            10
          );

        //Create user
        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            username: normalizedUsername,
            phone: phone.trim(),
            country_iso2: country_iso2.trim().toUpperCase(),
            country_name: country_name.trim(),
            state: state.trim(),
            city: city.trim(),
            address: address.trim(),
            password: hashedPassword
        });

        //Send response without password
        return res.status(201).json({
            success: true,
            message: "Registration successful.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                username: user.username,
                phone: user.phone,
                role: user.role,
                status: user.status
            }
        });

    } catch (error) {
        console.error("Registration error:", error);

        // Handle duplicate-key errors, including concurrent requests
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email or username already exists."
            });
        }

        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Invalid registration data."
            });
        }

        return res.status(500).json({
            success: false,
            message: "Registration failed. Please try again."
        });
    }
};