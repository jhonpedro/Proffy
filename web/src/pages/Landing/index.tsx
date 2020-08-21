import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClasIcons from '../../assets/images/icons/give-classes.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'

// import './styles.css'

import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonsContainer,
  Button,
  Span
} from './styles'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    api.get('/connections').then((res: any) => {
      const { total } = res.data
      setTotalConnections(total)
    })
  }, [totalConnections])

  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </LogoContainer>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <ButtonsContainer>
          <Button study>
            <Link to="/study">
              <img src={studyIcon} alt="Estudar" />
              Estudar
            </Link>
          </Button>
          <Button give_classes>
            <Link to="/give-classes">
              <img src={giveClasIcons} alt="Dar aulas" />
              Dar aulas
            </Link>
          </Button>

        </ButtonsContainer>
        <Span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeart} alt="Coração roxo" />
        </Span>
      </PageLandingContent>
    </PageLanding>
  )
}

export default Landing