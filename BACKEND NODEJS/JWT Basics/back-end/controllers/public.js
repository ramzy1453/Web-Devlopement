const table = [{
        id: 1,
        name: 'eren'
    },
    {
        id: 2,
        name: 'ramzy'
    },
    {
        id: 3,
        name: 'jaeger'
    }
]

export const getDashboard = (req, res) => {
    res.status(200).json({ table })
}

export const getOneClient = (req, res) => {
    const { id: _id } = req.params
    res.status(200).json({ people: table.filter(({ id }) => id === Number(_id))[0] })
}