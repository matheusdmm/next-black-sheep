from pydantic import BaseModel


class User(BaseModel):
    username: str
    password: str
    role: str


class Post(BaseModel):
    id: int
    title: str
    postContent: str
    date: str
