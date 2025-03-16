import React, { FC, FormEvent, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { logout, setUser } from '@/store/auth/slice'
import { LightRed, White } from '@/styles/helpers/colors'
import { Input } from '@/components/common/Input'
import { Button } from '@/components/common/Button'
import { selectUser } from '@/store/auth/selectors'

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${White};
`
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const AuthForm = styled.form`
  background-color: ${White};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const LogOutButton = styled(Button)`
  width: 200px;
`

const defaultFormData = {
  name: '',
  password: '',
}

const Auth: FC = () => {
  const user = useSelector(selectUser)
  const [formData, setFormData] = useState<typeof defaultFormData>(defaultFormData)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleLogin = async (e: FormEvent) => {
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

  const handleLogout = async () => {
    dispatch(logout())
    router.push('/')
  }

  const handleOpenLeadsPage = () => {
    router.push('/leads')
  }

  if (user) {
    return (
      <AuthContainer>
        <ButtonsWrapper>
          <Button onClick={handleOpenLeadsPage}>Open Leads Page</Button>
          <LogOutButton onClick={handleLogout}>Log Out</LogOutButton>
        </ButtonsWrapper>
      </AuthContainer>
    )
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
