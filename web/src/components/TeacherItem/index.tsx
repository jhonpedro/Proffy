import React from 'react'
import api from '../../services/api'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

// import './styles.css'

import {
  TeacherItemContainer,
  Header,
  Paragraph,
  Footer
} from './styles'

export interface Teacher {
  id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <TeacherItemContainer>
      <Header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>
      <Paragraph>
        {teacher.bio}
      </Paragraph>
      <Footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}`}
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </Footer>
    </TeacherItemContainer>
  )
}

export default TeacherItem