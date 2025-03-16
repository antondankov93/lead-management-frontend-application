import styled from 'styled-components'
import Link from 'next/link'
import { UserRound } from 'lucide-react'
import { White } from '@/styles/helpers/colors'
import { selectUser } from '@/store/auth/selectors'
import { useSelector } from 'react-redux'

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${White};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;
  &:hover {
    scale: 1.05;
  }
`

const Text = styled.span`
  font-size: 1rem;
  font-weight: 600;
`

export const AuthButton = () => {
  const user = useSelector(selectUser)

  return (
    <Link href="/auth">
      <LinkWrapper>
        <Avatar>
          <UserRound size={20} />
        </Avatar>
        <Text>{user ? user.name : 'Login'}</Text>
      </LinkWrapper>
    </Link>
  )
}
