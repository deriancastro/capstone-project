import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import GoalsPage from './pages/GoalsPage'
import goalsData from './data/goalsData.json'
import profileData from './data/profileData.json'

export default function App() {
  const [currentTechnique, setCurrentTechnique] = useState('')
  const [goalsList, setGoalsList] = useState(goalsData)
  const { push } = useHistory()
  const profileInfo = profileData

  const techniqueList = [
    'Uchimata',
    'Harai goshi',
    'Seoi nage',
    'Ko uchi gari',
    'O soto gari',
    'Kubi nage',
    'Yoko tomoe',
    'Kata guruma',
  ]

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
            pageName={currentTechnique}
            onNavigate={showTutorialPage}
          />
        </Route>
        <Route path="/goals">
          <GoalsPage
            pageName="GOALS"
            goalsList={goalsList}
            onCheckGoal={handleGoal}
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

  function showDetailPage(techName) {
    setCurrentTechnique(techName)
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
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 56px;
  height: 100vh;
`
