import { type } from 'arktype'

export const leadSchema = type({
  firstName: "string",
  lastName: "string",
  email: "string",
  countryOfCitizenship: "string",
  "linkedIn?": "string | undefined",
  visas: "Array",
  status: "string",
  "resume?": "File | undefined",
  "additionalInfo?": "string | undefined",
})
