import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FaLaugh } from 'react-icons/fa'
import axios from '../../services/axios'

import { User, useAuth } from '../../hooks/auth'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasIcons from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

// import './styles.css'

import {
	PageLanding,
	Header,
	PageLandingContent,
	LogoContainer,
	ButtonsContainer,
	Button,
	Span,
} from './styles'

function Landing() {
	const { push } = useHistory()
	const { getUser } = useAuth()
	const [totalConnections, setTotalConnections] = useState(0)
	const [user] = useState<User>(() => {
		const userLocalstorage = getUser()

		if (!userLocalstorage) {
			push('/sing-in')
			return {} as User
		}

		return userLocalstorage
	})

	useEffect(() => {
		// axios.get('/connections').then((res: any) => {
		// 	const { total } = res.data
		// 	setTotalConnections(total)
		// })
	}, [totalConnections, user])

	return (
		<PageLanding>
			<PageLandingContent className='container'>
				{user ? (
					<Header>
						<div className='user'>
							{user.photo ? (
								<img src={user.photo} alt={`Foto de ${user.name}`} />
							) : (
								<FaLaugh size='4rem' />
							)}
							<span>{user.name + ' ' + user.last_name}</span>
						</div>
						<div className='hamburger'></div>
					</Header>
				) : null}
				<LogoContainer>
					<img src={logoImg} alt='Proffy' />
					<h2>Sua plataforma de estudos online</h2>
				</LogoContainer>
				<img
					src={landingImg}
					alt='Plataforma de estudos'
					className='hero-image'
				/>
				<ButtonsContainer>
					<Button study>
						<Link to='/study'>
							<img src={studyIcon} alt='Estudar' />
							Estudar
						</Link>
					</Button>
					<Button give_classes>
						<Link to='/give-classes'>
							<img src={giveClasIcons} alt='Dar aulas' />
							Dar aulas
						</Link>
					</Button>
				</ButtonsContainer>
				<Span className='total-connections'>
					Total de {totalConnections} conexões já realizadas{' '}
					<img src={purpleHeart} alt='Coração roxo' />
				</Span>
			</PageLandingContent>
		</PageLanding>
	)
}

export default Landing
