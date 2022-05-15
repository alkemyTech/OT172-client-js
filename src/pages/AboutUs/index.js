import Loader from 'components/utils/Loader';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMembers } from 'store/slices/members';
import { Faculties, Unit, Wrapper, UnitImg } from './styles';

export default function AboutUs() {
  const { members, isLoading } = useSelector(state => state.members)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData() {
      dispatch(await fetchAllMembers())
    }
    fetchData();
  }, [dispatch])

  if (isLoading) return <Loader />

  return (
    <div class="container">

      <Wrapper>
        <div >
          <hr />
          <h2>Misión</h2>
          <hr />
        </div>

        <p class="mission-txt">Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo persona y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo</p>

      </Wrapper>
      <Wrapper>
        <div >
          <hr />
          <h2>Visión</h2>
          <hr />
        </div>

        <p class="mission-txt">Mejorar la calidad de vida de niños y familias en situacion de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, trabajo, deporte, responsabilidad y compromiso</p>

      </Wrapper>

      <Wrapper>
        <div>
          <hr />
          <h2>Sobre nosotros</h2>
          <hr />
        </div>
        <div>
          <img src="https://vidyasheela.com/web-contents/website-components/About-Us-Pages/responsive-about-us-page-html/teaching.png" alt="img" />
          <p>
            Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear, y garantizar estos procesos. Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hot somos un centro comunitario que acompaña a más de 700 personas a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social.
          </p>

        </div>
      </Wrapper>

      {members.length > 0
        ?
        <Wrapper>
          <div >
            <hr />
            <h2>Fundadores</h2>
            <hr />
          </div>
          <Faculties>
            <Unit>
              <UnitImg src={members[0].image} alt="" />
              <br />
              <b>{members[0].name}</b>
              <p dangerouslySetInnerHTML={{ __html: members[0].description }} />
            </Unit>
            <Unit>
              <UnitImg src={members[1].image} alt="" />
              <br />
              <b>{members[1].name}</b>
              <p dangerouslySetInnerHTML={{ __html: members[1].description }} />
            </Unit>
          </Faculties>
        </Wrapper>
        : <Loader />
      }
    </div>
  )
}