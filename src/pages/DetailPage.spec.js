
  import {render, screen} from '@testing-library/react'
  import DetailPage from './DetailPage'
    
  describe('DetailPage', () => {
      it('renders', () => {
          render(<DetailPage />)
          expect(screen.getByText('DetailPage')).toBeInTheDocument()
      })
  })
        