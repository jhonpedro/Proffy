import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/64690421?s=460&u=db4fb099e67cc2c146e5a161032a59cc90a36b7c&v=4" alt="João" />
        <div>
          <strong>João Pedro</strong>
          <span>Ciclista</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /> <br />
            Blanditiis reprehenderit dolores adipisci doloremque laboriosam ipsam, odit molestias sapiente officiis aspernatur quibusdam. Reiciendis deserunt accusamus ipsa voluptate id, a maiores similique.
          </p>
      <footer>
        <p>
          Preço/Hora
              <strong>R$ 9,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem