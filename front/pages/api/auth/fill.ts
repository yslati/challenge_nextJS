import db from "../../utils/db";

export default async function handler(req, res) {
	await db.open().then(() => {
		db.put('muser1', {
			username: "muser1",
			password: "mpassword1",
			liked_images: [],
			blocked: false
		})
		db.put('muser2', {
			username: "muser2",
			password: "mpassword2",
			liked_images: [],
			blocked: false
		})
		db.put('muser3', {
			username: "muser3",
			password: "mpassword3",
			liked_images: [],
			blocked: true
		})
		res.status(200).json({ message: 'users imported!!' })
	})
	.finally(() => {
		db.close()
	})
}