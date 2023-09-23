import { Box } from '@mui/material'
import { FC, useState } from 'react'
import { IPost } from '../../../types'
import AddPost from './AddPost'
import Posts from './Posts'
import { initialPosts } from './initialPosts'

const Home: FC = () => {
	const [posts, setPosts] = useState<IPost[]>(initialPosts)
	return (
		<Box style={{ borderLeft: '2px solid white', paddingLeft: 30 }}>
			<AddPost setPosts={setPosts} />
			<Posts posts={posts} />
		</Box>
	)
}

export default Home
