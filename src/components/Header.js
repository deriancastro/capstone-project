import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Header.propTypes = {
  children: PropTypes.node,
}

export default function Header({ children }) {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  )
}

const Title = styled.h2`
  text-align: center;
  margin: 0;
`
const Wrapper = styled.section`
  display: grid;
  background: papayawhip;
  padding: 10px;
`
