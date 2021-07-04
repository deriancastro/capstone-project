import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'
import camera from '../assets/camera2.png'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

EditForm.propTypes = {
  imageToEdit: PropTypes.string,
  fullNameToEdit: PropTypes.string.isRequired,
  aboutYouToEdit: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  setIsEdited: PropTypes.func,
}

export default function EditForm({
  onEdit,
  setIsEdited,
  imageToEdit,
  fullNameToEdit,
  aboutYouToEdit,
}) {
  const [isActive, setIsActive] = useState(true)
  const [image, setImage] = useState(imageToEdit)

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
          minLength="1"
          maxLength="40"
          placeholder="e.g John Doe"
          autoComplete="off"
          defaultValue={fullNameToEdit}
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
          defaultValue={aboutYouToEdit}
          required
        />
      </Label>

      <Text>
        photo:
        <small> - optional</small>
      </Text>
      <ImageContainer>
        <Image src={image} alt="" />

        <WrapperInput>
          <CameraIcon src={camera} alt="a camera icon" />
          <InputImage
            type="file"
            name="file"
            onChange={upload}
            data-testid="inputImage"
          />
        </WrapperInput>
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
    setIsActive()
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
  justify-items: center;
  position: relative;
  height: 200px;
`
const WrapperInput = styled.div`
  border-radius: 50%;
  border: solid var(--color-active-background) 10px;
  height: 200px;
  width: 200px;
  justify-self: center;
  position: absolute;
  top: -200px;
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
  top: 130px;
  right: -5px;
  background: var(--color-active-background);
  border-radius: 50%;
  padding: 5px;
`

const InputImage = styled.input`
  opacity: 0;
  height: 60px;
  width: 50px;
  position: absolute;
  top: 130px;
  right: 0;
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
