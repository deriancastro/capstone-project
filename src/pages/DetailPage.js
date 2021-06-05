import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Button from '../components/Button'

DetailPage.propTypes = {
  pageName: PropTypes.string,
  toTutorialPage: PropTypes.func.isRequired,
}

export default function DetailPage({ toTutorialPage, pageName }) {
  return (
    <PageWrapper>
      <Header>{pageName}</Header>
      <div></div>
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
  grid-template-rows: 60px auto 40px;
  gap: 3px;
  height: 100vh;
`
const Nav = styled.nav`
  display: grid;
  box-shadow: 3px #0003;
`
