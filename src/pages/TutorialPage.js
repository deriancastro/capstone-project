import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Card from '../components/Card'

TutorialPage.propTypes = {
  pageName: PropTypes.string,
  techniqueList: PropTypes.array,
  onDetail: PropTypes.func.isRequired,
}

export default function TutorialPage({ pageName, techniqueList, onDetail }) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <ScrollContainer>
        <List>
          {techniqueList.map(techName => (
            <li key={techName}>
              <Card techName={techName} onDetail={() => onDetail(techName)} />
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
`
const List = styled.ul`
  display: grid;
  gap: 20px;
  list-style: none;
`
