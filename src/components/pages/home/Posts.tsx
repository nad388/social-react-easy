import { Avatar, Box, ImageList, ImageListItem } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../../types'

interface IPosts {
	posts: IPost[]
}

const Posts: FC<IPosts> = ({ posts }) => {
	return (
		<>
			{posts.map((post, idx) => (
				<Box
					sx={{
						padding: 2,
						marginTop: 3,
						border: '1px solid #1d2022',
						borderRadius: 1,
					}}
					key={`Post-${idx}`}
				>
					<Link
						to={`/profile/${post.author._id}`}
						style={{
							display: 'flex',
							alignItems: 'center',
							textDecoration: 'none',
							color: 'white',
							padding: 4,
							borderRadius: 3,
							marginBottom: 16,
							// backgroundColor: '#1d2022',
						}}
					>
						<Box
							sx={{
								position: 'relative',
								marginRight: 2,
								width: 50,
								height: 50,
							}}
						>
							<Avatar
								src={post.author.avatar}
								alt='user avatar'
								sx={{ width: 46, height: 46, borderRadius: '50%' }}
							/>
						</Box>
						<div>
							<div style={{ fontSize: 14 }}>{post.author.name}</div>
							<div style={{ fontSize: 14, opacity: '0.6' }}>
								{post.createdAt}
							</div>
						</div>
					</Link>
					<p>{post.content}</p>
					{post?.images?.length && (
						<ImageList variant='masonry' cols={3} gap={8}>
							{post.images.map(image => (
								<ImageListItem key={image}>
									<img src={image} alt={''} loading='lazy' />
								</ImageListItem>
							))}
						</ImageList>
					)}
				</Box>
			))}
		</>
	)
}

export default Posts
