import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useLocalStorage from './lib/useLocalStorage'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import GoalsPage from './pages/GoalsPage'
import techniqueData from './data/techniqueData.json'
import postUser from './services/postUser'
import postGoal from './services/postGoal'
import getUser from './services/getUser'
import deleteGoal from './services/deleteGoal'
import patchGoal from './services/patchGoal'

export default function App() {
  const [profile, setProfile] = useLocalStorage('profile', {})
  const [userId, setUserId] = useLocalStorage('userId', null)
  const [goalsList, setGoalsList] = useState([])
  const [currentTechnique, setCurrentTechnique] = useState({})
  const { push } = useHistory()
  const techniqueList = techniqueData

  useEffect(() => {
    userId &&
      fetch('/api/users/' + userId)
        .then(res => res.json())
        .then(profile => setProfile(profile))
        .catch(error => console.log(error))
  }, [userId])

  useEffect(() => {
    userId &&
      fetch('/api/goals/' + userId)
        .then(res => res.json())
        .then(goalsList => setGoalsList(goalsList))
        .catch(error => console.log(error))
  }, [userId])

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage onSubmit={handleSubmit} onLogin={handleOnLogin}></HomePage>
          {!!userId && <Redirect to="/profile" />}
        </Route>
        <Route path="/profile">
          <ProfilePage
            pageName="PROFILE"
            profileInfo={profile}
            logOut={handleLogOut}
          />
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
            onCheckGoal={handleCheckedGoal}
            onSubmit={handleNewGoal}
            deleteGoal={handleDeleteGoal}
          />
        </Route>
      </Switch>

      <Route exact path={['/profile', '/tutorial', '/goals']}>
        <Navigation
          pages={[
            { title: 'profile', path: '/profile' },
            { title: 'tutorial', path: '/tutorial' },
            { title: 'goals', path: '/goals' },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function handleSubmit(newProfile) {
    postUser(newProfile)
      .then(user => {
        setProfile(user)
        setUserId(user._id)
        push('/profile')
      })
      .catch(error => console.error(error))
  }

  function handleOnLogin(logProfile) {
    getUser(logProfile)
      .then(user => {
        setProfile(...user)
        const logUser = [...user]
        setUserId(logUser[0]._id)
        push('/profile')
      })
      .catch(error => console.error(error))
  }

  function handleLogOut() {
    setUserId(null)
    setGoalsList([])
    setProfile(null)
    push('/')
  }

  function showDetailPage({ currentTechname, currentUrl }) {
    setCurrentTechnique({ currentTechname, currentUrl })
    push('/detail')
  }

  function showTutorialPage() {
    push('/tutorial')
  }

  function handleCheckedGoal(index) {
    const goalToUpdate = goalsList[index]
    const goalIdToUpdate = goalToUpdate._id

    patchGoal(goalIdToUpdate, goalToUpdate)
      .catch(error => console.log(error))
      .finally(() => {
        fetch('/api/goals/' + userId)
          .then(res => res.json())
          .then(goalsList => setGoalsList(goalsList))
          .catch(error => console.log(error))
      })
  }

  function handleNewGoal(newGoal) {
    postGoal({ ...newGoal, author: userId }).then(goal => {
      setGoalsList([goal, ...goalsList])
    })
  }

  function handleDeleteGoal(index) {
    const goalToDelete = goalsList[index]
    const goalIdToDelete = goalToDelete._id
    deleteGoal(goalIdToDelete).then(
      setGoalsList([
        ...goalsList.slice(0, index),
        ...goalsList.slice(index + 1),
      ])
    )
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
`
