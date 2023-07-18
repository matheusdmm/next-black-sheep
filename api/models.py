from pydantic import BaseModel


class User(BaseModel):
    username: str
    password: str
    role: str
    id: int


class Post(BaseModel):
    id: int
    title: str
    postContent: str
    date: str
