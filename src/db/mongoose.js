const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_PATH, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
