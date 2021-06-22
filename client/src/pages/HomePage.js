import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ProfileForm from '../components/ProfileForm'

HomePage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  image: PropTypes.string,
  upload: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
}
//Note: For the moment, this page gives its props to the Profile Form.
export default function HomePage({ onSubmit, image, upload, signIn }) {
  return (
    <Wrapper>
      <div></div>
      <ProfileForm
        onSubmit={onSubmit}
        image={image}
        upload={upload}
        signIn={signIn}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
`
