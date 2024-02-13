const as = require('express')
const app = as()
const port = process.env.PUBLIC_PORT ?? 3000
app.use(as.json())


const data = {best_ug_degree_test: 'kalvium' }

app.post('/api/data',(req,res)=>{
    res.status(201)
    res.send(data)
})

app.get('/',(req,res)=>{
    res.status(200).send(req.body)
})


if (require.main === module) {
	app.listen(port, () => {
		console.log(`🚀 server running on PORT: ${port}`)
	})
}

module.exports = app