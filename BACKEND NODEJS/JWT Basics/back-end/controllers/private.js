const table = [{
        id: 1,
        name: 'killer'
    },
    {
        id: 2,
        name: 'benjamin'
    },
    {
        id: 3,
        name: 'mjowed'
    }
]

export const getDashboardPrivate = (req, res) => {
    console.log(req.token)
    res.status(200).json(table)
}

export const getOneClientPrivate = (req, res) => {
    const { id: _id } = req.params
    res.status(200).json({ people: table.filter(({ id }) => id === Number(_id))[0] })
}