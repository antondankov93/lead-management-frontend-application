import styled from "styled-components";
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { useLeadsForm } from "@/hooks/useLeadsForm";
import CirclesImage from "@/assets/images/Circles.png";
import { Briefcase, Dices, FileCheck2, Heart } from "lucide-react";
import {AuthButton} from "@/components/AuthButton/inex";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const PreviewWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 30vh;
  width: 100%;
  background-color: rgba(217, 222, 165, 0.88);
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
  }

  div {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const FormTitles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 4rem;
  }
  p {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  &:first-child {
    margin-top: 1rem;
  }
`;

const FormWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2rem;
`;

const FileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.33);
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    border-color: #8D8CFF;
    outline: none;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.33);
  border-radius: 10px;
  font-size: 1rem;

  &:focus {
    border-color: #8D8CFF;
    outline: none;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.33);
  border-radius: 10px;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 0.5rem;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bolder;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: black;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const AuthButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.2s;
  &:hover {
    scale: 1.05;
  }
`;

export default function Home() {
  const dispatch = useDispatch();
  const { formData, formErrors, handleSubmit, handleChange, handleVisaChange, handleResumeChange } = useLeadsForm();

  const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "India"];
  const visaCategories = ["Work Visa", "Student Visa", "Tourist Visa", "I don't know"];

  return (
      <MainWrapper>
        <PreviewWrapper>
          <AuthButtonWrapper>
            <AuthButton />
          </AuthButtonWrapper>
          <Image src={CirclesImage} height={400} alt="logo" />
          <div>
            <div>almă</div>
            <h1>Get An Assessment <br/> Of Your Immigration Case</h1>
          </div>
        </PreviewWrapper>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <FormTitles>
              <FileCheck2 color="#8D8CFF" size={30} />
              <h2>Want to understand your visa options?</h2>
              <p>Submit the form below and our team of experienced attorneys will review you information and send you a personalized assessment of your case based on your unique circumstances.</p>
            </FormTitles>
            <div>
              <StyledInput
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
              />
              {formErrors.firstName && <ErrorMessage>{formErrors.firstName}</ErrorMessage>}
            </div>
            <div>
              <StyledInput
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
              />
              {formErrors.lastName && <ErrorMessage>{formErrors.lastName}</ErrorMessage>}
            </div>
            <div>
              <StyledInput
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  type="email"
              />
              {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
            </div>
            <div>
              <StyledSelect name="country" value={formData.countryOfCitizenship} onChange={handleChange}>
                <option value="">Select Your Country</option>
                {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                ))}
              </StyledSelect>
              {formErrors.countryOfCitizenship && <ErrorMessage>{formErrors.countryOfCitizenship}</ErrorMessage>}
            </div>

            <FormTitles>
              <Dices color="#8D8CFF" size={30} />
              <h2>Visa categories of interest</h2>
            </FormTitles>

            {/* Vertical checkboxes list */}
            <StyledCheckboxWrapper>
              {visaCategories.map((category) => (
                  <label key={category}>
                    <Checkbox type="checkbox" name="visaCategory" value={category} onChange={handleVisaChange} /> {category}
                  </label>
              ))}
            </StyledCheckboxWrapper>

            <FormTitles>
              <Briefcase color="#8D8CFF" size={30} />
              <h2>Your resume</h2>
            </FormTitles>
            <FileInputContainer>
              <input type="file" name="resume" onChange={handleResumeChange} />
              {formErrors.resume && <ErrorMessage>{formErrors.resume}</ErrorMessage>}
            </FileInputContainer>

            <FormTitles>
              <Heart color="#8D8CFF" size={30} />
              <h2>How can we help you?</h2>
            </FormTitles>
            <div>
              <StyledTextArea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Additional Information"
              />
              {formErrors.additionalInfo && <ErrorMessage>{formErrors.additionalInfo}</ErrorMessage>}
            </div>
            <StyledButton type="submit">Submit</StyledButton>
          </form>
        </FormWrapper>
      </MainWrapper>
  );
}
