// const path = require("path");
// require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });
// dotenv হলো Node.js - এর একটি package, যেটা আমাদের.env ফাইলের মধ্যে রাখা configuration
// এবং secret information - গুলোকে process.env - এর মাধ্যমে ব্যবহার করতে সাহায্য করে।
require("dotenv").config();
function toNumber(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: toNumber(process.env.PORT, 5000),
  corsOrigin: process.env.CORS_ORIGIN || "*",
};

env.isProduction = env.nodeEnv === "production";

module.exports = env;
