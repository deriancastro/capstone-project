import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import GoalsForm from '../components/GoalsForm'
import Goal from '../components/Goal'
import DeleteButton from '../components/DeleteButton'

GoalsPage.propTypes = {
  pageName: PropTypes.string,
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      isChecked: PropTypes.bool,
    })
  ),
  onCheckGoal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
  toProfile: PropTypes.func.isRequired,
}

export default function GoalsPage({
  pageName,
  goalsList,
  onCheckGoal,
  onSubmit,
  deleteGoal,
  toProfile,
}) {
  return (
    <Wrapper>
      <Header toProfile={toProfile}>{pageName}</Header>
      <GoalsForm onSubmit={onSubmit} />
      <ScrollContainer>
        <List>
          {goalsList.map(({ text, isChecked }, index) => (
            <ListItem key={index + 1}>
              <DeleteButton deleteGoal={deleteGoal} index={index} />
              <Goal
                goalText={text}
                goalNumber={index + 1}
                onCheckGoal={onCheckGoal}
                isChecked={isChecked}
              />
            </ListItem>
          ))}
        </List>
      </ScrollContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px 128px auto;
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
const ListItem = styled.li`
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  gap: 10px;
`
