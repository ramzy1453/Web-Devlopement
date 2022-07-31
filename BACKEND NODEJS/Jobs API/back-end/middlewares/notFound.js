const notFound = () => (req, res) => {
    res.set({ 'content-type': 'text/html' })
    res.status(404).send('<h2>path not found.</h2>')
}

export default notFound