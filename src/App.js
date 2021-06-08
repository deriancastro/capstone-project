import { useState } from 'react'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import GoalsPage from './pages/GoalsPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('tutorialPage')
  const [currentTechName, setCurrentTechName] = useState('')

  const goalsList = require('./data/goalsList.json')

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
        />
      )}

      {currentPage === 'detailPage' && (
        <DetailPage pageName={currentTechName} onNavigate={showTutorialPage} />
      )}

      {currentPage === 'goalsPage' && (
        <GoalsPage
          pageName="GOALS"
          goalsList={goalsList}
          onCheckGoal={handleOnCheckGoal}
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
  function handleOnCheckGoal() {
    return console.log('The data will save in Localstorage')
  }
}
