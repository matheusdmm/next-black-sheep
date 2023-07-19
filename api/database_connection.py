from models import User
import sqlite3

db = sqlite3.connect("db/users.db")
cursor = db.cursor()


async def create_db():
    await cursor.execute(
        "CREATE TABLE users (username TEXT, password TEXT, role TEXT, id INTEGER)")
    # cursor.execute("INSERT INTO users VALUES ('admin', 'admin', 'admin', 0)")
    # cursor.execute("INSERT INTO users VALUES ('user', 'user', 'user', 1)")
    # cursor.execute("INSERT INTO users VALUES ('user2', 'user2', 'supporter', 2)")


def read_all_db():
    rows = cursor.execute("SELECT * FROM users").fetchall()
    return rows


def insert(user: User):
    cursor.execute(
        f"INSERT INTO users VALUES (?, ?, ?, null)", (user.username, user.password, user.role))
    db.commit()


def update(user: User):
    pass


def delete():
    pass


def read(user: User):
    pass


# read_all_db()
rows = cursor.execute("SELECT * FROM users").fetchall()
print(rows)
