import os
import asyncio
import asyncpg as pg
from dotenv import load_dotenv

env_path = '../attend_wise/shared/utils/.env'
load_dotenv(dotenv_path=env_path)

DB_PORT = os.getenv("LOCAL_POSTGRESS_PORT")
DB_NAME = os.getenv("LOCAL_POSTGRESS_DATABASE")
DB_USER = os.getenv("LOCAL_POSTGRESS_USER")
DB_PASS = os.getenv("LOCAL_POSTGRESS_PASSWORD")

# print(f'Connecting to {DB_NAME} at {DB_PORT} as {DB_USER}')

isConnected = False
db = None

async def dbConnect():
    global isConnected, db
    if isConnected and db is not None:
        print("Already connected to the database.")
        return
    
    try:
        db = await pg.connect(
            user=DB_USER,
            password=DB_PASS,
            database=DB_NAME,
            host="localhost",
            port=DB_PORT,
        )
        
        print("Connected to the database successfully.")
        isConnected = True
        return db
    except pg.PostgresError as e:
        print(f"Error connecting to the database: {e}")
        isConnected = False
        return None
asyncio.run(dbConnect())

# def main():
#     global DB_USER
#     print(DB_USER)
#     async def test_connection():
#         await dbConnect()

#     # asyncio.run(test_connection())

# if __name__ == "__main__":
#     main()

