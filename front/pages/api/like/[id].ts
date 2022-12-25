import { unstable_getServerSession } from "next-auth/next"
import db from "../../utils/db";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res) {
  // const session = await unstable_getServerSession(req, res, authOptions)

  // if (!session) {
  //   res.status(401).json({ message: "You must be logged in." });
  //   return;
  // }
  let user

  await db.open().then(() => {
    user = db.get(req.body?.email)

    // user?.liked_images.append(req.body?.imageId) 
    console.log(user);


    return res.json({
      message: 'Success',
    })

  }).finally(() => {
    db.close()
  })
}