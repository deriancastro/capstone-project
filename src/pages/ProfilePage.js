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
}

export default function ProfilePage({ pageName, profileInfo }) {
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 93vh;
`
const Container = styled.div`
  background: white;
`
