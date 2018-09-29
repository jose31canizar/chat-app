module.exports = {
  database: "mongodb://chat-app",
  server: {
    port: 8080,
    host: "localhost"
  },
  jwt: {
    secret: "YOUR_SECRET",
    expiresIn: "1d"
  }
};
