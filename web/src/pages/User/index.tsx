import React from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'

import userCam from '../../assets/images/user-camera.svg'
import { PageUser, UserContainer, UserIndividual } from './style'

export default function User() {
	const { getUser } = useAuth()
	const user = getUser()
	return (
		<PageUser>
			<PageHeader middleTitleText='Meu perfil' title=''>
				<UserIndividual>
					<div className='photo'>
						{user?.photo ? (
							<img src={user?.photo} alt={`Foto de ${user?.name}`} />
						) : (
							<FaUserCircle size='4rem' />
						)}
						<img src={userCam} alt='Trocar foto' className='user-cam' />
					</div>
					<strong>{`${user?.name} ${user?.last_name}`}</strong>
				</UserIndividual>
			</PageHeader>
			<UserContainer></UserContainer>
		</PageUser>
	)
}
