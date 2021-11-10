const express = require('express')
const app = express()
const cors=require("cors")
const port = 5000

// password : SF2CLYbfmkuGNkfD
app.use(cors());
 app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from niche !')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
