import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  techName: PropTypes.string,
  onDetail: PropTypes.func.isRequired,
}

export default function Card({ techName, onDetail }) {
  return (
    <Wrapper onClick={onDetail} data-testid="card">
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
