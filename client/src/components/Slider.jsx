import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`

const Arrow = styled.div.attrs((props) => ({
  direction: props.direction || ''
}))`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  opacity: 0.5;
`

const Wrapper = styled.div`
  height: 100%;
`

const Slide = styled.div`
  display: flex;
  align-item: center;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img``

const InfoContainer = styled.div`
  flex: 1;
`

const Slider = () => {
  
  
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper>
    <ImgContainer>
    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
    </ImgContainer>
    
        <InfoContainer></InfoContainer>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
