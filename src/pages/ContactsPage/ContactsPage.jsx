import { Container, ContentList, ContentListItem, MainTitle, Section, Title } from "../../main.styled"



const ContactsPage = () => {
  return (
    <Section>
    <Container>
      <MainTitle >Contacts</MainTitle>

      <ContentList>
        <ContentListItem >
          <Title>Location</Title>
          <p>Ukraine, Kyiv</p>
        </ContentListItem>
        <ContentListItem >
          <Title >Telegram / WhatsApp</Title>
          <p>
            <a href="tel:+79051234567">+38 (093) 916-16-98</a>
          </p>
        </ContentListItem>
        <ContentListItem >
          <Title >Email</Title>
          <p>
            <a href="0969125133k@gmail.com">
            0969125133k@gmail.com
            </a>
          </p>
        </ContentListItem>
      </ContentList>
    </Container>
  </Section>
  )
}

export default ContactsPage
