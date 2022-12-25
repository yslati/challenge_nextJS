import Head from 'next/head'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './api/hooks'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { getImages, getTopicImages, getTopics, updatePageNumber } from './api/imagesSlice'
import Item from './components/Item'
import Navbar from './components/Navbar'
import { useSession } from "next-auth/react"
import Router from "next/router";


export default function Home() {

	const dispatch = useAppDispatch()

	const images = useAppSelector(state => state.images)
	const { status, data } = useSession()

	const prevPage = () => {
		if (images?.page_number && images?.page_number > 1)
			dispatch(updatePageNumber({ pageNumber: images?.page_number - 1 })).then(() => {
				window.scrollTo(0, 0)
			}) 
	}
	const nextPage = () => {
		if (images?.page_number)
			dispatch(updatePageNumber({ pageNumber: images?.page_number + 1 })).then(() => {
				window.scrollTo(0, 0)
			})
	}

	useEffect(() => {
		if (status === "unauthenticated")
			Router.replace("/login")
		dispatch(getTopics());
	}, [status])

	useEffect(() => {
		if (images.topic_selected !== "All")
			dispatch(getTopicImages({ pageNumber: images?.page_number, orderBy: images?.order_by, topicId: images.topic_selected }))
		else
		dispatch(getImages({ pageNumber: images?.page_number, orderBy: images?.order_by }));
	}, [images?.order_by, images?.page_number, images?.topic_selected])

	if (status === "authenticated")
		return (
			<div>
				<Head>
					<title>Home</title>
				</Head>
				<div className='w-full h-screen px-10 lg:px-20'>
					<Navbar />
					<div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8 mx-auto pb-8'>
						{
							images?.images && images?.images.map((item) => {
								return <Item key={item?.id} data={item} />
							})
						}
					</div>
					<div className='pb-8 flex items-center justify-center'>
						<a onClick={() => prevPage()} className="cursor-pointer inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							<ArrowLongLeftIcon className='w-5 h-5 mr-2' />
							Previous
						</a>
						<a onClick={() => nextPage()} className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
							Next
							<ArrowLongRightIcon className='w-5 h-5 ml-2' />
						</a>
					</div>
				</div>
			</div>
		)
	return(
		<div className="w-screen h-screen flex items-center justify-center text-2xl text-gray-400 font-thin select-none ">
			Loading...
		</div>
	)
} 