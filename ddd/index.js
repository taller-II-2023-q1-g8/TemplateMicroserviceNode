const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/api/users", require("./routes/user"));

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});