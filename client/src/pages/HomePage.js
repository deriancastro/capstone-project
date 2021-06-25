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
          <span onClick={() => setEntryForm(!entryForm)}>or sing up</span>
        </Wrapper>
      )}
      {entryForm && (
        <Wrapper>
          <ProfileForm onSubmit={onSubmit} />
          <span onClick={() => setEntryForm(!entryForm)}>or sign in</span>
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  justify-items: center;

  span {
    margin: 0;
    padding: 0;
  }
`
