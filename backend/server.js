const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

const postRoutes = require("./routes/postRouters");
app.use("/posts", postRoutes);

app.get('/', (req, res) => res.send('API 작동중'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("연결 성공");
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`서버 실행중: 포트 ${PORT}`);
        });
    })
    .catch(console.error);
