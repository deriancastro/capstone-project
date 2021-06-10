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

export default function GoalsPage({ pageName, goalsList, onCheckGoal }) {
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
                onCheckGoal={onCheckGoal}
                isChecked={isChecked}
              />
            </li>
          ))}
        </List>
      </ScrollContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 93vh;
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
