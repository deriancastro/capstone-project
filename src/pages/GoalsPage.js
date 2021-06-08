import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Goal from '../components/Goal'
import Button from '../components/Button'

GoalsPage.propTypes = {
  pageName: PropTypes.string,
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  onCheckGoal: PropTypes.func,
  onNavigate: PropTypes.func.isRequired,
}

export default function GoalsPage({
  pageName,
  goalsList,
  onCheckGoal,
  onNavigate,
}) {
  console.log(goalsList)
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <ScrollContainer>
        <List>
          {goalsList.map(({ text, id, isChecked }, index) => (
            <li key={id}>
              <Goal
                goalText={text}
                goalNumber={index + 1}
                isChecked={isChecked}
                onCheckGoal={onCheckGoal}
              />
            </li>
          ))}
        </List>
      </ScrollContainer>
      <Nav>
        <Button onClick={onNavigate}>back</Button>
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
  box-shadow: 0 -3px 3px #0003;
`
