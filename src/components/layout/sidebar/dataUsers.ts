import { IUser } from '../../../types'

export const users: IUser[] = [
	{
		_id: '1',
		avatar:
			'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/e9065feecbaed59feecf86d8b0a1e89b.v1.cropped.jpg',
		name: 'Doppelganger',
		isInNetwork: true,
	},
	{
		_id: '2',
		avatar:
			'https://i.etsystatic.com/5175241/r/il/4469ab/1321204315/il_570xN.1321204315_kfym.jpg',
		name: 'Laura Palmer',
		isInNetwork: true,
	},
	{
		_id: '3',
		avatar:
			'https://64.media.tumblr.com/b52f85ccdd0ad23cadb4c14482271c2c/2ee9b6641428706f-b6/s540x810/c341c5899fdd3a28ad69d8b75fb8a5c0ac1d7ebe.png',
		name: 'Donna Hayward',
		isInNetwork: false,
	},
	{
		_id: '4',
		avatar: 'https://i1.sndcdn.com/avatars-000745776880-fjv8w9-t500x500.jpg',
		name: 'Leland Palmer',
		isInNetwork: false,
	},
]
