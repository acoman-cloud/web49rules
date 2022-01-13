console.log(process.argv);
const user = process.env.USERNAME;

if (process.argv[2]==='web-49'){
console.log('web 49 is plummenting headfirst into the ground')
}else{
	console.log('booo!')
}

console.log(`the user is ${user}`)

const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  res.json({ message: 'hey there'})
})

const port = 9000;
app.listen(port, ()=>{
	console.log(`listening on port ${port}`)
})