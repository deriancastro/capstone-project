
  import {render, screen} from '@testing-library/react'
  import AddButton from './AddButton'
    
  describe('AddButton', () => {
      it('renders', () => {
          render(<AddButton />)
          expect(screen.getByText('AddButton')).toBeInTheDocument()
      })
  })
        