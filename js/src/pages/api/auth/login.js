import { generateWebToken, verifyLogin } from "@/util/auth";

export default async function handler(req, res) {
    // Only access token for now
    if (req.method !== 'POST') {
        return res.status(405).json({error: "Only POST requests allowed"});
    }

    const {username, password} = req.body;
    const user = await verifyLogin(username, password);

    if (user !== null) {
        const webToken = generateWebToken(user.username, user.id);
        return res.status(200).json({accessToken: webToken});
    } else {
        return res.status(401).json({error: "Failed to login"});
    }
}