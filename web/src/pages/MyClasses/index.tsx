import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/axios'
import { NewUserClass } from '../../../../backend/src/utils/helpers/formatClasses'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import { useAuth } from '../../hooks/auth'

import {
	PageMyClasses,
	ClassesContainer,
	ClassesContent,
	AddClassContainer,
} from './styles'

interface UserClass extends Array<NewUserClass> {}

function MyClasses() {
	const { push } = useHistory()
	const { getUser } = useAuth()
	const user = getUser()
	const [userClasses, setUserClasses] = useState<UserClass>(() => {
		return [
			{
				id: 0,
				subject: '',
				biography: '',
				cost: '',
				schedule: [
					{
						week_day: 0,
						start: '',
						end: '',
					},
				],
			},
		]
	})

	useEffect(() => {
		api.get('/user-classes').then((response) => {
			setUserClasses(response.data)
		})
	}, [])

	function redirectToCreateClass() {
		push('/create-class')
		return
	}

	return (
		<PageMyClasses>
			<PageHeader
				middleTitleText='Minhas aulas'
				title='Aqui você pode visualizar as suas aulas!'
				description='Adicione remova e edite suas aulas em um só lugar'
			/>
			<ClassesContainer>
				{userClasses.length > 0 ? (
					<ClassesContent>
						{userClasses.map((userClass) => {
							return (
								<TeacherItem
									key={userClass.id}
									teacher={{
										id: user.id,
										avatar: user.photo,
										name: user.name,
										whatsapp: user.whatsapp,
										bio: userClass.biography,
										subject: userClass.subject,
										cost: Number(userClass.cost),
									}}
									schedule={userClass.schedule}
								/>
							)
						})}
					</ClassesContent>
				) : null}
			</ClassesContainer>
			<AddClassContainer>
				<strong onClick={redirectToCreateClass}>+ Adicionar uma aula</strong>
			</AddClassContainer>
		</PageMyClasses>
	)
}

export default MyClasses
