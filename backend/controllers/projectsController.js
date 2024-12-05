const getProjects = (req,res) => {
    res.json([
        {
            id: 1,
            manager: "eliya",
            startDate: '8/11/2024',
            tasks: [1,2,3]
        },
        {
            id: 2,
            manager: "eliya",
            startDate: '9/11/2024',
            tasks: [4]
        },
        {
            id: 3,
            manager: "eliya",
            startDate: '10/11/2024',
            tasks: [5,6]
        }
    ])
}

export default getProjects;