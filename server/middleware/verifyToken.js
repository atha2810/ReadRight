const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.cookies.authToken;
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}

function isAdmin(req, res, next) {
  verifyToken(req, res, () => {
    if (req.user.role !== "admin") {
      return res.status(403).send("Access Denied: Admins only");
    }
    next();
  });
}

module.exports = { verifyToken, isAdmin };
