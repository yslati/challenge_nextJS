import Head from 'next/head'

export default function login() {
	return (
	<div>
		<Head>
			<title>Sign in</title>
      	</Head>
		<div className="h-screen w-full flex lg:flex-row flex-col justify-center">
			<div className="lg:w-1/2 w-full flex justify-center items-center lg:px-0 px-4">
			<div className='w-full max-w-md'>
				<h1 className='font-semibold lg:text-5xl text-4xl mb-2'>
				Welcome Back
				</h1>
				<h2 className='text-gray-400 lg:text-xl'>
				Welcome Back! Please enter your details.
				</h2>
				<div className="mt-6">
				<form className="space-y-6" action="#">
					<div>
					<label for="email" className="text-sm font-medium text-gray-900 block mb-2">
						Email
					</label>
					<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your email" required />
					</div>
					<div>
					<label for="password" className="text-sm font-medium text-gray-900 block mb-2">
						Password
					</label>
					<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
					</div>
					<div className="flex items-start">
					<div className="flex items-start">
						<div className="flex items-center h-5">
						<input id="remember" aria-describedby="remember" type="checkbox" className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
						</div>
						<div className="text-sm ml-2">
						<label for="remember" className="font-medium text-gray-900">
							Remember for 30 days 
						</label>
						</div>
					</div>
					<a href="#" className="text-sm font-bold text-gray-700 hover:underline ml-auto">
						Forgot Password
					</a>
					</div>
					<button type="submit" className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
						Sign in
					</button>
					<button className="w-full flex items-center justify-center !mt-4 px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
						className="w-5 h-5 mr-2" viewBox="0 0 48 48">
						<defs>
						<path id="a"
							d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
						</defs>
						<clipPath id="b">
						<use xlinkHref="#a" overflow="visible" />
						</clipPath>
						<path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
						<path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
						<path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
						<path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
					</svg>
					Sign in with Google
					</button>
					<div className="text-sm font-medium text-gray-500 space-x-2 flex justify-center">
					<p>
					Dont have an account?
					</p>
					<a href="#" className="text-gray-700 hover:underline font-bold">
						Sign up for free
					</a>
					</div>
				</form>
				</div>
			</div>
			</div>
			<div className='lg:w-1/2 w-0 bg-slate-400'>
			{/* <Image src={bg} alt="background" layout='responsive' className='h-full object-center object-cover' /> */}
			<img className='h-full object-cover object-center' src="./images/sign_in.jpg" alt="background"/>
			</div>
		</div>
	</div>
	)
}