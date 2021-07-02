import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'
import camera from '../assets/camera.png'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

EditForm.propTypes = {
  onEdit: PropTypes.func.isRequired,
  setIsEdited: PropTypes.bool,
}

export default function EditForm({ onEdit, setIsEdited }) {
  const [isActive, setIsActive] = useState(true)
  const [image, setImage] = useState('')

  return (
    <Form
      onSubmit={handleSubmit}
      onChange={validateForm}
      aria-label="edit form"
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
        about you:
        <input
          name="aboutYou"
          type="text"
          placeholder="Do you want to tell us something different?"
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

      <SaveButton disabled={isActive}>save</SaveButton>
    </Form>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const fullName = form.elements.fullName.value
    const aboutYou = form.elements.aboutYou.value

    const editProfile = {
      fullName: fullName,
      aboutYou: aboutYou,
      image: image,
    }

    onEdit(editProfile)
    form.reset()
    event.target.elements.fullName.focus()
    setIsActive(true)
    setIsEdited(false)
  }

  function validateForm(event) {
    const form = event.target.closest('form')
    const inputFullName = form.elements.fullName.value.trim()
    const inputAboutYou = form.elements.aboutYou.value.trim()
    setIsActive(!inputFullName || !inputAboutYou)
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
  gap: 10px;
  background: var(--color-primary-background);

  @media (min-width: 600px) {
    display: grid;
  }
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
  }
`

const Text = styled.p`
  color: white;
  font-weight: bold;
  padding: 0 5px;
  color: var(--color-primary);
`

const ImageContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: 2/3;
    grid-template-rows: 2/3;
  }
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

  @media (min-width: 600px) {
    height: 190px;
    width: 190px;
  }
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

const SaveButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--color-active-background);
  color: var(--color-active);
  margin-top: 16px;
  width: 80%;
  justify-self: center;
`
