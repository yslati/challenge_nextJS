import { EyeIcon, HeartIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import { useSession } from "next-auth/react"
import { useAppDispatch, useAppSelector } from "../provider/hooks"
import { likeImage, unlikeImage } from "../provider/imagesSlice"
import { nFormater } from "./Functions"

export default function Item(item: any) {

	const dispatch = useAppDispatch()
	const images = useAppSelector(state => state.images.images)
	const session = useSession()

	let data = item.data

	const handleLikeImage = () => {
		// axios.post(`http://localhost:3000/api/like/${data?.id}`, {
		// 	email: session.data?.user?.email,
		// 	imageId: data?.id
		// })
		data?.id && dispatch(likeImage({ imagesData: images, imageId: data?.id }))
	}
	
	const handleUnlikeImage = () => {
		data?.id && dispatch(unlikeImage({ imagesData: images, imageId: data?.id }))
	}

	return (
		<div className="w-full h-40 2xl:h-52 select-none mb-8">
			<a href={data.links.html} target="_blank" rel="noopener noreferrer">
				<img className="w-full h-full object-cover rounded-lg cursor-pointer" src={data.urls.small_s3 || data.urls.small} alt={data.alt_description || " "} />
			</a>
			<div className='w-full flex items-center mt-2'>
				<div className='flex items-center space-x-2 '>
					<a href={data.user.links.html} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">	
						<img className='rounded-full w-6 h-6 cursor-pointer' src={data.user.profile_image.small} alt={data.user.name} />
						<h2 className='font-bold cursor-pointer truncate w-full'>
							{ data.user.username }
						</h2>
					</a>
					<h2 className='text-white bg-gray-300 font-bold px-1 text-[0.7rem] rounded'>
						PRO
					</h2>
				</div>
				<div className='ml-auto flex items-center text-gray-400 space-x-3 font-bold text-sm'>
					<div className='flex items-center pl-1'>
						{
							!data.liked_by_user ?
							<HeartIcon onClick={() => handleLikeImage()} className='w-4 h-4 mr-1 cursor-pointer' /> :
							<HeartIcon onClick={() => handleUnlikeImage()} className='!text-red-500 w-4 h-4 mr-1 cursor-pointer' />
						}
						<h2 className=''>
							{ nFormater(data.likes) }
						</h2>
					</div>
					<div className='flex items-center'>
						<EyeIcon className='w-4 h-4 mr-1' />
						<h2 className=''>
							{ nFormater(data.user.total_photos) }
						</h2>
					</div>
				</div>
			</div>
		</div>
	)
}