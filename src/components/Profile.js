import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Profile.propTypes = {
  image: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  aboutYou: PropTypes.string.isRequired,
}

export default function Profile({ image, fullName, aboutYou }) {
  return (
    <Wrapper data-testid="profile">
      <ImageContainer>
        <Image src={image} alt="" />
        <Name data-testid="name">{fullName}</Name>
      </ImageContainer>
      <AboutYouContainer>
        <Label>About me: </Label>
        <Text data-testid="aboutYou">{aboutYou}</Text>
      </AboutYouContainer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  padding: 20px 10px;
  height: calc(100vh - 120px);
  background: #bfa27e;
  position: relative;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    padding: 20px;
  }
`
const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
`
const Image = styled.img`
  border-radius: 50%;
  border: solid #8c7558 10px;
  height: 200px;
  width: 200px;

  @media (min-width: 600px) {
    height: 190px;
    width: 190px;
  }
`
const Name = styled.p`
  text-align: center;
  color: white;
  font-style: italic;
`
const AboutYouContainer = styled.div`
  display: grid;
  grid-template-rows: min-content;
`

const Label = styled.label`
  color: white;
  font-weight: bold;
  padding: 0 5px;
`

const Text = styled.div`
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 4px #0006;
  background: white;
`
