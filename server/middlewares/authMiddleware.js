import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) return res.status(401).json({ error: "Unauthorized: No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.TKN_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
