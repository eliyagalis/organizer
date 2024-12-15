import User from "../models/User"


export const getUsers = async (req,res) => {
    try {
        const users = await User.find({});

        if (!users){
            return res.status(404).json({error: "users not found"});
        }

        res.status(200).json({message: "user found successfully"}, users);

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const getUserById = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(400).json({error: "invalid id"});
        }

        const requestedUser = await User.findById(id);

        if (!requestedUser) {
            return res.status(404).json({error: "user not found"});
        }

        res.status(200).json({message: "user found successfully", requestedUser});

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const createUser = async (req,res)=> {
    try {
        const { username, password, fullName, email } = req.body;

        if (!username || !password || !fullName || !email ) {
            return res.status(400).json({error: "required fields are empty"})
        }

        const user = await User.create({username, password, fullName, email});

        const result = user.save();

        if (!result) {
            return res.status(400).json({error: "an error occurred in creating"});
        }



    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(400).json({error: "invalid id"});
        }

        const requestedUser = await User.findByIdAndDelete(id);

        if (!requestedUser) {
            return res.status(404).json({error: "user not found"});
        }

        res.status(200).json({message: "user deleted successfully"});

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}