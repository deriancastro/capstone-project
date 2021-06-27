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
  const [entryForm, setEntryForm] = useState(false)
  return (
    <>
      {!entryForm && (
        <Wrapper>
          <LoginForm onLogin={onLogin} />
          <span
            onClick={() => setEntryForm(!entryForm)}
            data-testid="modusForm"
          >
            or registrate
          </span>
        </Wrapper>
      )}
      {entryForm && (
        <Wrapper>
          <ProfileForm onSubmit={onSubmit} />
          <span
            onClick={() => setEntryForm(!entryForm)}
            data-testid="modusForm"
          >
            or log in
          </span>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  justify-items: center;
  width: 100vw;
`
