import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.node,
}

export default function Profile({ image, name, text }) {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={image} alt="" />
        <Name>{name}</Name>
      </ImageContainer>
      <AboutMeContainer>
        <AboutMe>About me: </AboutMe>
        <Text>{text}</Text>
      </AboutMeContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-rows: min-content;
  gap: 20px;
  padding: 20px 10px;
  height: 100%;
`
const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`
const Image = styled.img`
  border-radius: 50%;

  height: 200px;
  width: 200px;
  justify-self: center;
`
const Name = styled.p`
  text-align: center;
`
const AboutMeContainer = styled.div`
  display: grid;
  grid-template-rows: min-content;
`

const AboutMe = styled.label`
  background: papayawhip;
`
const Text = styled.textarea`
  background: #eee;
`
