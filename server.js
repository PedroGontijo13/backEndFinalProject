const express = require("express");
const axios = require("axios");

const app = express();
const port = 5555;

app.use(express.json());

app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f149de8d35945bb91dddfd36d5f6002"
    );
    const articles = response.data.articles;
    res.send(articles);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
