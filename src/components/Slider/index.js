import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import styled from 'styled-components';
import { images } from './images';

const Slider = ({title=''}) => {
	return (
		<Container>
			<Titulo>{title}</Titulo>
			<Slideshow controles={true} autoplay={true} velocidad="1000" intervalo="2000">
				{images.map((img, index) => <Slide key={index}>
          <a href={img.link}>
						<img src={img.img} alt=""/>
					</a>
					<TextoSlide>
						<p>{img.text}</p>
					</TextoSlide>
        </Slide>
        )}
			</Slideshow>
		</Container>
	);
}

const Container = styled.section`
	max-width: 1600px;
	margin: auto;
	max-height: 430px;
	overflow: hidden;
`
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	
`;
 
export default Slider;