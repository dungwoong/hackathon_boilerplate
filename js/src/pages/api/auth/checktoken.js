import { checkBearerToken } from "@/util/auth";

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({error: 'Only POST requests allowed'});
    }

    const user = checkBearerToken(req);
    if (user === null) {
        return res.status(401).json({error: 'Invalid token'});
    } else {
        return res.status(200).json({message: 'Success'});
    }
}