if (process.env.NODE_ENV === "production") {
  module.exports = require("./reduxStore.prod");
} else {
  module.exports = require("./reduxStore.dev");
}
