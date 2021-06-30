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
          <TextBox data-testid="aboutYou">{aboutYou}</TextBox>
        </AboutYouContainer>
      </Wrapper>

      {isEdited && (
        <WrapperEdit>
          <EditForm onEdit={onEdit} setIsEdited={setIsEdited} />
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
  gap: 20px;
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
  right: 10px;
  top: 70px;
  background: #bfa27e;
  padding: 22px 10px;
  border-radius: 8px;
  width: 355px;
  box-shadow: 0 4px 4px #0006;
  background: var(--color-primary-background);

  @media (min-width: 600px) {
    width: 647px;
    right: 10px;
    top: 10px;
  }
`

const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
`
const Image = styled.img`
  border-radius: 50%;
  border: solid var(--color-active-background) 10px;
  height: 200px;
  width: 200px;

  @media (min-width: 600px) {
    height: 190px;
    width: 190px;
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

const TextBox = styled.div`
  padding: 20px;
  width: 355px;
  border-radius: 8px;
  box-shadow: 0 4px 4px #0006;
  background: var(--color-secondary);
  overflow: auto;
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
