import React from 'react'
import { Wrapper, ContactText, Head, Container } from './styles'
import { ContactForm } from './Form'
import ContactCard from './ContactCard'
export const ContactScreen = () => {
  return (
    <Wrapper>
      <ContactText>
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
      </ContactText>
      <ContactForm />

    </Wrapper>
  )
}
export default function ContactsList ({ contacts }) {
  return (
    <Container>
      <h1>Contactos recibidos( {contacts.length} )</h1>
      <Head>
        <div className='contactsList_name'>Nombre</div>
        <div className='contactsList_email'>Email</div>
        <div className='contactsList_phone'>Phone</div>
      </Head>
      {contacts?.map((cont, index) => <ContactCard key={index} contact={cont} />)}
    </Container>
  )
}
