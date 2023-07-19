<p align="center">
  <a href="https://next-black-sheep.vercel.app/">
    <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" height="96">
    <h3 align="center">NextJS + FastAPI + Axios + Vercel</h3>
  </a>
</p>

<p align="center">Little starter project with <a href="https://fastapi.tiangolo.com/">FastAPI</a> as the API backend and <a href="https://axios-http.com/">Axios</a> to handle the conneciton in the front.</p>

<p align="center">
    <a href="https://circleci.com/gh/badges/shields/tree/master">
        <img src="https://img.shields.io/circleci/project/github/badges/shields/master" alt="front-end build status"></a>
    <a href="https://circleci.com/gh/badges/daily-tests">
        <img src="https://img.shields.io/circleci/project/github/badges/daily-tests?label=api%20build"
            alt="back-end api build status"></a>
    <a href="https://coveralls.io/github/badges/shields">
        <img src="https://img.shields.io/coveralls/github/badges/shields"
            alt="coverage"></a>

</p>

<br/>

## Introduction

Hybrid Next.js + Python app with Next.js as the frontend and FastAPI as the API backend. I also included some basic post, get, put, delete and patch funcionality to the API as well as a sqlite connection. For the front, I included axios as the prefered api "getcher".

I also modifier the API entrypoint to have the uvicorn sugar and help a bit more in the dev procces, because now you're able to kill the server if needed and also change the default port.

```python
if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")
```

## How It Works

The Python/FastAPI server is mapped into to Next.js app under `/api/*`.

There, we'll have the `/api/users/` and the `/api/posts/` which, you guessed it right, will have a dummy userland and posts 🧛‍♂️.

This is implemented using [`next.config.js` rewrites](https://github.com/digitros/nextjs-fastapi/blob/main/next.config.js) to map any request to `/api/:path*` to the FastAPI API, which is hosted in the `/api` folder.

On localhost, the rewrite will be made to the `127.0.0.1:8000` port, which is where the FastAPI server is running.

In production, the FastAPI server is hosted as [Python serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes/python) on Vercel.

## Demo

https://nextjs-fastapi-starter.vercel.app/

## Deploy Your Own

You can clone & deploy it to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdigitros%2Fnextjs-fastapi%2Ftree%2Fmain)

## Developing Locally

You can clone this repo and then do an:

```bash
npm install
# or
yarn
# or
pnpm install
```

Then, for run both back and front concurrently:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Or, to run the instances separately:

```bash
# for the backend
npm run fastapi-dev

# you can also start the backend manually with
cd ./api
python index.py

# for the frontend
npm run next-dev

```

If You did not changed the ports, You'll be able to run on the defaults as stated below.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The FastApi server will be running on [http://127.0.0.1:8000](http://127.0.0.1:8000) – feel free to change the port in `package.json` (you'll also need to update it in `next.config.js`).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [FastAPI Documentation](https://fastapi.tiangolo.com/) - learn about FastAPI features and API.
- [Axios Documentation](https://axios-http.com/docs/intro) - Learn about Axios and how to use more features.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
