import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

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
	HamburguerMenu,
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
	const [isLateralMenuActive, setIsLateralMenuActive] = useState(false)
	const user = getUser()

	useEffect(() => {
		// axios.get('/connections').then((res: any) => {
		// 	const { total } = res.data
		// 	setTotalConnections(total)
		// })

		console.log(isLateralMenuActive)
	}, [totalConnections, user, isLateralMenuActive])

	function changeIsLateralMenuToFalse() {
		setIsLateralMenuActive(false)
	}

	window.addEventListener('resize', changeIsLateralMenuToFalse)

	function goToUserPage() {
		push('/user')
	}

	return (
		<PageLanding>
			<PageLandingContent className='container'>
				{user ? (
					<Header>
						<div className='user' onClick={goToUserPage}>
							{user.photo ? (
								<img src={user.photo} alt={`Foto de ${user.name}`} />
							) : (
								<FaUserCircle size='4rem' />
							)}
							<span>{user.name + ' ' + user.last_name}</span>
						</div>

						<div className='myClasses'>
							<img src={giveClasIcons} alt='Minhas aulas' />
							<Link to='/myClasses'>Minhas aulas</Link>
						</div>
						<div
							className='hamburguerMenuWrapper'
							onClick={() => setIsLateralMenuActive(!isLateralMenuActive)}
						>
							<HamburguerMenu
								className='hamburger'
								active={isLateralMenuActive}
							>
								<div className='lateralMenu'>
									<Link to='/myClasses'>Acessar minhas aulas</Link>
									<Link to='/'>Sair</Link>
									<span className='closeMenu'></span>
								</div>
							</HamburguerMenu>
						</div>
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
					<div className='awelcome'>
						Seja bem-vindo.
						<strong>O que deseja fazer?</strong>
					</div>
					<div className='connections'>
						Total de {totalConnections} conexões já realizadas
						<img src={purpleHeart} alt='Coração roxo' />
					</div>
				</Span>
			</PageLandingContent>
		</PageLanding>
	)
}

export default Landing
