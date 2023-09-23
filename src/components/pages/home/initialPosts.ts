import { IPost } from '../../../types'

export const initialPosts: IPost[] = [
	{
		author: {
			_id: '1233',
			avatar: 'https://ir.ozone.ru/multimedia/c1000/1019875205.jpg',
			name: 'Dale Cooper',
		},
		content:
			"Diane, if you're in Twin Peaks, be sure to try the cherry pie, it's absolutely wonderful!",
		createdAt: '15 minutes ago',
		images: [
			'https://media.cntraveler.com/photos/593027f68bf41c33ec27ad92/master/pass/GettyImages-484818774-twin-peaks.jpg',
			'https://wallpapers.com/images/featured/twin-peaks-nlw8kl70650w8gsx.jpg',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4gc4QMjceXVkysGzePI8YvI1_lAcH9xNgdKLZHtAB2IaU9UyrZPZMgsskLqETGOwmplg&usqp=CAU',
			'https://www.twinpeaksblog.com/wp-content/uploads/2018/05/18_TPB_VacantPeaks_GNH_2002_GNHExt02.jpg',
			'https://twinpeaksarchives.files.wordpress.com/2013/04/pulaski.jpg',
			'https://www.thewrap.com/wp-content/uploads/2017/06/twin-peaks-revival-bang-bang-bar-roadhouse-richard-horne-eamon-farren.jpg',
		],
	},
]
