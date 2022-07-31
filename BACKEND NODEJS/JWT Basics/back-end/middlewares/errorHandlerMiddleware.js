export default () => {
    return (error, req, res, next) => {
        console.log(error.message)
        return res.status(404).json({ error: error.message })
    }
}