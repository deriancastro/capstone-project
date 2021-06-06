import TutorialPage from './pages/TutorialPage'

export default function App() {
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
      <TutorialPage pageName="TUTORIAL" techNamesList={techNamesList} />
    </div>
  )
}
