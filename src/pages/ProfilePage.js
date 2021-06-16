import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Profile from '../components/Profile'

ProfilePage.propTypes = {
  pageName: PropTypes.string,
  profileInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.node,
    })
  ),
  image: PropTypes.string,
  upload: PropTypes.func.isRequired,
}

export default function ProfilePage({ pageName, profileInfo, image, upload }) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <Profile
        image={image}
        upload={upload}
        name={profileInfo[0].name}
        text={profileInfo[0].text}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: calc(100vh - 60px);
`
