import { type } from 'arktype'

export const leadSchema = type({
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  countryOfCitizenship: 'string',
  linkedIn: 'string',
  visas: 'Array',
  status: 'string',
  resume: 'File',
  additionalInfo: 'string?',
})
