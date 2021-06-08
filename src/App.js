import { useState } from 'react'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'
import GoalsPage from './pages/GoalsPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('tutorialPage')
  const [currentTechName, setCurrentTechName] = useState('')

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

  const goalsList = [
    { text: 'Improve the performance of my left uchimata' },
    { text: 'See the yoko tomoe tutorial' },
    { text: 'Ask the trainer about the next competition' },
    { text: 'Check my weigth every 2 days' },
    { text: 'Do the strength plan for the week' },
    { text: 'Improve the performance of my left uchimata' },
    { text: 'See the yoko tomoe tutorial' },
    { text: 'Ask the trainer about the next competition' },
    { text: 'Check my weigth every 2 days' },
    { text: 'Do the strength plan for the week' },
    { text: 'Improve the performance of my left uchimata' },
    { text: 'See the yoko tomoe tutorial' },
    { text: 'Ask the trainer about the next competition' },
    { text: 'Check my weigth every 2 days' },
    { text: 'Do the strength plan for the week' },
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
          isChecked={handleIsChecked}
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
  function handleIsChecked() {
    return console.log('The data will save in Localstorage')
  }
}
