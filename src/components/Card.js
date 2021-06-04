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
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 6px 10px #0006;
  background: rgba(222, 123, 234, 0.8);
`
const Text = styled.p`
  text-align: center;
  font-size: large;
  font-weight: 600;
  margin: 0;
`
