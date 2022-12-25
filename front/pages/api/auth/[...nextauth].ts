import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../utils/db";

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
				  email: string;
				  password: string;
				};
				// search in db and match user
				let user = null
				try {
					await db.open()
					user = await db.get(email)
				} catch  {
					console.log("errr");
				} finally {
					await db.close()
				}
				console.log("user: ", user);
				
				if (password !== user.password) {
					throw new Error('password incorrect')
				}
				else if (user.blocked) {
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
		  // first time jwt callback is run, user object is available
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
