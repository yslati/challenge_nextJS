import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid"
import { nFormater } from "./Functions"

export default function Item(item: any) {

	let data = item.data
	
	return (
		<div className="w-full h-52 select-none mb-8">
			<img className="w-full h-full object-cover rounded-lg" src={data.urls.small} alt={data.alt_description || " "} />
			<div className='w-full flex items-center mt-2'>
				<div className='flex items-center space-x-2 '>
					<img className='rounded-full w-6 h-6 cursor-pointer' src={data.user.profile_image.small} alt="user profile picture" />
					<h2 className='font-bold cursor-pointer'>
						{ data.user.username }
					</h2>
					<h2 className='text-white bg-gray-300 font-bold px-1 text-[0.7rem] rounded'>
						PRO
					</h2>
				</div>
				<div className='ml-auto flex items-center text-gray-400 space-x-3 font-bold text-sm'>
					<div className='flex items-center'>
						<HeartIcon className='w-4 h-4 mr-1 cursor-pointer' />
						<h2 className=''>
							{ nFormater(data.likes) }
						</h2>
					</div>
					<div className='flex items-center'>
						<EyeIcon className='w-4 h-4 mr-1' />
						<h2 className=''>
							{ nFormater(33490) }
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}