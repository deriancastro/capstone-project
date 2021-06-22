import { Switch, Route, useHistory } from 'react-router-dom'
import { useState } from 'react'
import useLocalStorage from './lib/useLocalStorage'
import axios from 'axios'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import GoalsPage from './pages/GoalsPage'
import techniqueData from './data/techniqueData.json'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function App() {
  const [image, setImage] = useState('')
  const [profile, setProfile] = useLocalStorage('profile', {})
  const [goalsList, setGoalsList] = useLocalStorage('goals', [])
  const [currentTechnique, setCurrentTechnique] = useState({})
  const { push } = useHistory()
  const techniqueList = techniqueData

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <HomePage
            onSubmit={handleSubmit}
            image={image}
            upload={upload}
            signIn={handleSignIn}
          ></HomePage>
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
            onCheckGoal={handleGoal}
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

  function handleSignIn() {
    push('/profile')
  }

  function handleSubmit(newProfile) {
    setProfile({ ...newProfile, ...profile })
  }

  function showDetailPage({ currentTechname, currentUrl }) {
    setCurrentTechnique({ currentTechname, currentUrl })
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
    setGoalsList([...goalsList.slice(0, index), ...goalsList.slice(index + 1)])
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
    setProfile({ ...profile, image: response.data.url })
  }

  function handleLogOut() {
    push('/')
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
`
