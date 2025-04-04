const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is my Node.js App! Deepak Verma');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
