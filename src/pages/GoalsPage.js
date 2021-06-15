import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import GoalsForm from '../components/GoalsForm'
import Goal from '../components/Goal'

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
  onSubmit: PropTypes.func.isRequired,
}

export default function GoalsPage({
  pageName,
  goalsList,
  onCheckGoal,
  onSubmit,
}) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <GoalsForm onSubmit={onSubmit} />
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
  grid-template-rows: 60px 90px auto;
  height: calc(100vh - 60px);
`
const ScrollContainer = styled.section`
  overflow-y: scroll;
  padding: 10px;
`
const List = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
`
