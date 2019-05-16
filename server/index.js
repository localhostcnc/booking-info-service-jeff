const express = require('express');
const app = express();
const dbGenerator = require('../sqlDataGenerator');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('listening on: ', PORT);
})

// app.post('./filldb', (req, res) => {
//   console.log(req, res)
//   if (err){
//     console.log(err)
//   }
  
//   dbGenerator.fillDataBase();
// })

