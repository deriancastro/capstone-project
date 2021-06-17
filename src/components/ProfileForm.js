import styled from 'styled-components/macro'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import Button from './Button'

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.string,
  upload: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
}

export default function ProfileForm({ onSubmit, image, upload, signIn }) {
  const [isActive, setIsActive] = useState(true)

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="registration form"
      role="form"
    >
      <Label>
        your full name:
        <input name="fullName" type="text" placeholder="e.g John Doe" />
      </Label>
      <Label>
        about you:
        <small> - optional</small>
        <input
          name="aboutYou"
          type="textarea"
          placeholder="what do you want others to know about you?"
        />
      </Label>
      <Label>
        your photo:
        <small> - optional</small>
      </Label>
      <ImageContainer>
        {image ? (
          <Image src={image} alt="" />
        ) : (
          <input type="file" name="file" onChange={upload} />
        )}
      </ImageContainer>
      <SingUpButton disabled={isActive}>sign up</SingUpButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const fullName = form.elements.fullName.value
    const aboutYou = form.elements.aboutYou.value

    const newProfile = {
      id: uuidv4(),
      fullName: fullName,
      aboutYou: aboutYou,
    }

    onSubmit(newProfile)
    signIn()
    form.reset()
    event.target.elements.fullName.focus()
    setIsActive(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputFullName = form.elements.fullName.value.trim()
    setIsActive(inputFullName ? false : true)
  }
}

const Form = styled.form`
  padding: 20px 10px;
  display: grid;
  height: min-content;
  gap: 10px;
`
const Label = styled.label`
  color: white;
  font-weight: bold;

  input {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
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
  justify-self: center;

  @media (min-width: 600px) {
    height: 190px;
    width: 190px;
  }
`
const SingUpButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  background: green;
  color: white;
`
