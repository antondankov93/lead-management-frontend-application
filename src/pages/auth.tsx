import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/auth/slice'
import { LightRed, White } from '@/styles/helpers/colors'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'

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
  const dispatch = useDispatch()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.password) {
      setError('Invalid username or password.')
      return
    }

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

    if (res.ok) {
      const data = await res.json()
      dispatch(setUser(data.user))
      router.push('/leads')
    } else {
      const errorData = await res.json()
      setError(errorData.error || 'Something went wrong.')
    }
  }

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <Error>{error}</Error>}
        <Input
          type="text"
          placeholder="Username"
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
        />
        <Button disabled={!formData.name || !formData.password} type="submit">
          Submit
        </Button>
      </AuthForm>
    </AuthContainer>
  )
}

export default Auth