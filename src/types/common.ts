export type User = {
  id: string
  name: string
} | undefined

export type Lead = {
  id: string
  firstName: string
  lastName: string
  email: string
  countryOfCitizenship: string
  linkedIn: string
  visas: string[]
  resume: File | null
  additionalInfo: string
  status: string
  createdAt: string
}
