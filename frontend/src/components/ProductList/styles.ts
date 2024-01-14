import styled from 'styled-components'

export const Container = styled.div`
  padding: 42px 0;
  z-index: 1;
  margin-top: 40px;
`
export const Title = styled.h2`
  font-size: 36px;
  transform: uppercase;
  text-align: center;
`
export const Description = styled.p`
  display: block;
  width: 100%;
  max-width: 680px;
  margin: 12px auto 24px auto;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 36px;
  margin: 40px 0 40px;
`
