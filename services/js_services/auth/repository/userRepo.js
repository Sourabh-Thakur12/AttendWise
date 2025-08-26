import dbConnect from "../../dbConnect";

class db {
    constructor() {
        this.db = dbConnect();
    }
}

export const userRepo = {
    async create(user){
        return this.db.one(`INSERT INTO users (name, email, hash_pass) VALUES ($1, $2, $3) RETURNING *`, [user.name, user.email, user.hash_pass]);
    },

    async findByEmail(email){
        return this.db.oneOrNone(`SELECT * FROM users WHERE email = $1`, [email]);
    },

    async findByUsername(username){
        return this.db.oneOrNone(`SELECT * FROM users WHERE username = $1`, [username]);
    },


}