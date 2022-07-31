export default () => {
    return (error, req, res, next) => res.status(404).json({ error })
}