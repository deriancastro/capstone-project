import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.node,
}

export default function Profile({ image, name, text }) {
  return (
    <Wrapper data-testid="profile">
      <ImageContainer>
        <Image src={image} alt="a Judo throw" />
        <Name>{name}</Name>
      </ImageContainer>
      <AboutMeContainer>
        <AboutMe>About me: </AboutMe>
        <Text value={text}></Text>
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
  background: #bfa27e;
`
const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`
const Image = styled.img`
  border-radius: 50%;
  border: solid #8c7558 10px;
  height: 200px;
  width: 200px;
  justify-self: center;
`
const Name = styled.p`
  text-align: center;
  color: white;
  font-style: italic;
`
const AboutMeContainer = styled.div`
  display: grid;
  grid-template-rows: min-content;
`

const AboutMe = styled.label`
  color: white;
  font-weight: bold;
`

const Text = styled.textarea`
  background: #eee;
`
