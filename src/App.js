import { useState } from 'react'
import TutorialPage from './pages/TutorialPage'
import DetailPage from './pages/DetailPage'

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

  return (
    <div>
      {currentPage === 'tutorialPage' && (
        <TutorialPage
          pageName="TUTORIAL"
          techNamesList={techNamesList}
          toDetailPage={handleToDetailPage}
        />
      )}

      {currentPage === 'detailPage' && (
        <DetailPage
          pageName={currentTechName}
          toTutorialPage={handleToTutorialPage}
        />
      )}
    </div>
  )

  function handleToDetailPage(techName) {
    setCurrentPage('detailPage')
    setCurrentTechName(techName)
  }
  function handleToTutorialPage() {
    setCurrentPage('tutorialPage')
  }
}
