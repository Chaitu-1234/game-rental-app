const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://gauravrtd647:9WQZr0cNQaOBu9pg@backend.e0lh1re.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
