
  import {render, screen} from '@testing-library/react'
  import EditForm from './EditForm'
    
  describe('EditForm', () => {
      it('renders', () => {
          render(<EditForm />)
          expect(screen.getByText('EditForm')).toBeInTheDocument()
      })
  })
        