import React, { ChangeEvent, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import { FaUserCircle } from 'react-icons/fa'
import { useAuth } from '../../hooks/auth'

import userCam from '../../assets/images/user-camera.svg'
import { Fieldset } from '../../components/Fieldset/style'
import { Legend } from '../../components/Legend/style'
import Input from '../../components/Input'

import { InputsGrid, PageUser, UserContainer, UserIndividual } from './style'
import Button from '../../components/Button'

interface NewUserPhoto {
	blob: string
	file: File | string
}

export default function User() {
	const { getUser, setUserPhoto } = useAuth()
	const user = getUser()

	const [newUserName, setNewUserName] = useState(user?.name ? user.name : '')
	const [newUserLastName, setNewUserLastName] = useState(
		user?.last_name ? user.last_name : ''
	)
	const [newUserWhatsapp, setNewUserWhatsapp] = useState(() => {
		if (user?.whatsapp) {
			const formated = user?.whatsapp.replace(
				/(\d{1,2})(\d{1,5})(\d*)/,
				'($1) $2-$3'
			)

			return {
				formated,
				raw: user?.whatsapp,
			}
		}
		return {
			formated: '',
			raw: '',
		}
	})
	const [confirmUserPassword, setConfirmUserPassword] = useState('')
	const [newUserPhoto, setNewUserPhoto] = useState<NewUserPhoto>(() => {
		if (!user?.photo) {
			return {
				blob: '',
				file: '',
			}
		}

		return {
			blob: user.photo,
			file: '',
		}
	})

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		console.log({
			name: newUserName,
			last_name: newUserLastName,
			whatsapp: newUserWhatsapp,
			password: confirmUserPassword,
			photo: newUserPhoto,
		})
	}

	function handleChangeNewUserName(event: ChangeEvent<HTMLInputElement>) {
		setNewUserName(event.target.value)
	}

	function handleChangeNewUserLastName(event: ChangeEvent<HTMLInputElement>) {
		setNewUserLastName(event.target.value)
	}

	function handleChangePhoto(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files) {
			return
		}

		if (!event.target.files[0]) {
			return
		}

		const blob = URL.createObjectURL(event.target.files[0])

		setNewUserPhoto({
			...newUserPhoto,
			blob,
			file: event.target.files[0],
		})
	}

	function handleChangeNewUserWhatsapp(event: ChangeEvent<HTMLInputElement>) {
		const rawNumber = event.target.value.replace(/\D/gi, '')

		const match = rawNumber.match(/^(\d{0,2})(\d{0,5})(\d*)/)

		if (match) {
			if (rawNumber.length <= 2) {
				setNewUserWhatsapp({
					formated: `${match[1]}${match[2]}${match[3]}`,
					raw: rawNumber,
				})
				return
			} else if (rawNumber.length > 2 && rawNumber.length < 7) {
				setNewUserWhatsapp({
					formated: `(${match[1]}) ${match[2]}${match[3]}`,
					raw: rawNumber,
				})
				return
			} else if (rawNumber.length > 7) {
				setNewUserWhatsapp({
					formated: `(${match[1]}) ${match[2]}-${match[3]}`,
					raw: rawNumber,
				})
				return
			}

			setNewUserWhatsapp({
				formated: `(${match[1]}) ${match[2]}${match[3]}`,
				raw: rawNumber,
			})
			return
		}
	}

	function handleChangeConfirmUserPassword(
		event: ChangeEvent<HTMLInputElement>
	) {
		setConfirmUserPassword(event.target.value)
	}

	return (
		<PageUser>
			<PageHeader middleTitleText='Meu perfil' title=''>
				<UserIndividual>
					<div className='photo'>
						{newUserPhoto ? (
							<img src={newUserPhoto.blob} alt={`Foto de ${user?.name}`} />
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
			<UserContainer>
				<form onSubmit={handleSubmit}>
					<Fieldset>
						<Legend>Alterar dados</Legend>
						<InputsGrid>
							<Input
								label='Nome'
								value={newUserName}
								name='name'
								className='nameInput'
								onChange={handleChangeNewUserName}
							/>
							<Input
								label='Sobrenome'
								value={newUserLastName}
								name='last_name'
								className='last_nameInput'
								onChange={handleChangeNewUserLastName}
							/>
							<Input
								label='E-mail'
								value={`${user?.email}`}
								name='email'
								className='emailInput'
								disabled
							/>
							<Input
								label='Whatsapp'
								value={`${newUserWhatsapp.formated}`}
								name='whatsapp'
								className='whatsappInput'
								onChange={handleChangeNewUserWhatsapp}
							/>
							<Input
								label='Confirmar senha'
								name='password'
								className='passwordInput'
								type='password'
								value={confirmUserPassword}
								onChange={handleChangeConfirmUserPassword}
							/>
							<Button type='submit'>Enviar</Button>
						</InputsGrid>
					</Fieldset>
				</form>
			</UserContainer>
		</PageUser>
	)
}
