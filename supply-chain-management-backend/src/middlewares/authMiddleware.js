import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);

    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Unauthorized', success: false });
        req.decoded = decoded;
        next();
    });
};

// export const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization.split(" ")[1];
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         console.log("decoded", decoded);
//         if (err) {
//             console.log(err);
//             res.status(401).send({ message: "Unauthorized!", success: false });
//         } else {
//             req.decoded = decoded;
//             next();
//         }
//     });
// };