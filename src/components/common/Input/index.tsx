import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.33);
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    border-color: #8d8cff;
    outline: none;
  }
`