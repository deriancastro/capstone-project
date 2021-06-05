import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  techName: PropTypes.string,
}

export default function Card({ techName }) {
  return (
    <Wrapper>
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
const Text = styled.p`
  text-align: center;
  font-weight: 600;
`
