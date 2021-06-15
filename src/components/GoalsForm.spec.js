
  import {render, screen} from '@testing-library/react'
  import Form from './Form'
    
  describe('Form', () => {
      it('renders', () => {
          render(<Form />)
          expect(screen.getByText('Form')).toBeInTheDocument()
      })
  })
        