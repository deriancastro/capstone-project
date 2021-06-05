import { useState } from 'react'
import TutorialPage from './pages/TutorialPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('tutorialPage')

  const list = [
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
          techNamesList={list}
          toDetailPage={handleToDetailPage}
        />
      )}
    </div>
  )

  function handleToDetailPage() {
    setCurrentPage('detailPage')
  }
}
