import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LogoButton from './LogoButton'

Header.propTypes = {
  children: PropTypes.node,
  toProfile: PropTypes.func.isRequired,
}

export default function Header({ children, toProfile }) {
  return (
    <Wrapper>
      <LogoButton toProfile={toProfile} />
      <Title>{children}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.section``

const Title = styled.h2`
  background: #333;
  color: var(--color-active-text);
  padding: 10px;
  text-align: center;
  letter-spacing: 0.2rem;
`
