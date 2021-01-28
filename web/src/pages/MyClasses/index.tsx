import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { PageMyClasses, ClassesContainer, ClassesContent } from './styles'

function MyClasses() {
	return (
		<PageMyClasses>
			<PageHeader
				middleTitleText='Minhas aulas'
				title='Aqui você pode visualizar as suas aulas!'
				description='Adicione remova e edite suas aulas em um só lugar'
			/>
			<ClassesContainer>
				<ClassesContent>
					<TeacherItem
						teacher={{
							id: 1,
							avatar:
								'http://192.168.1.207:3030/photo/download_1611359399921_198.jpg',
							name: 'João',
							whatsapp: '1231212',
							bio: 'Test',
							subject: 'Geografia',
							cost: 12,
						}}
					/>
				</ClassesContent>
			</ClassesContainer>
		</PageMyClasses>
	)
}

export default MyClasses
