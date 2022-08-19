import { Facebook, Instagram, Twitter, Pinterest } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const Logo = styled.h1``
const Desc = styled.p`
  display: flex;
`
const SocialContainer = styled.div``
const SocialIcon = styled.div.attrs((props) => ({
  color: props.color || null
}))`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;`


const ListItem = styled.li`
width: 50%;`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lama.</Logo>
    <Desc>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
    <Center>
    <Title>
    Useful Links
    </Title>

    <List>
    <ListItem>Home</ListItem>
    <ListItem>Cart</ListItem>
    <ListItem>Man Fashion</ListItem>
    <ListItem>Woman Fashion</ListItem>
    <ListItem>Accessories</ListItem>
    <ListItem>My account</ListItem>
    <ListItem>Order Tracking</ListItem>
    <ListItem>WishList</ListItem>
    <ListItem>Terms</ListItem>
    </List>
    </Center>
    <Right>
    <Title>Contact</Title>
    <ContactItem><Room/> 433 ABC, South Tobinchester 43807</ContactItem>
    <ContactItem><Phone /> + 1 234 53 34</ContactItem>
    <ContactItem>contact@gmail.com</ContactItem>
    </Right>
    </Container>
  )
}

export default Footer
