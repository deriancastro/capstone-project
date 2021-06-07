import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Button from '../components/Button'
import judo from '../img/judo.jpg'

DetailPage.propTypes = {
  pageName: PropTypes.string,
  toTutorialPage: PropTypes.func.isRequired,
}

export default function DetailPage({ toTutorialPage, pageName }) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <Container>
        <img src={judo}></img>
      </Container>
      <Nav>
        <Button onClick={toTutorialPage}>Back</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 50px;
  height: 100vh;
`
const Nav = styled.nav`
  display: grid;
  box-shadow: 0 -3px 3px #0003;
`
const Container = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 20px;
  }
`
