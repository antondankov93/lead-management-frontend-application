import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { StyledButton, StyledInput } from '@/pages/index'
import { useRouter } from 'next/navigation'
import { LightRed, White } from '@/styles/helpers/colors'
import { leadSchema } from '@/schemas/leadSchema'
import { authSchema } from '@/schemas/authSchema'

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${White};
`

const AuthForm = styled.form`
  background-color: ${White};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`

const Error = styled.p`
  color: ${LightRed};
  margin-bottom: 1rem;
  text-align: center;
`

const defaultFormData = {
  name: '',
  password: '',
}

const Auth: FC = () => {
  const [formData, setFormData] = useState<typeof defaultFormData>(defaultFormData)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.password) {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
        }),
      })
      if (res.status === 200) {
        const data = await res.json()
        router.push('/leads')
      }
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <Error>{error}</Error>}
        <StyledInput
          type="text"
          placeholder="Username"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <StyledInput
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
        />
        <StyledButton disabled={!formData.name || !formData.password} type="submit">
          Submit
        </StyledButton>
      </AuthForm>
    </AuthContainer>
  )
}

export default Auth
