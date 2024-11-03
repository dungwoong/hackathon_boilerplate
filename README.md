Python contains a flask backend, js contains a js frontend using nextJS, React, Prisma with SQLite.

Basic login/signup features are implemented.

# Run the code

Run the next app:

```
cd js
npm run dev
```

Run the Flask app:

```
python python/flask_app.py
```

# How it works

NextJS serves the Frontend and has some backend functions in JS for signup, login etc.

It also has a `proxy` endpoint, that simply acts as a proxy to our Flask server

- Anything we can handle in JS goes in the Next app
- Anything we need Python for (eg. LangChain) goes in the python folder, and gets served with the Flask app

# TODO
- refactor login fetch() functions in react code