from fastapi import FastAPI, HTTPException, Path, Query
from fastapi.middleware import cors
import uvicorn
import sqlite3

from models import User, Post
from example_data import posts, users

CORSMiddleware = cors.CORSMiddleware
db = ''

app = FastAPI(
    title="Nexthon",
    desciption="Boilerplate to build a FastAPI + NextJS + React",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.get('/api/posts/')
async def get_posts() -> dict:
    return {"body": posts}


@app.get('/api/posts/{id}')
async def get_post(id: int) -> dict:
    if id not in posts:
        raise HTTPException(
            status_code=404, detail=f'Post {id} not found')
    return {"body": posts[id]}


@app.get('/api/users/')
async def read_all_users() -> dict:
    return {"user": users}


@app.get('/api/users/{id}')
async def read_user(id: int, q: str = None):
    if id not in users:
        raise HTTPException(
            status_code=404, detail=f"User {user.id=} not found")
    return {"user": users[id]}


@app.post('/api/users/')
async def add_user(user: User):
    if user.id in users:
        raise HTTPException(
            status_code=400, detail=f"User {user.id=} already exists")
    users.update(user)
    return {"user": user}


@app.put('/api/users/{id}', responses={404: {"Description": "user not found"}, 400: {"Description": "user already exists"}})
async def update_user(id: int, user: User):
    if id not in users:
        raise HTTPException(
            status_code=404, detail=f"User {user.id=} not found")
    users[id] = user
    return {"user": user}


@app.delete('/api/users/{id}')
async def delete_user():
    if id not in users:
        raise HTTPException(
            status_code=404, detail=f"User {user.id=} not found")
    users.pop(id)
    return {"user": user}


if __name__ == '__main__':
    # comment to run in prod through the package.json file script
    uvicorn.run(app, host="0.0.0.0", port=8000, log_level="info")
