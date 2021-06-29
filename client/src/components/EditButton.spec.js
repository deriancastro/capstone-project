
  import {render, screen} from '@testing-library/react'
  import EditButton from './EditButton'
    
  describe('EditButton', () => {
      it('renders', () => {
          render(<EditButton />)
          expect(screen.getByText('EditButton')).toBeInTheDocument()
      })
  })
        