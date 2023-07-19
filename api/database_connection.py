from models import User
import sqlite3

db = sqlite3.connect("db/users.db")
cursor = db.cursor()


async def get_db():
    pass


def create_db():
    cursor.execute(
        "CREATE TABLE users (username TEXT, password TEXT, role TEXT, id INTEGER)")
    cursor.execute("INSERT INTO users VALUES ('admin', 'admin', 'admin', 0)")
    # cursor.execute("INSERT INTO users VALUES ('user', 'user', 'user', 1)")
    # cursor.execute("INSERT INTO users VALUES ('user2', 'user2', 'supporter', 2)")


def read_all_db():
    rows = cursor.execute("SELECT * FROM users").fetchall()
    print(rows)


async def insert(user: User):
    sql = f"INSERT INTO users (username, password, role, id)"
    sql2 = f"VALUES ('test', '1234', 'regular', 8)"
    cursor.execute(sql, (user.username, user.password, user.role, user.id))
    db.commit()


# read_all_db()
rows = cursor.execute("SELECT * FROM users").fetchall()


def test():
    sql = "INSERT INTO users (username, password, role, id) VALUES ('test', '1234', 'regular', 8);"
    cursor.execute(sql)
    db.commit()
    print(rows)


def test2(user: User):
    sql = f"INSERT INTO users (username, password, role, id)"
    sql2 = f"VALUES ('test', '1234', 'regular', 8)"
    cursor.execute(
        f"INSERT INTO users (username, password, role, id) VALUES ({user.username}, {user.password}, {user.role}, {user.id})")
    db.commit()


test2(User(username="test", password="1234", role="regular", id=99))
