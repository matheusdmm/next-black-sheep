from pydantic import BaseModel, Field


class User(BaseModel):
    username: str = Field(desciption="The username of the user")
    password: str = Field(desciption="The password of the user")
    role: str = Field(desciption="The role of the user")
    id: int = Field(desciption="The id of the user")


users = {
    0: User(username="admin", password="admin", role="admin", id=0),
    1: User(username="user", password="user", role="user", id=1),
    2: User(username="user2", password="user2", role="supporter", id=2),
    3: User(username="user3", password="user3", role="supervisor", id=3),
}

t = users.pop(2)

l = users.update(
    User(username="user4", password="user4", role="supervisor", id=4))

print(t)

print(users)
