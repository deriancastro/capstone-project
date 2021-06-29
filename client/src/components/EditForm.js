import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import axios from 'axios'

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
          <input
            type="file"
            name="file"
            onChange={upload}
            data-testid="inputImage"
          />
        )}
      </ImageContainer>

      <EditButton disabled={isActive}>save</EditButton>
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
    const form = event.target.parentElement.parentElement
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

  @media (min-width: 600px) {
    display: grid;
  }
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

const Text = styled.p`
  color: white;
  font-weight: bold;
  padding: 0 5px;
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

const EditButton = styled(Button)`
  padding: 8px;
  border-radius: 8px;
  font-size: 1rem;
  background: green;
  color: white;
`
