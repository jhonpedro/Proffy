import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

import { useAuth } from '../../hooks/auth'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClasIcons from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import singOutIcon from '../../assets/images/icons/sing-out.svg'

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
	}, [totalConnections, user])

	function changeIsLateralMenuToFalse() {
		if (isLateralMenuActive) {
			setIsLateralMenuActive(false)
		}
	}

	window.addEventListener('resize', changeIsLateralMenuToFalse)

	function goToUserPage() {
		push('/user')
	}

	function handleSingOut() {
		localStorage.clear()
		push('/sing-in')
	}

	function redirectToMyClasses() {
		push('/my-classes')
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
							<span>Meu perfil</span>
						</div>
						{/* I fell like this is the wrong way to do a menu
								because i am wrinting a code to be in the menu twice
								one for the menu larger than 700px and one for 
								a thiner menu. Thats good for another commit
								it's just see how bootstrap team do their responsive
								menu and do the same here.
						*/}
						<div className='my-classes' onClick={redirectToMyClasses}>
							<img src={giveClasIcons} alt='Minhas aulas' />
							<span>Minhas aulas</span>
						</div>
						<div className='sing-out' onClick={handleSingOut}>
							<img src={singOutIcon} alt='Sair' />
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
									<Link to='/my-classes'>Acessar minhas aulas</Link>
									<p onClick={handleSingOut}>Sair</p>
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
				<div className='landing-img-container'>
					<img
						src={landingImg}
						alt='Plataforma de estudos'
						className='hero-image'
					/>
				</div>
				<ButtonsContainer>
					<Button study>
						<Link to='/study'>
							<img src={studyIcon} alt='Estudar' />
							Estudar
						</Link>
					</Button>
					<Button give_classes>
						<Link to='/create-class'>
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
