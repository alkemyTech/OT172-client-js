import { FaHeart, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa'
import { integrantes} from 'config/const'
import React from 'react'

import { Wrapper, Container, Integrante } from './styles'

export default function Credits () {
 
  return (
    <Container>

      <Wrapper>
        <div>
          <hr />
          <h2>Creditos</h2>
          <hr />
        </div>

        <span>Realizado con <FaHeart /> por los Inquietos, grupo de trabajo (Grupo 172-JS) formado para la aceleracion de Alkemy</span>
        <p>Nos hacemos llamar <span className='group-name'>Los Inquietos</span>, ya que asi se referia a nosotros nuestro mentor: <span>Hugo Foncea</span></p>

        <div className='integrantes'>
          {integrantes.map((e,i)=>
          <Integrante key={i}>
            <span><FaUser />{e.name}</span>
            <div className='redes'>
              <a href={e.github} target='_blank'><FaGithub /></a>
              <a href={e.linkedin} target='_blank'><FaLinkedin /></a>

            </div>

          </Integrante>
          )}
            

        </div>
      </Wrapper>
    </Container>
  )
}
