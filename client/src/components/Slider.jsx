import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  display: flex;
`

const Slide = styled.div.attrs((props) => ({
  bg: props.bg || ''
}))`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://image.made-in-china.com/202f0j00HlwpujDFwJkZ/Hot-Selling-Online-Shopping-Summer-Holiday-Women-Tops.jpg" />
          </ImgContainer>

          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>
              DON'T PROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://image.made-in-china.com/202f0j00HlwpujDFwJkZ/Hot-Selling-Online-Shopping-Summer-Holiday-Women-Tops.jpg" />
          </ImgContainer>

          <InfoContainer bg="fbf0f4">
            <Title>POPULAR SALE</Title>
            <Desc>
              DON'T PROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="https://image.made-in-china.com/202f0j00HlwpujDFwJkZ/Hot-Selling-Online-Shopping-Summer-Holiday-Women-Tops.jpg" />
          </ImgContainer>

          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T PROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
