const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill in all fields."
        });
    }

    console.log("New message:", name, email, message);

    res.json({
        success: true,
        message: "Your message was received successfully! 🎉"
    });
});

app.listen(PORT, () => {
    console.log(`Website running at http://localhost:${PORT}`);
});
