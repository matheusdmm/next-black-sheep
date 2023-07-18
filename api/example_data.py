from models import *

users = {
    0: User(username="admin", password="admin", role="admin", id=0),
    1: User(username="user", password="user", role="user", id=1),
    2: User(username="user2", password="user2", role="supporter", id=2),
    3: User(username="user3", password="user3", role="supervisor", id=3),
}

posts = {
    0: Post(
        title="Post 0",
        postContent="lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date="2022-01-01",
        id=0
    ),
    1: Post(
        title="Post 1",
        postContent="lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date="2022-02-01",
        id=1
    )
}
