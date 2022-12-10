import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "../api/hooks";
import { updateOrderBy } from "../api/imagesSlice";

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

export default function Navbar() {

	const dispatch = useAppDispatch()

	function updateDisplay(value: string) {
		dispatch(updateOrderBy({ orderBy: value }))
	}

	return (
		<div className="w-full py-8 flex">
			<select onChange={(e) => updateDisplay(e.target.value)} id="types" className="border border-gray-200 text-gray-900 text-sm font-semibold rounded-lg focus:border-gray-400 block px-3 py-2" aria-label="label for the select">
				<option value="latest" defaultValue={"latest"}>Latest</option>
				<option value="popular">Popular</option>
				<option value="oldest">Oldest</option>
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
			<button className='flex cursor-pointer items-center border border-gray-200 text-gray-900 text-sm rounded-lg focus:border-gray-400 px-3 py-2 ' type="button">
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