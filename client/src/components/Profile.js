import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import EditForm from './EditForm'
import Button from './Button'
import EditButton from './EditButton'

Profile.propTypes = {
  image: PropTypes.string,
  fullName: PropTypes.string.isRequired,
  aboutYou: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default function Profile({ image, fullName, aboutYou, onEdit }) {
  const [isEdited, setIsEdited] = useState(false)

  return (
    <>
      <Wrapper data-testid="profile">
        <ImageContainer>
          <Image src={image} alt="" />
          <Name data-testid="name">{fullName}</Name>
        </ImageContainer>
        <AboutYouContainer>
          <WrapperText>
            <Text>about me: </Text>
            <EditButton onClick={() => setIsEdited(!isEdited)} />
          </WrapperText>
          <TextBox data-testid="aboutYou" value={aboutYou} readOnly></TextBox>
        </AboutYouContainer>
      </Wrapper>

      {isEdited && (
        <WrapperEdit>
          <EditForm
            onEdit={onEdit}
            setIsEdited={setIsEdited}
            fullNameToEdit={fullName}
            aboutYouToEdit={aboutYou}
            imageToEdit={image}
          />
          <CancelButton onClick={() => setIsEdited(!isEdited)}>
            cancel
          </CancelButton>
        </WrapperEdit>
      )}
    </>
  )
}

const Wrapper = styled.section`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  height: calc(100vh - 120px);
  background: var(--color-primary-background);
  position: relative;
  padding: 10px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
  }
`

const WrapperEdit = styled.section`
  display: grid;
  gap: 10px;
  position: absolute;
  top: 60px;
  background: #bfa27e;
  padding: 30px 10px;
  border-radius: 8px;
  width: 100vw;
  box-shadow: 0 4px 4px #0006;
  background: var(--color-primary-background);
`

const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
  padding: 10px;
`
const Image = styled.img`
  border-radius: 50%;
  border: solid var(--color-active-background) 10px;
  height: 200px;
  width: 200px;
  //Iphone 6/7/8 - Samsung s9
  @media (max-width: 670px) {
    height: 200px;
    width: 200px;
  }
  //Iphone 6/7/8 - rotate
  @media (max-height: 400px) {
    height: 170px;
    width: 170px;
  }
  //Samsung s9 - rotate
  @media (min-width: 738px) {
    height: 160px;
    width: 160px;
  }

  //Iphone XR
  @media (min-height: 730px) {
    height: 250px;
    width: 250px;
  }
  //Iphone X/XS - rotate
  @media (min-width: 810px) {
    height: 180px;
    width: 180px;
  }
  //Iphone XR - rotate
  @media (min-width: 815px) {
    height: 210px;
    width: 210px;
  }
`
const Name = styled.p`
  text-align: center;
  color: var(--color-primary);
  font-style: italic;
`
const AboutYouContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`
const WrapperText = styled.div`
  display: flex;
  height: min-content;
  justify-content: space-between;
`

const Text = styled.p`
  color: var(--color-primary);
  font-weight: bold;
  padding: 0 5px;
`

const TextBox = styled.textarea`
  display: flex;
  padding: 20px;
  width: 355px;
  border-radius: 8px;
  box-shadow: 0 4px 4px #0006;
  background: var(--color-secondary);
  overflow-y: scroll;
  font-family: Roboto, sans-serif;

  //samsung s9
  @media (max-width: 370px) {
    width: 340px;
  }
  //Iphone XR
  @media (min-width: 400px) {
    width: 394px;
  }
  //Iphone XR - rotate
  @media (min-width: 800px) {
    width: 438px;
  }
`
const CancelButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-danger);
  color: var(--color-primary-text);
  width: 80%;
  justify-self: center;
`
