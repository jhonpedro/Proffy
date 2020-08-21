import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

// import './styles.css'

import {
  PageHeaderElement,
  TopBar,
  HeaderContent
} from './styles'

interface PageHeaderProps {
  title: string,
  description?: string,
  children?: React.ReactChild
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children: Component }) => {
  return (
    <PageHeaderElement>
      <TopBar>
        <Link to="/" >
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </TopBar>
      <HeaderContent>
        <strong>{title}</strong>
        {description && (
          <p>{description}</p>
        )}
        {Component}
      </HeaderContent>
    </PageHeaderElement>
  )
}

export default PageHeader