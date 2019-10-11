require('./config');
const express = require('express');
const router = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


