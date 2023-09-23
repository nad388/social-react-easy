import { Box } from '@mui/material'
import { FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../types'
import { users } from '../../layout/sidebar/dataUsers'

interface IAddPost {
	setPosts: TypeSetState<IPost[]>
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
	const [content, setContent] = useState<string>('')

	const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setPosts(prev => [
				{
					author: users[0],
					content,
					createdAt: 'today',
				},
				...prev,
			])
			setContent('')
		}
	}
	return (
		<>
			<Box sx={{ borderBottom: '1px solid #ccc', paddingRight: 3 }}>
				{/* <TextField
				label="Tell me what's new with you"
				variant='outlined'
				margin={'normal'}
				InputProps={{
					sx: { borderRadius: '25px', border: 'none' },
					style: { color: '#fff' },
					placeholder: "Tell me what's new with you",
				}}
				sx={{ width: '100%' }}
			/> */}
				<input
					type='text'
					style={{
						padding: 10,
						backgroundColor: 'transparent',
						border: 'none',
						width: '100%',
						color: 'white',
						outline: 'none',
						fontSize: '16px',
					}}
					placeholder="Tell me what's new with you"
					onKeyUp={addPostHandler}
					onChange={e => setContent(e.target.value)}
					value={content}
				/>
			</Box>
		</>
	)
}

export default AddPost
