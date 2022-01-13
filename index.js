//to inject the config vars inside the .env
require('dotenv').config()

// console.log(process.argv);
// const user = process.env.USERNAME;

// if (process.argv[2]==='web-49'){
// console.log('web 49 is plummenting headfirst into the ground')
// }else{
// 	console.log('booo!')
// }

// console.log(`the user is ${user}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})

app.get('/', (req,res)=>{
	res.send(`
	<h1>Web 49 Rules!</h1>
	`)
})

const port = process.env.PORT || 9000 //heroku wants to set its own port
app.listen(port, ()=>{
	console.log(`listening on port ${port}`)
})