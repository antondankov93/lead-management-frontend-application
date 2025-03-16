import styled from 'styled-components'
import { FileCheck2 } from 'lucide-react'
import { White } from '@/styles/helpers/colors'
import { Button } from '@/components/common/Button'
import { FormTitles } from '@/pages/index'
import { useRouter } from 'next/navigation'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${White};
  height: 100vh;
    button {
      width: max-content;
    }
`

export default function SuccessPage() {
  const router = useRouter()
  const onHandleClick = () => {
    router.push('/')
  }

  return (
    <MainWrapper>
      <FormTitles>
        <FileCheck2 color="#8D8CFF" size={40} />
        <h2>Thanks you!</h2>
        <p>
          Your application has been submitted successfully. We will contact you soon.
        </p>
      </FormTitles>
      <Button onClick={onHandleClick}>Go Back to Homepage</Button>
    </MainWrapper>
  )
}
