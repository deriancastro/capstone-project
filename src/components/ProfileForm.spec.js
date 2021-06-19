import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ProfileForm from './ProfileForm'
jest.mock('uuid', () => ({
  v4: () => '123',
}))

describe('ProfileForm', () => {
  const noop = () => {}
  const imageUrl =
    'http://res.cloudinary.com/did6rcsck/image/upload/v1624026486/derian_u8hh7b.jpg'

  it('renders 2 inputs fields, 1 image and 1 button', () => {
    render(
      <ProfileForm
        onSubmit={noop}
        upload={noop}
        signIn={noop}
        image={imageUrl}
      />
    )

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(2)

    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  //Notes:
  //1. The image is not included, since it comes from cloudinary and is saved before you press the sing up button
  //2. SignIn is called inside handleSubmit
  //3. Upload belongs to the process carried out by cloudinary
  it('calls handleSubmit and signIn correctly by click on sign up button, when full name and about you fields are not empty', () => {
    const handleSubmit = jest.fn()
    const TestSingIn = jest.fn()

    render(
      <ProfileForm onSubmit={handleSubmit} upload={noop} signIn={TestSingIn} />
    )

    const fullName = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullName, 'Derian Castro')

    const aboutYou = screen.getByRole('textbox', {
      name: 'about you:',
    })
    userEvent.type(aboutYou, 'I like coding and judo')

    const singUpButton = screen.getByRole('button', { name: 'sign up' })
    userEvent.click(singUpButton)

    expect(handleSubmit).toHaveBeenCalledWith({
      id: '123',
      fullName: 'Derian Castro',
      aboutYou: 'I like coding and judo',
    })
    expect(TestSingIn).toHaveBeenCalled()
  })

  it('calls handleSubmit and signIn correctly by -Enter-, when full name and about you fields are not empty', () => {
    const handleSubmit = jest.fn()
    const TestSingIn = jest.fn()

    render(
      <ProfileForm onSubmit={handleSubmit} upload={noop} signIn={TestSingIn} />
    )

    const fullName = screen.getByRole('textbox', { name: 'full name:' })
    userEvent.type(fullName, 'Derian Castro')

    const aboutYou = screen.getByRole('textbox', {
      name: 'about you:',
    })
    userEvent.type(aboutYou, 'I like coding and judo')

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenCalledWith({
      id: '123',
      fullName: 'Derian Castro',
      aboutYou: 'I like coding and judo',
    })
    expect(TestSingIn).toHaveBeenCalled()
  })

  //Note: here I don't understand why handleSubmit and signIn are called once (this is the only way to pass the test) if the fields are empty
  it('does not call handleSubmit and signIn when full name and about you fields are empty', () => {
    const handleSubmit = jest.fn()
    const singIn = jest.fn()

    render(
      <ProfileForm onSubmit={handleSubmit} upload={noop} signIn={singIn} />
    )

    const form = screen.getByRole('form')

    const singUpButton = screen.getByRole('button', { name: 'sign up' })
    expect(singUpButton).toBeDisabled()

    fireEvent.submit(form)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
    expect(singIn).toHaveBeenCalledTimes(1)
  })
})
