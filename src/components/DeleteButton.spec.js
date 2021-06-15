
  import {render, screen} from '@testing-library/react'
  import DeleteButton from './DeleteButton'
    
  describe('DeleteButton', () => {
      it('renders', () => {
          render(<DeleteButton />)
          expect(screen.getByText('DeleteButton')).toBeInTheDocument()
      })
  })
        