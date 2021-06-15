import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import GoalsPage from './pages/GoalsPage'
import profileData from './data/profileData.json'
import techniqueData from './data/techniqueData.json'

export default function App() {
  const [goalsList, setGoalsList] = useState([])
  const [currentTechnique, setCurrentTechnique] = useState({})
  const { push } = useHistory()
  const profileInfo = profileData
  const techniqueList = techniqueData

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <ProfilePage pageName="PROFILE" profileInfo={profileInfo} />
        </Route>
        <Route path="/tutorial">
          <TutorialPage
            pageName="TUTORIAL"
            techniqueList={techniqueList}
            onDetail={showDetailPage}
          />
        </Route>
        <Route path="/detail">
          <DetailPage
            currentTechnique={currentTechnique}
            onNavigate={showTutorialPage}
          />
        </Route>
        <Route path="/goals">
          <GoalsPage
            pageName="GOALS"
            goalsList={goalsList}
            onCheckGoal={handleGoal}
            onSubmit={handleNewGoal}
            deleteGoal={handleDeleteGoal}
          />
        </Route>
      </Switch>

      <Route exact path={['/', '/tutorial', '/goals']}>
        <Navigation
          pages={[
            { title: 'profile', path: '/' },
            { title: 'tutorial', path: '/tutorial' },
            { title: 'goals', path: '/goals' },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function showDetailPage({ techName, url }) {
    setCurrentTechnique({ techName, url })
    push('/detail')
  }

  function showTutorialPage() {
    push('/tutorial')
  }

  function handleGoal(index) {
    const goalToUpdate = goalsList[index]
    setGoalsList([
      ...goalsList.slice(0, index),
      { ...goalToUpdate, isChecked: !goalToUpdate.isChecked },
      ...goalsList.slice(index + 1),
    ])
  }

  function handleNewGoal(newGoal) {
    setGoalsList([newGoal, ...goalsList])
  }

  function handleDeleteGoal(index) {
    const goalToDelete = goalsList[index]
    setGoalsList([...goalsList.slice(0, index), ...goalsList.slice(index + 1)])
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
`
