import { FLASK_APP_URL, PROXY_URL } from "@/util/constants";


// eg. call it with path='/'
export default async function handler(req, res) {
    // proxy to flask app
    const {body, method} = req;
    const {path, headers} = body; // Headers for the actual request to the server will be in the request body.

    if (!path) {
        return res.status(400).json({error: 'No path provided'})
    }

    const url = FLASK_APP_URL + path;
    console.log('Sending request to ' + url);
    const proxy_response = await fetch(PROXY_URL, {method, headers, body});
    const data = await proxy_response.json()
    return res.status(proxy_response.status).json(data);
}