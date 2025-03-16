import styled from 'styled-components'
import Image from 'next/image'
import { useLeadsForm } from '@/hooks/useLeadsForm'
import CirclesImage from '@/assets/images/Circles.png'
import { Briefcase, Dices, FileCheck2, Heart } from 'lucide-react'
import { AuthButton } from '@/components/AuthButton/inex'
import { LightRed, White } from '@/styles/helpers/colors'
import { Input } from '@/components/common/Input'
import { Select } from '@/components/common/Select'
import { Checkbox } from '@/components/common/Checkbox'
import { TextArea } from '@/components/common/TextArea'
import { Button } from '@/components/common/Button'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${White};
`
const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  width: 100%;
  background-color: rgba(217, 222, 165, 0.88);
  overflow: hidden;
`

const PreviewTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 2.5rem;
  }
`

export const FormTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 0.5rem;
    font-weight: bold;
  }
  &:first-child {
    margin-top: 1rem;
  }
`

const FormWrapper = styled.div`
  max-width: 600px;

  margin: auto;
  padding: 2rem;
`

const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: bolder;
`

const ErrorMessage = styled.div`
  color: ${LightRed};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const AuthButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.2s;
`

const ImageWrapper = styled.div`
  position: absolute;
  left: 0;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`

const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'India']
const visaCategories = ['O-1', 'EB-1A', 'EB-2 NIW', "I don't know"]

export default function Home() {
  // In real case I would use more versatile and less verbose tools such as TanStack-Form or React-Hook-Form
  const { formData, formErrors, handleSubmit, handleChange, handleVisaChange, handleResumeChange } =
    useLeadsForm()

  return (
    <MainWrapper>
      <PreviewWrapper>
        <AuthButtonWrapper>
          <AuthButton />
        </AuthButtonWrapper>
        <ImageWrapper>
          <Image src={CirclesImage} height={400} alt="logo" />
        </ImageWrapper>
        <PreviewTitlesWrapper>
          <div>almă</div>
          <h1>
            Get An Assessment <br /> Of Your Immigration Case
          </h1>
        </PreviewTitlesWrapper>
      </PreviewWrapper>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <FormTitles>
            <FileCheck2 color="#8D8CFF" size={40} />
            <h2>Want to understand your visa options?</h2>
            <p>
              Submit the form below and our team of experienced attorneys will review you
              information and send you a personalized assessment of your case based on your unique
              circumstances.
            </p>
          </FormTitles>
          <InputWrapper>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            {formErrors.firstName && <ErrorMessage>{formErrors.firstName}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {formErrors.lastName && <ErrorMessage>{formErrors.lastName}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
            />
            {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Select name="countryOfCitizenship" value={formData.countryOfCitizenship} onChange={handleChange}>
              <option value="">Select Your Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Select>
            {formErrors.countryOfCitizenship && (
              <ErrorMessage>{formErrors.countryOfCitizenship}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              placeholder="LinkedIn"
              type="text"
            />
            {formErrors.linkedIn && <ErrorMessage>{formErrors.linkedIn}</ErrorMessage>}
          </InputWrapper>

          <FormTitles>
            <Dices color="#8D8CFF" size={40} />
            <h2>Visa categories of interest</h2>
          </FormTitles>
          <StyledCheckboxWrapper>
            {visaCategories.map((category) => (
              <label key={category}>
                <Checkbox
                  type="checkbox"
                  name="visaCategory"
                  value={category}
                  onChange={handleVisaChange}
                />{' '}
                {category}
              </label>
            ))}
          </StyledCheckboxWrapper>

          <FormTitles>
            <Briefcase color="#8D8CFF" size={40} />
            <h2>Your resume</h2>
          </FormTitles>
          <InputWrapper>
            <input type="file" name="resume" onChange={handleResumeChange} />
            {formErrors.resume && <ErrorMessage>{formErrors.resume}</ErrorMessage>}
          </InputWrapper>

          <FormTitles>
            <Heart color="#8D8CFF" size={40} />
            <h2>How can we help you?</h2>
          </FormTitles>
          <InputWrapper>
            <TextArea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Additional Information"
            />
            {formErrors.additionalInfo && <ErrorMessage>{formErrors.additionalInfo}</ErrorMessage>}
          </InputWrapper>
          <Button type="submit">Submit</Button>
        </form>
      </FormWrapper>
    </MainWrapper>
  )
}
