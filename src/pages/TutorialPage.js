import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Card from '../components/Card'
import Button from '../components/Button'

TutorialPage.propTypes = {
  pageName: PropTypes.string,
  techNamesList: PropTypes.array,
  onDetail: PropTypes.func.isRequired,
}

export default function TutorialPage({ pageName, techNamesList, onDetail }) {
  return (
    <Wrapper>
      <Header>{pageName}</Header>
      <ScrollContainer>
        <List>
          {techNamesList.map(techName => (
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
  height: 93vh;
`

const ScrollContainer = styled.section`
  overflow-y: scroll;
  padding: 10px;
`
const List = styled.ul`
  display: grid;
  gap: 10px;
  list-style: none;
`
