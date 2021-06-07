import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  techName: PropTypes.string,
  onNavigate: PropTypes.func,
}

export default function Card({ techName, onNavigate }) {
  return (
    <Wrapper onClick={onNavigate} data-testid="card">
      <Text>{techName}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-content: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px #0006;
  background: white;
`
const Text = styled.h3`
  text-align: center;
`
