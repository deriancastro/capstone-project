import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileForm from './ProfileForm'

describe('ProfileForm', () => {
  const noop = () => {}
  const imageUrl =
    'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg'

  it('renders 4 inputs fields: 3 type: text and 1 type: password and 1 button', () => {
    render(<ProfileForm onSubmit={noop} />)

    const inputsTypeText = screen.getAllByRole('textbox')
    expect(inputsTypeText).toHaveLength(3)

    const inputsTypePassword = screen.getByTestId('password')
    expect(inputsTypePassword).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  // it('calls handleSubmit correctly by click on sign up button, when full name, about you, email and password fields are not empty', () => {
  //   const handleSubmit = jest.fn()

  //   render(<ProfileForm onSubmit={handleSubmit} />)

  //   const fullName = screen.getByRole('textbox', { name: 'full name:' })
  //   userEvent.type(fullName, 'Derian Castro')

  //   const email = screen.getByRole('textbox', { name: 'email:' })
  //   userEvent.type(fullName, 'deriancastro@hotmail.com')

  //   const password = screen.getByTestId('password')
  //   userEvent.type(password, '1234')

  //   const aboutYou = screen.getByRole('textbox', {
  //     name: 'about you:',
  //   })
  //   userEvent.type(aboutYou, 'I like coding and judo')

  //   const image = screen.getByTestId('inputImage')
  //   fireEvent.input(image, imageUrl)

  //   const singUpButton = screen.getByRole('button', { name: 'sign up' })
  //   userEvent.click(singUpButton)

  //   expect(handleSubmit).toHaveBeenCalledWith({
  //     fullName: 'Derian Castro',
  //     email: 'deriancastro@hotmail.com',
  //     aboutYou: 'I like coding and judo',
  //     password: '1234',
  //   })
  // })

  // it('calls handleSubmit and signIn correctly by -Enter-, when full name and about you fields are not empty', () => {
  //   const handleSubmit = jest.fn()
  //   const TestSingIn = jest.fn()

  //   render(
  //     <ProfileForm onSubmit={handleSubmit} upload={noop} signIn={TestSingIn} />
  //   )

  //   const fullName = screen.getByRole('textbox', { name: 'full name:' })
  //   userEvent.type(fullName, 'Derian Castro')

  //   const aboutYou = screen.getByRole('textbox', {
  //     name: 'about you:',
  //   })
  //   userEvent.type(aboutYou, 'I like coding and judo')

  //   const form = screen.getByRole('form')
  //   fireEvent.submit(form)

  //   expect(handleSubmit).toHaveBeenCalledWith({
  //     id: '123',
  //     fullName: 'Derian Castro',
  //     aboutYou: 'I like coding and judo',
  //   })
  //   expect(TestSingIn).toHaveBeenCalled()
  // })

  // it('does not call handleSubmit and signIn when full name and about you fields are empty', () => {
  //   const handleSubmit = jest.fn()
  //   const singIn = jest.fn()

  //   render(
  //     <ProfileForm onSubmit={handleSubmit} upload={noop} signIn={singIn} />
  //   )

  //   const form = screen.getByRole('form')

  //   const singUpButton = screen.getByRole('button', { name: 'sign up' })
  //   expect(singUpButton).toBeDisabled()

  //   fireEvent.click(singUpButton)

  //   expect(handleSubmit).toHaveBeenCalledTimes(0)
  //   expect(singIn).toHaveBeenCalledTimes(0)
  // })
})
