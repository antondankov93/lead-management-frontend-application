import { leadSchema } from '@/schemas/leadSchema'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLead } from '@/store/leads/slice'
import { type } from 'arktype'
import { useRouter } from 'next/navigation'
import { Lead } from '@/types/common'

const defaultFormData = {
  id: crypto.randomUUID(),
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  countryOfCitizenship: undefined,
  linkedIn: undefined,
  visas: [] as string[] | undefined,
  resume: undefined,
  additionalInfo: undefined,
  status: 'pending',
  createdAt: new Date().toISOString(),
}
const defaultFormErrors = {
  firstName: undefined as string | undefined,
  lastName: undefined as string | undefined,
  email: undefined as string | undefined,
  countryOfCitizenship: undefined as string | undefined,
  linkedIn: undefined as string | undefined,
  visas: undefined as string[] | undefined,
  resume: undefined as string | undefined,
  additionalInfo: undefined as string | undefined,
  status: undefined as string | undefined,
  createdAt: undefined as string | undefined,
}
const getFormErrors = (errors: Record<string, any>) => ({
  firstName: (errors?.firstName?.message && 'First name is required') || undefined,
  lastName: (errors?.lastName?.message && 'Last name is required') || undefined,
  email: (errors?.email?.message && 'Email is required') || undefined,
  countryOfCitizenship: (errors?.countryOfCitizenship?.message && 'Country of citizenship is required') || undefined,
  linkedIn: undefined,
  additionalInfo: undefined,
  visas: (errors?.visas?.message && 'Visas are required') || undefined,
  resume: undefined,
  status: undefined,
  createdAt: errors?.createdAt?.message || undefined,
})

export const useLeadsForm = () => {
  const [formData, setFormData] = useState<Lead>(defaultFormData)
  const [formErrors, setFormErrors] = useState(defaultFormErrors)

  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const result = leadSchema(formData)

    if (result instanceof type.errors) {
      setFormErrors(getFormErrors(result.byPath))
    } else {
      dispatch(setLead(formData))
      setFormData(defaultFormData)
      setFormErrors(defaultFormErrors)
      router.push('/success')
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
    if (e.target.files) {
      // @ts-ignore
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
