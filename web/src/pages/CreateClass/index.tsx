import React, { useState, FormEvent, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/axios'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/images/icons/warning.svg'

import Textarea from '../../components/TextArea'
import Select from '../../components/Select'
import { Fieldset } from '../../components/Fieldset/style'
import { Legend } from '../../components/Legend/style'

import {
	PageTeacherForm,
	MainPageTeacherForm,
	ScheduleItem,
	Footer,
} from './style'
import { useAuth } from '../../hooks/auth'
import SimpleInput from '../../components/SimpleInput'
import Button from '../../components/Button'

// import './styles.css'

interface ScheduleItem {
	week_day: number
	start: string
	end: string
}

function TeacherForm() {
	const { getUser } = useAuth()
	const user = getUser()

	const [biography, setBiography] = useState('')

	const [subject, setSubject] = useState('')
	const [cost, setCost] = useState('')

	const [scheduleItems, setScheduleItems] = useState<Array<ScheduleItem>>([
		{ week_day: 0, start: '', end: '' },
	])

	const { push } = useHistory()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}, [])

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const classesDataForm = {
			biography,
			subject,
			cost: Number(cost),
			schedule: scheduleItems,
		}

		const schema = Yup.object().shape({
			biography: Yup.string().trim().required('A biografia é obrigatória'),
			subject: Yup.string().required('A matéria é obrigatória'),
			cost: Yup.number()
				.moreThan(-1, 'O custo tem que ser maior ou igual a 0')
				.required('O custo deve ser de pelo menos 0'),
			schedule: Yup.array().of(
				Yup.object().shape({
					week_day: Yup.number().moreThan(-1).required(),
					start: Yup.string()
						.min(3, 'É necessário escolher uma hora no início de um horário')
						.required('O horário do inicio de aula é obrigatório'),
					end: Yup.string()
						.min(3, 'É necessário escolher uma hora de final para um horário')
						.required('O horário do final de aula é obrigatório'),
				})
			),
			userWhatsapp: Yup.string().required('O whatsapp é obrigatório'),
		})

		try {
			schema.validateSync(
				{ ...classesDataForm, userWhatsapp: user.whatsapp },
				{ abortEarly: false }
			)
		} catch (err) {
			err.errors.forEach((errName: string) => {
				toast.error(errName)
			})
			return
		}

		try {
			await api.post('/classes', classesDataForm)

			toast.success(
				'Cadastro feito com sucesso! Redirecionando você para as suas aulas'
			)
			push('/my-classes')
			if (document.getElementById('root')) {
				const height = document.getElementById('root')?.scrollHeight || 0
				window.scrollTo({
					top: height,
					left: 0,
					behavior: 'smooth',
				})
			}
		} catch (error) {
			if (error.response.status === 401) {
				toast.info(
					'É necessário efetuar o Login novamente. Você será redirecionada em segundos'
				)
				setTimeout(() => {
					push('/sing-in', { lastPage: '/create-class' })
				}, 4000)
			}
		}
	}

	function addNewScheduleItem() {
		setScheduleItems([
			...scheduleItems,
			{
				week_day: 0,
				start: '',
				end: '',
			},
		])
	}

	function handleChangeScheduleItems(
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
		setScheduleItems(newScheduleItems)
	}

	function handleChangeCost(event: React.ChangeEvent<HTMLInputElement>) {
		let cleanCost = event.target.value.replace(/[A-Z]/gi, '')
		cleanCost = cleanCost.replace(',', '.')

		if (
			cleanCost[cleanCost.length - 1] === '.' &&
			cleanCost[cleanCost.length - 2] === '.'
		) {
			return
		}

		setCost(cleanCost)
	}

	function adviseAboutInput() {
		toast.info('Para alterar esse campo é necessário ir ao seu perfil')
	}

	return (
		<PageTeacherForm>
			<PageHeader
				middleTitleText='Criar aulas'
				title='Vamos criar uma aula.'
				description='Preencha esse formulário'
			/>
			<MainPageTeacherForm>
				<form onSubmit={handleSubmit}>
					<Fieldset onClick={adviseAboutInput}>
						<Legend>Seus dados</Legend>
						<Input
							name='name'
							label='Nome completo'
							disabled
							value={user?.name}
						/>
						<Input
							name='whatsapp'
							label='Whatsapp'
							disabled
							value={user?.whatsapp}
						/>
					</Fieldset>

					<Fieldset>
						<Legend>Sobre as aulas</Legend>
						<Textarea
							name='bio'
							label='Biografia'
							value={biography}
							onChange={(event) => setBiography(event.target.value)}
						/>
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
							onChange={handleChangeCost}
						/>
					</Fieldset>

					<Fieldset>
						<Legend>
							Horários das aulas
							<button onClick={addNewScheduleItem} type='button'>
								+ Novo horário
							</button>
						</Legend>
						{scheduleItems?.map((scheduleItem, index) => {
							return (
								<ScheduleItem key={index}>
									<Select
										name='week_day'
										label='Dia da semana'
										value={scheduleItem.week_day}
										onChange={(event) =>
											handleChangeScheduleItems(
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
									<SimpleInput
										name='from'
										label='Das'
										type='time'
										value={scheduleItem.start}
										onChange={(event) =>
											handleChangeScheduleItems(
												index,
												'start',
												event.target.value
											)
										}
									/>
									<SimpleInput
										name='to'
										label='Até'
										type='time'
										value={scheduleItem.end}
										onChange={(event) =>
											handleChangeScheduleItems(
												index,
												'end',
												event.target.value
											)
										}
									/>
								</ScheduleItem>
							)
						})}
					</Fieldset>
					<Button type='submit'>Salvar cadastro</Button>
				</form>
				<Footer>
					<p>
						<img src={warningIcon} alt='Aviso Importante' />
						Importante! <br />
						Preencha todos os dados
					</p>
				</Footer>
			</MainPageTeacherForm>
		</PageTeacherForm>
	)
}

export default TeacherForm
