
  import {render, screen} from '@testing-library/react'
  import TutorialPage from './TutorialPage'
    
  describe('TutorialPage', () => {
      it('renders', () => {
          render(<TutorialPage />)
          expect(screen.getByText('TutorialPage')).toBeInTheDocument()
      })
  })
        