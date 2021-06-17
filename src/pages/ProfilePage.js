import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import LogOutButton from '../components/LogOutButton'
import Profile from '../components/Profile'

ProfilePage.propTypes = {
  pageName: PropTypes.string,
  profileInfo: PropTypes.arrayOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      aboutYou: PropTypes.string,
      image: PropTypes.string,
      logOut: PropTypes.func.isRequired,
    })
  ),
}

export default function ProfilePage({ pageName, profileInfo, logOut }) {
  const { fullName, aboutYou, image } = profileInfo
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <LogOutButton logOut={logOut} />
      <Profile image={image} fullName={fullName} aboutYou={aboutYou} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: calc(100vh - 60px);
`
