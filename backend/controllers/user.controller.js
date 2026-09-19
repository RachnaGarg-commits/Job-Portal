import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";


export const register = async (req, res) => {
    try {
        const {
            fullname,
            email,
            phoneNumber,
            password,
            role
        } = req.body;

        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email.",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let profilePhoto = "";

        // Upload profile photo only if user selected one
        if (req.file) {
            const fileUri = getDataUri(req.file);

            if (fileUri) {
                const cloudResponse =
                    await cloudinary.uploader.upload(fileUri.content);

                profilePhoto = cloudResponse.secure_url;
            }
        }

        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: {
                profilePhoto
            }
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });

    } catch (error) {
        console.error("Register error:", error);

        return res.status(500).json({
            message: "Something went wrong while creating your account.",
            success: false
        });
    }
};


export const login = async (req, res) => {
    try {
        const {
            email,
            password,
            role
        } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Email, password and role are required.",
                success: false
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }

        const isPasswordMatch =
            await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            });
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with the selected role.",
                success: false
            });
        }

        const tokenData = {
            userId: user._id
        };

        const token = jwt.sign(
            tokenData,
            process.env.SECRET_KEY,
            {
                expiresIn: "1d"
            }
        );

        const safeUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        const isProduction = process.env.NODE_ENV === "production";

        return res
            .status(200)
            .cookie("token", token, {
                maxAge: 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? "none" : "lax"
            })
            .json({
                message: `Welcome back ${user.fullname}`,
                user: safeUser,
                success: true
            });

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Something went wrong while logging in.",
            success: false
        });
    }
};


export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax"
            })
            .json({
                message: "Logged out successfully.",
                success: true
            });

    } catch (error) {
        console.error("Logout error:", error);

        return res.status(500).json({
            message: "Logout failed.",
            success: false
        });
    }
};


export const updateProfile = async (req, res) => {
    try {
        const {
            fullname,
            email,
            phoneNumber,
            bio,
            skills
        } = req.body;

        const userId = req.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                success: false
            });
        }

        if (fullname) {
            user.fullname = fullname;
        }

        if (email) {
            user.email = email;
        }

        if (phoneNumber) {
            user.phoneNumber = phoneNumber;
        }

        if (bio !== undefined) {
            user.profile.bio = bio;
        }

        if (skills !== undefined) {
            user.profile.skills = skills
                .split(",")
                .map(skill => skill.trim())
                .filter(skill => skill !== "");
        }

        // Resume is optional
        if (req.file) {
            const fileUri = getDataUri(req.file);

            if (fileUri) {
                const cloudResponse =
                    await cloudinary.uploader.upload(fileUri.content);

                user.profile.resume = cloudResponse.secure_url;
                user.profile.resumeOriginalName =
                    req.file.originalname;
            }
        }

        await user.save();

        const safeUser = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully.",
            user: safeUser,
            success: true
        });

    } catch (error) {
        console.error("Update profile error:", error);

        return res.status(500).json({
            message: "Something went wrong while updating profile.",
            success: false
        });
    }
};