import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
