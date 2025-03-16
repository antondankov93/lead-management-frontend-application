export type User =
  | {
      id: string
      name: string
    }
  | undefined

export type Lead = {
  id: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  email: string | undefined
  countryOfCitizenship: string | undefined
  linkedIn?: string | undefined
  visas: string[] | undefined
  resume?: File | undefined
  additionalInfo?: string | undefined
  status: string | undefined
  createdAt: string | undefined
}
