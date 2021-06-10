import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Button from '../components/Button'

ProfilePage.propTypes = {
  pageName: PropTypes.string,
  profileInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      text: PropTypes.node,
    })
  ),
  onNavigate: PropTypes.func.isRequired,
}

export default function ProfilePage({ pageName, profileInfo, onNavigate }) {
  console.log(profileInfo)
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <Container>
        <Profile
          image={profileInfo[0].image}
          name={profileInfo[0].name}
          text={profileInfo[0].text}
        />
      </Container>
      <Nav>
        <Button onClick={onNavigate}>toGoals</Button>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 50px;
  gap: 3px;
  height: 100vh;
`
const Container = styled.div``

const Nav = styled.nav`
  display: grid;
  box-shadow: 0 -3px 3px #0003;
`
