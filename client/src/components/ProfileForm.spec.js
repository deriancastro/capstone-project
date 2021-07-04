import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileForm from './ProfileForm'

describe('ProfileForm', () => {
  const noop = () => {}
  const handleSubmit = jest.fn()

  it('renders 5 inputs fields and 1 button', () => {
    render(<ProfileForm onSubmit={noop} />)

    const fullNameInput = screen.getByRole('textbox', { name: 'full name:' })
    expect(fullNameInput).toBeInTheDocument()

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    expect(emailInput).toBeInTheDocument()

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    expect(passwordInput).toBeInTheDocument()

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    expect(aboutYouInput).toBeInTheDocument()

    const imageInput = screen.getByTestId('inputImage')
    expect(imageInput).toBeInTheDocument()

    const registerButton = screen.getByRole('button', { name: 'register' })
    expect(registerButton).toBeInTheDocument()
  })

  it('calls handleSubmit correctly by click registerbutton, when full name, about you, email and password fields are not empty - The image is optional(image was not uploaded)', () => {
    render(<ProfileForm onSubmit={handleSubmit} />)

    const fullName = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullName, 'Derian Castro')

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    userEvent.type(emailInput, 'deriancastro@hotmail.com')

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    userEvent.type(passwordInput, '1234')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I like coding and judo')

    const registerButton = screen.getByRole('button', { name: 'register' })
    userEvent.click(registerButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: 'Derian Castro',
      email: 'deriancastro@hotmail.com',
      password: '1234',
      aboutYou: 'I like coding and judo',
      password: '1234',
      image: '',
    })
  })

  it('calls handleSubmit correctly by -enter-, when full name, about you, email and password fields are not empty - The image is optional(image was not uploaded)', () => {
    render(<ProfileForm onSubmit={handleSubmit} />)

    const fullName = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullName, 'Derian Castro')

    const emailInput = screen.getByRole('textbox', { name: 'email:' })
    userEvent.type(emailInput, 'deriancastro@hotmail.com')

    const passwordInput = screen.getByTestId('password', { name: 'password:' })
    userEvent.type(passwordInput, '1234')

    const aboutYouInput = screen.getByRole('textbox', { name: 'about you:' })
    userEvent.type(aboutYouInput, 'I like coding and judo')

    const profileForm = screen.getByRole('form', { name: 'registration form' })
    fireEvent.submit(profileForm)

    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: 'Derian Castro',
      email: 'deriancastro@hotmail.com',
      password: '1234',
      aboutYou: 'I like coding and judo',
      password: '1234',
      image: '',
    })
  })

  it('does not call handleSubmit when one of the inputs is empty with the exception of the imageInput - The image is optional(image was not uploaded)', () => {
    render(<ProfileForm onSubmit={handleSubmit} />)

    const registerButton = screen.getByRole('button', { name: 'register' })
    expect(registerButton).toBeDisabled()

    fireEvent.click(registerButton)

    expect(handleSubmit).toHaveBeenCalledTimes(0)
  })
})
