import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Item from './components/item'
// import Navbar from './components/navbar'

function Navbar() {

	let nav_items = [
		{
			name: "All",
			selected: true
		},
		{
			name: "Animation",
			selected: false
		},
		{
			name: "Branding",
			selected: false
		},
		{
			name: "Ilustration",
			selected: false
		},
		{
			name: "Mobile",
			selected: false
		},
		{
			name: "Print",
			selected: false
		},
		{
			name: "Product design",
			selected: false
		},
		{
			name: "Topography",
			selected: false
		},
		{
			name: "Web design",
			selected: false
		},
	]

	return (
		<div className="w-full py-8 flex">
			<select id="types" className="border border-gray-200 text-gray-900 text-sm font-semibold rounded-lg focus:border-gray-400 block px-3 py-2">
				<option value="popular" selected>Popular</option>
				<option value="recent">Recent</option>
			</select>
			<div className='flex space-x-5 mx-auto items-center justify-center'>
				{
					nav_items.map((item, index) =>
						<button key={index} className={!item.selected ? "font-semibold text-center text-gray-500" : " font-semibold text-center text-black bg-gray-100 px-2 py-1 rounded"}>
							{item.name}
						</button>
					)
				}
			</div>
			<button className='flex cursor-pointer items-center border border-gray-200 text-gray-900 text-sm rounded-lg focus:border-gray-400 px-3 py-2 '>
				<AdjustmentsHorizontalIcon className='w-4 h-4 mr-2' />
				<h2 className='font-semibold '>Filters</h2>
			</button>
			{/* <select id="filter" className="ml-auto border border-gray-200 text-gray-900 text-sm rounded-lg focus:border-gray-400 block px-3 py-2">
				<AdjustmentsHorizontalIcon className='w-10 h-10 mr-1 bg-red-500' />
				<option selected>
					Filter
				</option>
				<option value="liked">Most Liked</option>
				<option value="viewed">Most viewed</option>
			</select> */}
		</div>
	)
}

export default function Home() {
	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div className='w-screen h-screen px-20'>
				<Navbar />
				<div className='grid grid-cols-5 gap-8 mx-auto'>
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />

				</div>
			</div>
		</div>
	)
} 