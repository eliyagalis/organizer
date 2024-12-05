const getTasks = (req,res) => {
    res.json([
        {
            id: 1,
            projectId: 1,
            task: "Set deadlines to the missions",
            publishDate: '11/11/2024'
        },
        {
            id: 2,
            projectId: 1,
            task: "Set deadlines to the missions",
            publishDate: '11/11/2024'
        }
    ])
}

export default getTasks;