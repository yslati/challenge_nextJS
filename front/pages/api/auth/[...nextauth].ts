import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest } from "next/server";
import { useAppDispatch } from "../../provider/hooks";
import db from "../../utils/db";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			async authorize(credentials, req: NextRequest) {
				const { email, password } = credentials as {
				  email: string;
				  password: string;
				};
				let user = null
				const dispatch = useAppDispatch()
				try {
					await db.open()
					user = await db.get(email)
				} catch (err)  {
					console.log(err.message);
					throw new Error('Informations de connexion invalides')
					// toast("Informations de connexion invalides")
				} finally {
					await db.close()
				}
				console.log("user: ", user);
				
				if (password !== user.password) {
					// toast.error("password incorrect")
					throw new Error('password incorrect')
				}
				else if (user.blocked) {
					// toast.error("Ce compte a été bloqué.")
					throw new Error('Ce compte a été bloqué.')
				}
				return ({
					email: email,
				})
			}
		})
	],
	pages: {
		signIn: "/login",
		// error: '/auth/error',
		// signOut: '/auth/signout'
	},
	callbacks: {
		jwt: ({ token, user }) => {
		  if (user) {
			token.id = user.id;
		  }
		  return token;
		},
		session: ({ session, token }) => {
		  if (token) {
			session.id = token.id;
		  }

		  return session;
		},
	  },
}
export default NextAuth(authOptions);
