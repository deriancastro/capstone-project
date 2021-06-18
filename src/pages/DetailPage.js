import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/youtube'
import Header from '../components/Header'
import Button from '../components/Button'

DetailPage.propTypes = {
  currentTechnique: PropTypes.objectOf(
    PropTypes.shape({
      techName: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  onNavigate: PropTypes.func.isRequired,
}

export default function DetailPage({ onNavigate, currentTechnique }) {
  const { techName, url } = currentTechnique
  return (
    <Wrapper>
      <Header>{techName}</Header>
      <Container data-testid="video">
        <ReactPlayer
          url={url}
          width="100%"
          height="90%"
          config={{
            youtube: { playerVars: { controls: true, showinfo: 1 } },
          }}
        />
      </Container>
      <Nav>
        <DetailButton onClick={onNavigate} color="white">
          back
        </DetailButton>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  height: 100vh;
`
const Nav = styled.nav`
  display: grid;
  box-shadow: 0 -3px 3px #0003;
`
const Container = styled.div`
  display: grid;
  align-items: center;
  padding: 10px;
`

const DetailButton = styled(Button)`
  background: #bf665e;
`
