import { unstable_getServerSession } from "next-auth/next"
import { NextRequest, NextResponse } from "next/server";
import db from "../../utils/db";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req: NextRequest, res: NextResponse) {
  // const session = await unstable_getServerSession(req, res, authOptions)

  // if (!session) {
  //   res.status(401).json({ message: "You must be logged in." });
  //   return;
  // }
  db.open()
  let user = await db.get(req.body?.email)
  db.close()
  console.log(user);
  res.status(200).json({ message: "liked" });
  

  // await db.open().then(() => {
  //   user = db.get(req.body?.email)

  //   // user?.liked_images.append(req.body?.imageId) 
  //   console.log(user);


  //   return res.json({
  //     message: 'Success',
  //   })

  // }).finally(() => {
  //   db.close()
  // })
}
