import React, { useState, FormEvent } from 'react'
import api from '../../services/api'

import PageHeader from '../../components/PageHeader'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import {
  PageTeacherList,
  Form,
  Main
} from './styles'

// import './styles.css'

function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const res = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(res.data)
  }

  return (
    <PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form onSubmit={handleSubmit}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={event => setSubject(event.target.value)}
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
              { value: 'Espanhol', label: 'Espanhol' }
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={event => setWeekDay(event.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </Form>
      </PageHeader>

      <Main>
        {/* {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })} */}
        <TeacherItem
          teacher={{
            id: 1,
            name: 'Joao',
            avatar: 'https://avatars1.githubusercontent.com/u/64690421?s=460&u=db4fb099e67cc2c146e5a161032a59cc90a36b7c&v=4',
            whatsapp: '123-123-0',
            bio: `
            Uma bio interessante \n

            Tipo bem interessante mesmo \n

            *coisas interessantes*
          `,
            subject: 'Matemática',
            cost: 110
          }}
        />
      </Main>
    </PageTeacherList>
  )
}

export default TeacherList