const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use((req,res,next) => {
    res.end('404 not found')
})


app.listen(PORT , () => console.log(`Server running at port ${PORT}`));
