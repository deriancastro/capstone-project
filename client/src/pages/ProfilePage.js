import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import LogoutButton from '../components/LogoutButton'
import Profile from '../components/Profile'

ProfilePage.propTypes = {
  pageName: PropTypes.string,
  profileInfo: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      fullName: PropTypes.string,
      aboutYou: PropTypes.string,
      image: PropTypes.string,
    })
  ),
  logOut: PropTypes.func.isRequired,
}

export default function ProfilePage({ pageName, profileInfo, logOut }) {
  const { fullName, aboutYou, image } = profileInfo
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <LogoutButton logOut={logOut} />
      <Profile image={image} fullName={fullName} aboutYou={aboutYou} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: calc(100vh - 60px);
`