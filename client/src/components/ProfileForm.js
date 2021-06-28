import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function ProfileForm({ onSubmit }) {
  const [isActive, setIsActive] = useState(true)
  const [image, setImage] = useState('')

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="registration form"
      role="form"
    >
      <Label>
        full name:
        <input
          name="fullName"
          type="text"
          placeholder="e.g John Doe"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        email:
        <input
          name="email"
          type="text"
          placeholder="e.g johndoe@web.de"
          pattern="^(.+)@(.+)$"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        password:
        <input
          name="password"
          type="password"
          placeholder="minimum of 4 characters"
          minLength="4"
          autoComplete="off"
          required
          data-testid="password"
        />
      </Label>
      <Label>
        about you:
        <input
          name="aboutYou"
          type="text"
          placeholder="what do you want others to know about you?"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        photo:
        <small> - optional</small>
      </Label>
      <ImageContainer>
        {image ? (
          <Image src={image} alt="your photo" />
        ) : (
          <input
            type="file"
            name="file"
            onChange={upload}
            data-testid="inputImage"
          />
        )}
      </ImageContainer>
      <SingUpButton disabled={isActive}>register</SingUpButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const fullName = form.elements.fullName.value
    const email = form.elements.email.value
    const password = form.elements.password.value
    const aboutYou = form.elements.aboutYou.value

    const newProfile = {
      fullName: fullName,
      email: email,
      password: password,
      aboutYou: aboutYou,
      image: image,
    }

    onSubmit(newProfile)
    form.reset()
    event.target.elements.fullName.focus()
    setIsActive(true)
  }

  function validateForm(event) {
    const form = event.target.parentElement.parentElement
    const inputFullName = form.elements.fullName.value.trim()
    const inputEmail = form.elements.email.value.trim()
    const inputPassword = form.elements.password.value.trim()
    const inputAboutYou = form.elements.aboutYou.value.trim()
    setIsActive(
      !inputFullName || !inputAboutYou || !inputEmail || !inputPassword
    )
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(res => setImage(res.data.url))
      .catch(err => console.error(err))
  }
}

const Form = styled.form`
  display: grid;
  height: min-content;
  width: 100vw;
  padding: 10px;
  gap: 10px;
`
const Label = styled.label`
  color: white;
  font-weight: bold;
  padding: 0 5px;

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
