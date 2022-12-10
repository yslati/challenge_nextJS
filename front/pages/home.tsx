import Head from 'next/head'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './api/hooks'
import { getFirstImages } from './api/imagesSlice'
import Item from './components/Item'
import Navbar from './components/Navbar'


export default function Home() {

	const dispatch = useAppDispatch()
	const images = useAppSelector(state => state.images).images

	useEffect(() => {
		dispatch(getFirstImages());
		console.log('up')
	}, [])

	return (
		<div>
			<Head>
				<title>Home</title>
			</Head>
			<div className='w-screen h-screen px-20'>
				<Navbar />
				<div className='grid grid-cols-5 gap-8 mx-auto'>
					{
						images && images.map((item) => {
							return <Item key={item.id} data={item} />
						})
					}
				</div>
			</div>
		</div>
	)
} 