const errorHandler = () => {
    return (error, req, res, next) => {
        return res.status(404).json({ error: error.message })
    }
}

export default errorHandler