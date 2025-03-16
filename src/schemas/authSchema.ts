import { type } from 'arktype'

export const authSchema = type({
  name: 'string',
  password: 'string',
})
