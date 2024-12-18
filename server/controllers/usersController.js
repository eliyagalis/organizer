import User from "../models/User.js";
import {hash, compare} from "bcrypt";
import jwt from 'jsonwebtoken';

export const getUsers = async (req,res) => {
    try {
        const users = await User.find({});

        if (!users) {
            return res.status(404).json({error: "users not found"});
        }

        res.status(200).json(users);

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

export const signup = async (req,res)=> {
    try {
        const { username, password, name, email } = req.body;

        if (!username || !password || !name || !email ) {
            return res.status(400).json({error: "required fields are empty"})
        }

        const hashedPassword = await hash(password, 10);
        const user = await User({username, password: hashedPassword, name, email, projects: []});

        await user.save();
        
        const token = jwt.sign({username}, process.env.TKN_KEY,{expiresIn:'3m', issuer: 'http://localhost:6060'});
        res.cookie('jwt', token, {httpOnly: true, maxAge: 50000});

        res.status(201).json({message: "user was created successfully"});

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const login = async (req,res)=> {
    try {
        const {username, password} = req.body;

        if (!username) {
            res.status(400).json({error: "username is required"});
        }

        const existingUser = await User.findOne({username});

        if (!existingUser) {
            res.status(404).json({json: "user not found"});
        }

        if(!await compare(password, existingUser.password)) {
            res.status(400).json({error: "wrong password."});
        }

        const token = jwt.sign({username}, process.env.TKN_KEY,{expiresIn:'3m', issuer: 'http://localhost:6060'});
        res.cookie('jwt', token, {httpOnly: true, maxAge: 50000});

        res.status(200).json({existingUser});

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const updateUser = async (req,res)=> {
    try {
        const { id } = req.params;
        const {username, password, fullName, email} = req.body;

        if (!username && !password && !fullName && !email ) {
            return res.status(400).json({error: "required fields are empty"})
        }

        const existingUser = await User.findById(id);
        
        if(!existingUser) {
            return res.status(404).json({error: "user not found"});
        }
        
        if (username && username!== existingUser.username) {
            const duplicateUser = await User.FindOne({username});
            if (duplicateUser) {
                return res.status(400).json({error: "username already taken"});
            }
            
            existingUser.username = username;
        }

        if (fullName && fullName!== existingUser.fullName) {
            existingUser.fullName = fullName;
        }
        if (email&& email!=existingUser.email) {
            existingUser.email = email;
        }
        
        await existingUser.save();        

        res.status(200).json(existingUser);

    } catch (error) {
        res.status(500).json({error: "Internal server eror"});
    }
}

export const deleteUser = async (req,res)=> {
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