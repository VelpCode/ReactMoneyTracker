const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res) => {
    res.json('test ok2');
})

app.post('/api/transaction', (req,res) => {
    res.json(req.body);
})

app.listen(4040);

