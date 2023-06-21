import app from "./app";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Modular Layer API Node + TypeScript!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
