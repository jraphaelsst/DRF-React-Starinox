import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardBox = styled.div`
  display: block;
  margin: 0;
  height: auto;
`

export const Img = styled.div`
  display: block;
  border-radius: 16px;
  background-color: red;
  width: 100%;
  height: 256px;
  background-image: url(link);
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.35s ease-in-out;
`

export const Card = styled(Link)`
  text-decoration: none;
  display: block;
  transition: all 0.1s ease-in-out;
  &:hover ${Img} {
    background-size: 160%;
    box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.3);
  }
`

export const Title = styled.h3`
  font-weight: normal;
  padding: 0 8px;
  margin-top: 12px;
  text-align: center;
  cursor: pointer;
`
