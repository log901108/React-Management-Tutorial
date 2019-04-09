const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
    res.send([
        {
            'id': 1,
            'image' : 'https://placeimg.com/64/64/any',
            'name' : 'hong',
            'birthday': '910108',
            'gender' : 'M',
            'job' : 'Univ'
        },{
          'id': 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : 'gil',
          'birthday': '910108',
          'gender' : 'M',
          'job' : 'Univ'
        },
        {
          'id': 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : 'dong',
          'birthday': '910108',
          'gender' : 'M',
          'job' : 'Univ'
        } 
    ]);
});

app.listen(port,()=> console.log(`Listening on port ${port}`));