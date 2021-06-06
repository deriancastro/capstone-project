import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  techName: PropTypes.string,
  toDetail: PropTypes.func.isRequired,
}

export default function Card({ techName, toDetail }) {
  return (
    <CardWrapper onClick={toDetail}>
      <Text>{techName}</Text>
    </CardWrapper>
  )
}

const CardWrapper = styled.section`
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
