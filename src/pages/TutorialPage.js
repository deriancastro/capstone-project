import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'

TutorialPage.propTypes = {
  pageName: PropTypes.string,
  techNamesList: PropTypes.array,
  onDetail: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  onNavigate2: PropTypes.func.isRequired,
}

export default function TutorialPage({
  pageName,
  techNamesList,
  onDetail,
  onNavigate,
  onNavigate2,
}) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <ScrollContainer>
        <List>
          {techNamesList.map(techName => (
            <li key={techName}>
              <Card techName={techName} onDetail={() => onDetail(techName)} />
            </li>
          ))}
        </List>
      </ScrollContainer>
      <Nav>
        <Button onClick={onNavigate}>toGoals</Button>
        <Button onClick={onNavigate2}>toProfile</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 50px;
  gap: 3px;
  height: 100vh;
`

const ScrollContainer = styled.section`
  overflow-y: scroll;
  padding: 10px;
`
const List = styled.ul`
  display: grid;
  gap: 10px;
  list-style: none;
`
const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 -3px 3px #0003;
`
