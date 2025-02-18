const express = require("express"); 
const app = express(); 

const body_parser = require("body-parser");
app.use(body_parser.json());

app.use("/api/v1/users", require("./routes/v1/user"));

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});