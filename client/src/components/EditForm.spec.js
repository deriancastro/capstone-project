import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import EditForm from './EditForm'

describe('EditForm', () => {
  const noop = () => {}
  const onEdit = jest.fn()

  it('renders 3 imput fields and 1 button', () => {
    render(<EditForm onEdit={noop} setIsEdited={noop} />)

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    expect(fullNameInput).toBeInTheDocument()

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    expect(aboutYouInput).toBeInTheDocument()

    const imageInput = screen.getByTestId('inputImage')
    expect(imageInput).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: 'save' })
    expect(saveButton).toBeInTheDocument()
  })

  it('calls onEdit correctly by click on  saveButton, when full name and about you fields are not empty - The image is optional(image was not uploaded)', () => {
    render(<EditForm onEdit={onEdit} setIsEdited={noop} />)

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullNameInput, 'Derian Castro')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I am a coder')

    const saveButton = screen.getByRole('button', { name: 'save' })
    userEvent.click(saveButton)

    expect(onEdit).toHaveBeenCalledWith({
      fullName: 'Derian Castro',
      aboutYou: 'I am a coder',
      image: '',
    })
  })

  it('calls onEdit correctly by -enter-, when full name and about you fields are not empty - The image is optional(image was not uploaded)', () => {
    render(<EditForm onEdit={onEdit} setIsEdited={noop} />)

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullNameInput, 'Derian Castro')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I am a coder')

    const editForm = screen.getByRole('form', { name: 'edit form' })
    fireEvent.submit(editForm)

    expect(onEdit).toHaveBeenCalledWith({
      fullName: 'Derian Castro',
      aboutYou: 'I am a coder',
      image: '',
    })
  })

  it('does not call handleSubmit when one of the inputs is empty with the exception of the imageInput - The image is optional(image was not uploaded)', () => {
    render(<EditForm onEdit={onEdit} />)

    const saveButton = screen.getByRole('button', { name: 'save' })
    expect(saveButton).toBeDisabled()

    fireEvent.click(saveButton)

    expect(onEdit).toHaveBeenCalledTimes(0)
  })
})
