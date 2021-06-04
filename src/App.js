import styled from 'styled-components/macro'
import Card from './components/Card'
import Header from './components/Header'

export default function App() {
  return (
    <Wrapper>
      <Header>TUTORIAL</Header>
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <Card techName={'Uchimata'} />
      <div>hallo</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  gap: 10px;
  height: 100vh;
  padding: 10px;
`
