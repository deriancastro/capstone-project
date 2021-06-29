import { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LoginForm from '../components/LoginForm'
import ProfileForm from '../components/ProfileForm'

HomePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default function HomePage({ onSubmit, onLogin }) {
  const [isRegistered, setisRegIstered] = useState(false)
  return (
    <>
      {!isRegistered && (
        <Wrapper>
          <LoginForm onLogin={onLogin} />
          <LinkButton
            onClick={() => setisRegIstered(!isRegistered)}
            data-testid="modusForm"
          >
            or register
          </LinkButton>
        </Wrapper>
      )}
      {isRegistered && (
        <Wrapper>
          <ProfileForm onSubmit={onSubmit} />
          <LinkButton
            onClick={() => setisRegIstered(!isRegistered)}
            data-testid="modusForm"
          >
            or login
          </LinkButton>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  width: 100vw;
`
const LinkButton = styled.button`
  border: none;
  background: var(--color-primary-background);
  color: var(--color-active-text);
`
