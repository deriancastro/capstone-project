import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Card.propTypes = {
  techName: PropTypes.string,
  url: PropTypes.string,
  onDetail: PropTypes.func.isRequired,
}

export default function Card({ techName, onDetail, url }) {
  return (
    <Wrapper onClick={handleOnDetail} url={url} data-testid="card">
      <Text>{techName}</Text>
    </Wrapper>
  )
  function handleOnDetail() {
    onDetail({ techName, url })
  }
}

const Wrapper = styled.section`
  display: grid;
  align-content: center;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 4px #0006;
  background: white;
`
const Text = styled.h3`
  text-align: center;
`
