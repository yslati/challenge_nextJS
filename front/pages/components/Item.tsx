import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid"

export default function Item(data: any) {
	let banana = './images/banana.jpg'
	let des = "description"
	let logo = "./images/logo.jpg"

	return (
		<div className="w-full select-none">
			<img className="object-cover rounded-lg" src={data.image} alt={des} />
			<div className='w-full flex items-center mt-2'>
				<div className='flex items-center space-x-2 '>
					<img className='rounded-full w-6 h-6 cursor-pointer' src={logo} alt="user profile picture" />
					<h2 className='font-bold cursor-pointer'>
						Yassin
					</h2>
					<h2 className='text-white bg-gray-300 font-bold px-1 text-[0.7rem] rounded'>
						TEAM
					</h2>
				</div>
				<div className='ml-auto flex items-center text-gray-400 space-x-3 font-bold text-sm'>
					<div className='flex items-center'>
						<HeartIcon className='w-4 h-4 mr-1 cursor-pointer' />
						<h2 className=''>
							100
						</h2>
					</div>
					<div className='flex items-center'>
						<EyeIcon className='w-4 h-4 mr-1' />
						<h2 className=''>
							33.5k
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}