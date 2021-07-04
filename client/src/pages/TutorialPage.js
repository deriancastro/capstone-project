import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Card from '../components/Card'
import uchimata from '../assets/uchimata2.png'

TutorialPage.propTypes = {
  pageName: PropTypes.string,
  techniqueList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      url: PropTypes.string,
    })
  ),
  onDetail: PropTypes.func.isRequired,
  toProfile: PropTypes.func.isRequired,
}

export default function TutorialPage({
  pageName,
  techniqueList,
  onDetail,
  toProfile,
}) {
  return (
    <Wrapper>
      <Header toProfile={toProfile}>{pageName}</Header>
      <ScrollContainer>
        <List>
          {techniqueList.map(({ name, id, url }) => (
            <li key={id}>
              <Card techName={name} url={url} onDetail={onDetail} />
            </li>
          ))}
        </List>
      </ScrollContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: calc(100vh - 60px);
`

const ScrollContainer = styled.section`
  overflow-y: scroll;
  padding: 10px;
  background: center / cover no-repeat url(${uchimata});
`
const List = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
`
