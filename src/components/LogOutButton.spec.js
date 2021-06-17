
  import {render, screen} from '@testing-library/react'
  import LogOutButton from './LogOutButton'
    
  describe('LogOutButton', () => {
      it('renders', () => {
          render(<LogOutButton />)
          expect(screen.getByText('LogOutButton')).toBeInTheDocument()
      })
  })
        