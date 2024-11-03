import { prisma } from "@/util/prisma";
import { hashPassword } from "@/util/auth";

export default async function handler(req, res) {
    /**
     * Creates a user
     */
    if (req.method !== 'POST') {
        return res.status(405).message({error: "Only POST request allowed"});
    }
    
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({error: "Missing required field, request must contain username and password field"});
    }

    try {
        const hashedPassword = hashPassword(password);
        await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            }
        });
        return res.status(201).json({message: "Success"});
    } catch {
        return res.status(400).json({error: "Could not create user"});
    }
}