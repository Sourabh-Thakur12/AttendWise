import dbConnect from '../../dbConnect';



export const userModel = {
    create: async(userModel) => {
        const db = await dbConnect();
        return db.one(
            `INSERT INTO attendwise.users (name, username, email, course, hashed_password) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [userModel.name, userModel.username, userModel.email, userModel.course, userModel.hashed_password]
        )

    }
}