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
    <PageWrapper>
      <Header>{pageName}</Header>
      <Container>
        <img src={judo}></img>
      </Container>
      <Nav>
        <Button onClick={toTutorialPage} isActive={false}>
          Back
        </Button>
      </Nav>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 50px;
  height: 100vh;
`
const Nav = styled.nav`
  display: grid;
  box-shadow: 3px #0003;
`
const Container = styled.section`
  display: grid;
  align-content: center;
  margin: 0 auto;

  img {
    border-radius: 20px;
  }
`
