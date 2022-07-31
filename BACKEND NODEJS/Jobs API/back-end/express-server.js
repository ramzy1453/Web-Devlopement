import 'dotenv/config'
const runServer = app => {
    const PORT = process.env.PORT || 8000
    try {
        app.listen(PORT, console.log(`Server running at PORT ${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

export default runServer