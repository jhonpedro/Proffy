import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/axios'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'

import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import { Fieldset } from '../../components/Fieldset/style'
import { Legend } from '../../components/Legend/style'

import { PageTeacherForm, MainPageTeacherForm, Footer } from './style'

// import './styles.css'

function TeacherForm() {
	const [name, setName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [bio, setBio] = useState('')

	const [subject, setSubject] = useState('')
	const [cost, setCost] = useState('')

	const [scheduleItems, setScheduleItems] = useState([
		{ week_day: 0, from: '', to: '' },
	])

	const history = useHistory()

	function handleSubmit(event: FormEvent) {
		event.preventDefault()

		if (
			!name ||
			!whatsapp ||
			!bio ||
			!subject ||
			!cost ||
			!scheduleItems.map((item) => (item.from ? item : null))
		) {
			return
		}

		api.post('/classes', {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule: scheduleItems,
		})

		history.push('/')
	}

	function addNewScheduleItem() {
		setScheduleItems([
			...scheduleItems,
			{
				week_day: 0,
				from: '',
				to: '',
			},
		])
	}

	function setScheduleItemValue(
		position: number,
		field: string,
		value: string
	) {
		const newScheduleItems = scheduleItems.map((scheduleItem, index) => {
			if (index === position) {
				return {
					...scheduleItem,
					[field]: value,
				}
			}
			return scheduleItem
		})
		console.log(newScheduleItems)
		setScheduleItems(newScheduleItems)
	}

	return (
		<PageTeacherForm className='container'>
			<PageHeader
				middleTitleText='Dar Aulas'
				title='Que incrivel que você quer dar aulas.'
				description='O primeiro passo é preencher esse formulário de inscrição'
			/>
			<MainPageTeacherForm>
				<form onSubmit={handleSubmit}>
					<Fieldset>
						<Legend>Seus dados</Legend>
						<Input
							name='name'
							label='Nome completo'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
						<Input
							name='avatar'
							label='Avatar'
							value={avatar}
							onChange={(event) => setAvatar(event.target.value)}
						/>
						<Input
							name='whatsapp'
							label='Whatsapp'
							value={whatsapp}
							onChange={(event) => setWhatsapp(event.target.value)}
						/>
						<Textarea
							name='bio'
							label='Biografia'
							value={bio}
							onChange={(event) => setBio(event.target.value)}
						/>
					</Fieldset>

					<Fieldset>
						<Legend>Sobre as aulas</Legend>
						<Select
							name='subject'
							label='Matéria'
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
							options={[
								{ value: 'Artes', label: 'Artes' },
								{ value: 'Biologia', label: 'Biologia' },
								{ value: 'Ciência', label: 'Ciência' },
								{ value: 'Educação física', label: 'Educação física' },
								{ value: 'Física', label: 'Física' },
								{ value: 'Geografia', label: 'Geografia' },
								{ value: 'História', label: 'História' },
								{ value: 'Português', label: 'Português' },
								{ value: 'Matemática', label: 'Matemática' },
								{ value: 'Química', label: 'Química' },
								{ value: 'Filosofia', label: 'Filosofia' },
								{ value: 'Inglês', label: 'Inglês' },
								{ value: 'Espanhol', label: 'Espanhol' },
							]}
						/>
						<Input
							name='cost'
							label='Custo da sua hora por aula'
							value={cost}
							onChange={(event) => setCost(event.target.value)}
						/>
					</Fieldset>

					<Fieldset>
						<Legend>
							Horários que você pode dar aula
							<button onClick={addNewScheduleItem} type='button'>
								+ Novo horário
							</button>
						</Legend>
						{scheduleItems.map((scheduleItem, index) => {
							return (
								<div key={index} className='schedule-item'>
									<Select
										name='week_day'
										label='Dia da semana'
										value={scheduleItems[index].week_day}
										onChange={(event) =>
											setScheduleItemValue(
												index,
												'week_day',
												event.target.value
											)
										}
										options={[
											{ value: '0', label: 'Domingo' },
											{ value: '1', label: 'Segunda-feira' },
											{ value: '2', label: 'Terça-feira' },
											{ value: '3', label: 'Quarta-feira' },
											{ value: '4', label: 'Quinta-feira' },
											{ value: '5', label: 'Sexta-feira' },
											{ value: '6', label: 'Sábado' },
										]}
									/>
									<Input
										name='from'
										label='Das'
										type='time'
										value={scheduleItems[index].from}
										onChange={(event) =>
											setScheduleItemValue(index, 'from', event.target.value)
										}
									/>
									<Input
										name='to'
										label='Até'
										type='time'
										value={scheduleItems[index].to}
										onChange={(event) =>
											setScheduleItemValue(index, 'to', event.target.value)
										}
									/>
								</div>
							)
						})}
					</Fieldset>

					<Footer>
						<p>
							<img src={warningIcon} alt='Aviso Importante' />
							Importante! <br />
							Preencha todos os dados
						</p>
						<button type='submit'>Salvar cadastro</button>
					</Footer>
				</form>
			</MainPageTeacherForm>
		</PageTeacherForm>
	)
}

export default TeacherForm
