import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditForm from './EditForm'

describe('EditForm', () => {
  const noop = () => {}
  const onEdit = jest.fn()
  const imageToEdit =
    'https://res.cloudinary.com/did6rcsck/image/upload/v1625336818/derian-action_vysrkf.jpg'
  const aboutYouToEdit = 'I am being updated'
  const fullNameToEdit = 'Derian Castro Giraldo'

  it('renders 3 imput fields and 1 button', () => {
    render(
      <EditForm
        onEdit={noop}
        imageToEdit={imageToEdit}
        aboutYouToEdit={aboutYouToEdit}
        fullNameToEdit={fullNameToEdit}
        setIsEdited={noop}
      />
    )

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    expect(fullNameInput).toBeInTheDocument()

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    expect(aboutYouInput).toBeInTheDocument()

    const imageInput = screen.getByTestId('inputImage')
    expect(imageInput).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: 'save' })
    expect(saveButton).toBeInTheDocument()
  })

  it(' calls onEdit correctly by click on saveButton when at least one of the input fields has been edited (the default values are those of the current profile)', () => {
    render(
      <EditForm
        onEdit={onEdit}
        imageToEdit={imageToEdit}
        aboutYouToEdit={aboutYouToEdit}
        fullNameToEdit={fullNameToEdit}
        setIsEdited={noop}
      />
    )

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullNameInput, 'Derian Castro')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I am a coder')

    const saveButton = screen.getByRole('button', { name: 'save' })
    userEvent.click(saveButton)

    expect(onEdit).toHaveBeenCalledWith({
      aboutYou: 'I am being updatedI am a coder',
      fullName: 'Derian Castro GiraldoDerian Castro',
      image:
        'https://res.cloudinary.com/did6rcsck/image/upload/v1625336818/derian-action_vysrkf.jpg',
    })
  })

  it(' calls onEdit correctly by -enter- when at least one of the input fields has been edited (the default values are those of the current profile)', () => {
    render(
      <EditForm
        onEdit={onEdit}
        imageToEdit={imageToEdit}
        aboutYouToEdit={aboutYouToEdit}
        fullNameToEdit={fullNameToEdit}
        setIsEdited={noop}
      />
    )

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullNameInput, 'Derian Castro')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I am a coder')

    const editForm = screen.getByRole('form', { name: 'edit form' })
    fireEvent.submit(editForm)

    expect(onEdit).toHaveBeenCalledWith({
      aboutYou: 'I am being updatedI am a coder',
      fullName: 'Derian Castro GiraldoDerian Castro',
      image:
        'https://res.cloudinary.com/did6rcsck/image/upload/v1625336818/derian-action_vysrkf.jpg',
    })
  })

  it('does not call handleSubmit when at least one of the input fields has not been edited (the default values are those of the current profile)', () => {
    render(
      <EditForm
        onEdit={onEdit}
        imageToEdit={imageToEdit}
        aboutYouToEdit={aboutYouToEdit}
        fullNameToEdit={fullNameToEdit}
        setIsEdited={noop}
      />
    )

    const saveButton = screen.getByRole('button', { name: 'save' })
    expect(saveButton).toBeDisabled()

    fireEvent.click(saveButton)

    expect(onEdit).toHaveBeenCalledTimes(0)
  })
})
