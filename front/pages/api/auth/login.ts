// import db from "../../utils/db";

// export default function handler(req, res) {
// 	db.open().then(() => {
// 		db.get(req.body['user'], (err, value) => {
// 			if (err) {
// 				console.log(err.message);
// 				return res.status(400).json({ message: 'user not found' })
// 			}
// 			else {
// 				console.log(JSON.parse(value));
// 				res.status(200).json({ message: 'Hello from Next.js!' })
// 			}
// 		});
// 	}).finally(() => {
// 		db.close()
// 	})
// }