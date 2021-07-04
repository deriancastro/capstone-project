import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
import ProfileForm from '../components/ProfileForm'
import logo from '../assets/logo.svg'
import image from '../assets/otoshi.png'

HomePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default function HomePage({ onSubmit, onLogin }) {
  const [isRegistered, setisRegIstered] = useState(false)
  return (
    <>
      {!isRegistered && (
        <WrapperLogin>
          <Logo src={logo} alt="Juteam logo" />
          <Image src={image} alt="a judo technique"></Image>
          <LoginForm onLogin={onLogin} />
          <LinkButton
            onClick={() => setisRegIstered(!isRegistered)}
            data-testid="modusForm"
          >
            or register
          </LinkButton>
        </WrapperLogin>
      )}
      {isRegistered && (
        <WrapperRegister>
          <ProfileForm onSubmit={onSubmit} />
          <LinkButton
            onClick={() => setisRegIstered(!isRegistered)}
            data-testid="modusForm"
          >
            or login
          </LinkButton>
        </WrapperRegister>
      )}
    </>
  )
}

const WrapperLogin = styled.div`
  display: grid;
  grid-template-rows: 60px 330px min-content min-content;
  justify-items: center;
  width: 100vw;
`

const WrapperRegister = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  width: 100vw;
`
const Logo = styled.img``

const Image = styled.img`
  margin-top: 70px;
`
const LinkButton = styled.button`
  border: none;
  background: var(--color-primary-background);
  color: var(--color-active-text);
`
