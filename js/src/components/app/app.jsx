import { PROXY_URL } from "@/util/constants";

export default function App({setToken}) {
  const tryFlaskProxy = async () => {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: "/" }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <p>You're logged in!</p>
      <button onClick={tryFlaskProxy}>Try the Flask Proxy</button>
      <button onClick={() => {setToken(null)}}>Logout</button>
    </div>
  );
}
