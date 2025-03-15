import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {StyledButton, StyledInput} from "@/pages/index";
import {useRouter} from "next/navigation";

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const AuthForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
  text-align: center;
`;

const Auth: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (username && password) {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            if (res.status === 200) {
                const data = await res.json();
                router.push('/leads');
            }
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <AuthContainer>
            <AuthForm onSubmit={handleLogin}>
                <Title>Login</Title>
                {error && <Error>{error}</Error>}
                <StyledInput
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <StyledInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <StyledButton type="submit">Submit</StyledButton>
            </AuthForm>
        </AuthContainer>
    );
};

export default Auth;