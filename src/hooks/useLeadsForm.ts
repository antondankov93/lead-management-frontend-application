import { leadSchema } from '@/schemas/leadSchema'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLeads } from '@/store/leads/slice'

const defaultFormData = {
  firstName: '',
  lastName: '',
  email: '',
  countryOfCitizenship: '',
  linkedIn: '',
  visas: [] as string[],
  resume: null as File | null,
  additionalInfo: '',
  status: 'pending',
  createdAt: new Date().toISOString(),
}
const defaultFormErrors = {
  firstName: null as string | null,
  lastName: null as string | null,
  email: null as string | null,
  countryOfCitizenship: null as string | null,
  linkedIn: null as string | null,
  visas: null as string | null,
  resume: null as string | null,
  additionalInfo: null as string | null,
  createdAt: null as string | null,
}
const getFormErrors = (errors: any) => ({
  firstName: errors?.firstName?.[0]?.message || null,
  lastName: errors?.lastName?.[0]?.message || null,
  email: errors?.email?.[0]?.message || null,
  countryOfCitizenship: errors?.countryOfCitizenship?.[0]?.message || null,
  linkedIn: errors?.linkedIn?.[0]?.message || null,
  additionalInfo: errors?.additionalInfo?.[0]?.message || null,
  visas: errors?.visas?.[0]?.message || null,
  resume: errors?.resume?.[0]?.message || null,
  createdAt: errors?.createdAt?.[0]?.message || null,
})

export const useLeadsForm = () => {
  const [formData, setFormData] = useState(defaultFormData)
  const [formErrors, setFormErrors] = useState(defaultFormErrors)
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const result = leadSchema(formData)

    if (result.byPath === undefined) {
      dispatch(setLeads(formData))
      console.log('Submitted!', formData)
      setFormData(defaultFormData)
      setFormErrors(defaultFormErrors)
    } else {
      const errors = result.byPath
      setFormErrors(getFormErrors(errors))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleVisaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, visas: value.split(',').map((v) => v.trim()) }))
  }

  const handleResumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }))
    }
  }

  return {
    formData,
    formErrors,
    handleSubmit,
    handleChange,
    handleVisaChange,
    handleResumeChange,
  }
}
