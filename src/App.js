import { useState } from 'react'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import ProfilePage from './pages/ProfilePage'
import GoalsPage from './pages/GoalsPage'
import goalsData from './data/goalsData.json'
import profileData from './data/profileData.json'

export default function App() {
  const [currentPage, setCurrentPage] = useState('tutorialPage')
  const [currentTechName, setCurrentTechName] = useState('')
  const [goalsList, setGoalsList] = useState(goalsData)
  const profileInfo = profileData

  const techNamesList = [
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
    <div>
      {currentPage === 'tutorialPage' && (
        <TutorialPage
          pageName="TUTORIAL"
          techNamesList={techNamesList}
          onDetail={showDetailPage}
          onNavigate={showGoalsPage}
          onNavigate2={showProfilePage}
        />
      )}

      {currentPage === 'detailPage' && (
        <DetailPage pageName={currentTechName} onNavigate={showTutorialPage} />
      )}

      {currentPage === 'goalsPage' && (
        <GoalsPage
          pageName="GOALS"
          goalsList={goalsList}
          onCheckGoal={handleGoal}
          onNavigate={showTutorialPage}
        />
      )}

      {currentPage === 'profilePage' && (
        <ProfilePage
          pageName="PROFILE"
          profileInfo={profileInfo}
          onCheckGoal={handleGoal}
          onNavigate={showTutorialPage}
        />
      )}
    </div>
  )

  function showDetailPage(techName) {
    setCurrentPage('detailPage')
    setCurrentTechName(techName)
  }
  function showTutorialPage() {
    setCurrentPage('tutorialPage')
  }
  function showGoalsPage() {
    setCurrentPage('goalsPage')
  }
  function showProfilePage() {
    setCurrentPage('profilePage')
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
