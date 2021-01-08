import React, { ChangeEvent, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'

import userCam from '../../assets/images/user-camera.svg'
import { PageUser, UserContainer, UserIndividual } from './style'
import Input from '../../components/Input'

export default function User() {
	const { getUser, setUserPhoto } = useAuth()
	const user = getUser()
	const [userPhotoBlob, setUserPhotoBlob] = useState(() => {
		if (!user?.photo) {
			return ''
		}

		return user?.photo
	})

	function handleChangePhoto(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) {
			return
		}

		const photoBlob = URL.createObjectURL(event.target.files[0])

		setUserPhotoBlob(photoBlob)
	}

	return (
		<PageUser>
			<PageHeader middleTitleText='Meu perfil' title=''>
				<UserIndividual>
					<div className='photo'>
						{userPhotoBlob ? (
							<img src={userPhotoBlob} alt={`Foto de ${user?.name}`} />
						) : (
							<FaUserCircle size='18.75rem' />
						)}
						<label htmlFor='photoFile'>
							<input type='file' id='photoFile' onChange={handleChangePhoto} />
							<img src={userCam} alt='Trocar foto' className='user-cam' />
						</label>
					</div>
					<strong>{`${user?.name} ${user?.last_name}`}</strong>
				</UserIndividual>
			</PageHeader>
			<UserContainer></UserContainer>
		</PageUser>
	)
}
