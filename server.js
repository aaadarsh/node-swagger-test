let express = require('express');
let swaggerUi = require('swagger-ui-express');
let app = express();
let swagger = require('./swagger.json');

app.get('/', (req, res)=>{
    res.send("Home page");
});
app.use('/swagger', (req, res)=>{
    res.sendFile(__dirname + "/swagger.json");
});

app.listen(3000, ()=>{
    console.log('server started');
});