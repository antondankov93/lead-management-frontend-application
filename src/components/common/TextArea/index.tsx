import styled from 'styled-components'
import { LightPurple } from '@/styles/helpers/colors'

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(204, 204, 204, 0.33);
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    border-color: ${LightPurple};
    outline: none;
  }
`
