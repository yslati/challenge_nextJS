import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

export default function Navbar() {

	let nav_items = [
		{
			name: "All",
			selected: false
		},
		{
			name: "Animation",
			selected: false
		},
		{
			name: "Branding",
			selected: false
		},
	]

	return (
		<div className="w-full py-8 flex">
			<select id="types" className="border border-gray-200 text-gray-900 text-sm font-semibold rounded-lg focus:border-gray-400 block px-3 py-2">
				<option value="popular" selected>Popular</option>
				<option value="recent">Recent</option>
			</select>
			<div className='flex space-x-4 mx-auto'>
				{
					nav_items.map((item, index) => 
						<div key={index} className="">
							{item.name} k
						</div>
					)
				}
			</div>
			<button className='flex ml-auto cursor-pointer items-center border border-gray-200 text-gray-900 text-sm rounded-lg focus:border-gray-400 px-3 py-2 '>
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