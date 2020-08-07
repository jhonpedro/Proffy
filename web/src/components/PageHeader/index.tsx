import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps {
  title: string,
  children?: any
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children: Component }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/" >
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {Component}
      </div>
    </header>
  )
}

export default PageHeader