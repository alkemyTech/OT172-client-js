import React from 'react'
import { Faculties, Unit, Wrapper, UnitImg } from './styles';

export default function AboutUs() {
  
  return (
    <div class="container">

   <Wrapper>
      <div >
        <hr/>
        <h2>Misión</h2>
        <hr/>
      </div>

      <p class="mission-txt">Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo persona y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo</p>

    </Wrapper>
    <Wrapper>
      <div >
        <hr/>
        <h2>Visión</h2>
        <hr/>
      </div>

      <p class="mission-txt">Mejorar la calidad de vida de niños y familias en situacion de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, trabajo, deporte, responsabilidad y compromiso</p>

    </Wrapper>

    <Wrapper>
    <div>
        <hr/>
        <h2>Sobre nosotros</h2>
        <hr/>
      </div>
      <div>
        <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png" alt="img"/>
        <p>
Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear, y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hot somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.
        </p>

      </div>
      </Wrapper>

  <Wrapper>
  <div >
        <hr/>
        <h2>Fundadores</h2>
        <hr/>
      </div>
      <Faculties>
        <Unit>
          <UnitImg src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/Director.jpg" alt=""/>
          <br/>
          <b>María Irola</b>
          <p>Estudió economía y se especializó en economía para el desarrollo. Comenzó como voluntaria en la fundación y fue quien promovió el crecimiento y la organización de la institución acompañando la transformación de un simple comedor barrial al centro comunitario de atención integral que es hoy en día.</p>
        </Unit>
        <Unit>
          <UnitImg src="https://pbs.twimg.com/profile_images/1226669809720602624/JPWwKdgl_400x400.jpg" alt=""/>
          <br/>
          <b>Marita Gomez</b>
          <p>Estudió la carrera de nutrición y se especializó en nutrición infantil. Toda la vida fue voluntaria en distintos espacios en el barrio hasta que decidió abrir un comedor propio. Comenzó trabajando con 5 familias y culminó su trabajo transformando Somos Más en la organización que es hoy.</p> 
          </Unit>
        </Faculties>
    </Wrapper>
  </div>
  )
}