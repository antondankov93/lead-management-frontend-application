import styled from 'styled-components'
import { White } from '@/styles/helpers/colors'

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: black;
  color: ${White};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`