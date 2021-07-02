import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'
import camera from '../assets/camera.png'

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
    >
      <Label>
        full name:
        <input
          name="fullName"
          type="text"
          minLength="1"
          maxLength="40"
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
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
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
      <Text>
        photo:
        <small> - optional</small>
      </Text>
      <ImageContainer>
        {image ? (
          <Image src={image} alt="your photo" />
        ) : (
          <>
            <WrapperInput>
              <CameraIcon src={camera} alt="a camera icon" />
              <InputImage
                type="file"
                name="file"
                onChange={upload}
                data-testid="inputImage"
              />
            </WrapperInput>
          </>
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
    console.log(event)
    const form = event.target.closest('form')
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
  color: var(--color-primary);
  font-weight: bold;
  padding: 0 5px;

  input {
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    background: var(--color-secondary);

    :valid {
      background: var(--color-valid);
    }
  }
`

const Text = styled.p`
  color: var(--color-primary);
  font-weight: bold;
  padding: 0 5px;
`

const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;
`
const WrapperInput = styled.div`
  border-radius: 50%;
  border: solid var(--color-active-background) 10px;
  height: 200px;
  width: 200px;
  justify-self: center;
  position: relative;
`

const Image = styled.img`
  border-radius: 50%;
  border: solid var(--color-active-background) 10px;
  height: 200px;
  width: 200px;
  justify-self: center;
`
const CameraIcon = styled.img`
  position: absolute;
  top: 40px;
  right: 40px;
`

const InputImage = styled.input`
  opacity: 0;
  height: 180px;
  width: 180px;
  justify-self: center;
`

const SingUpButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-active-background);
  color: var(--color-active);
  width: 80%;
  justify-self: center;
  margin-top: 10px;
`
