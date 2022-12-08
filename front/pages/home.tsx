import Head from 'next/head'
import Item from './components/Item'
import Navbar from './components/Navbar'

export default function Home() {

	const data = [
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
		{
			username: "Yassin",
			profile_pic: "./images/logo.jpg",
			account_type: "PRO",
			image: "./images/banana.jpg",
			image_des: "description"
		},
	]

	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div className='w-screen h-screen px-20'>
				<Navbar />
				<div className='grid grid-cols-5 gap-8 mx-auto'>
					{
						data.map(item => {
							// <Item data={item || null} />
						})
					}
				</div>
			</div>
		</div>
	)
} 