const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {
  // Get Token from Header
  const token = req.header("x-auth-token");

  // Check if token doens't exist
  if (!token) {
    return res.status(401).json({ msg: "No Token. Authorization Denied!" });
  }

  // if token exists
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token." });
  }
};
