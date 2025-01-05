import { USER_ROLES } from "./constants.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const hashPassword = (password) => {
    return bcrypt.hash(password, 10)
}

const comparePass = (password, hash) => {
    return bcrypt.compare(password, hash);
};

const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
        resolve(token);
    });
}

const authenticate = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "Unauthorized", success: false })
        }
        const token = req.headers?.authorization?.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        if (!decoded)
            return res.status(401).json({ message: "Unauthorized", success: false })
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized", success: false })
    }
}

const isDistributor = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({ message: "Unauthorized", success: false })
        }
        const token = req.headers.authorization.split(" ")[1]
        if (!token && token.role !== USER_ROLES) {
            return res.status(401).json({ message: "Unauthorized", success: false })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decoded.role !== USER_ROLES.DISTRIBUTOR) {
            return res.status(403).json({ message: "Forbidden", success: false });
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized", success: false });
    }
}
const isRetailer = (req, res, next) => {
    try {
        if (!req.headers.authorization)
            return res.status(401).json({ message: "Unauthorized", success: false });
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (decoded.role !== USER_ROLES.RETAILER)
            return res.status(403).json({ message: "Forbidden", success: false });
        req.user = decoded;
        next()
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", success: false });
    }
}

export {
    comparePass,
    hashPassword,
    generateToken,
    authenticate,
    isDistributor,
    isRetailer,
}