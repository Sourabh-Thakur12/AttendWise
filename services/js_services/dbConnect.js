import dotenv from 'dotenv';
import pgPromise from 'pg-promise';

dotenv.config({ path: 'D:/CODING/Devlopment/PROJECTS/attend_wise/shared/utils/.env' });
const pgp= pgPromise();

let db = null;
let isConnected = false;

async function dbConnect(){
    if (isConnected && db){
        console.log("DataBase is already connected")
        return db;
    }

    try{
        db = pgp(`postgres://${process.env.LOCAL_POSTGRESS_USER}:${process.env.LOCAL_POSTGRESS_PASSWORD}@localhost:${process.env.LOCAL_POSTGRESS_PORT}/${process.env.LOCAL_POSTGRESS_DATABASE}`);
        
        // checks if db connection with light weight querry
        await db.one('SELECT 1')
            .then(() => {
                isConnected = true;
                console.log("DataBase connected sucessfully")
            });
    }catch(error){
        console.log("!Error connecting to the database:: ", error)
    }        
}

export default dbConnect;