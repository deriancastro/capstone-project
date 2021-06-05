import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Card from '../components/Card'

TutorialPage.proptype = {
  pageName: PropTypes.string,
  techNamesList: PropTypes.string,
}

export default function TutorialPage({ pageName, techNamesList }) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <Container>
        <List>
          {techNamesList.map(techName => (
            <li key={techName}>
              <Card techName={techName} />
            </li>
          ))}
        </List>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  gap: 3px;
  height: 100vh;
`
const Container = styled.section`
  overflow-y: scroll;
  padding: 10px;
  margin-bottom: 3px;
`
const List = styled.ul`
  display: grid;
  gap: 10px;
  list-style: none;
`
