import mongoose from "mongoose";
import { USER_ROLES } from "../utils/constants.js";
import { hashPassword } from "../utils/auth.js";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: USER_ROLES,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        try {
            if (!this.password.startsWith("$2b$")) {
                const hash = await hashPassword(this.password)
                this.password = hash
            }
            next()
        } catch (err) {
            next(err);
        }
    } else {
        next()
    }
});

export default mongoose.model("users", userSchema);
