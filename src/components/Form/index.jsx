import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getFormInfo } from '@/api/queries'
import MainContainer from './Parts/Containers/MainContainer'
import Intro from './Parts/Intro'
import FormContainer from './Parts/Containers/FormContainer'
import InputField from './Parts/Inputs/InputField'
import CheckboxInput from './Parts/Inputs/CheckboxInput'
import SelectInputComponent from './Parts/Inputs/SelectInputComponent'
import TextAreaInput from './Parts/Inputs/TextAreaInput'
import ButtonInput from './Parts/Inputs/ButtonInput'

const Form = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getFormInfo(iDInfo))
  const [userReview, setUserReview] = useState({
    name: '',
    email: '',
    tlf: '',
    country: '',
  })
  const [checked, setChecked] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [comment, setComment] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserReview({ ...userReview, [name]: value })
  }

  const updateCheckBoxInput = () => {
    setChecked(!checked)
  }

  const updateSelectedService = (value) => {
    setSelectedService(value)
  }

  const updateTextArea = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, tlf, country } = userReview
    if (!name || !email || !tlf || !country || !checked || !selectedService) {
      alert('You must fill all the fields!')
      return
    }
    alert('You information is sending to us')
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  const formInfo = data.page.data.attributes.Form
  const {
    title,
    content,
    InputName,
    Mail,
    PhoneInput,
    CountryInput,
    ContactPreferences,
    SelectInput,
    options,
    textarea,
    valueBtn,
  } = formInfo

  return (
    <MainContainer>
      <Intro title={title} content={content} />

      <FormContainer onSubmit={handleSubmit}>
        <fieldset>
          <InputField
            label={InputName.label}
            name={InputName.name}
            value={userReview.name}
            type={InputName.type}
            placeholder={InputName.placeholder}
            onChange={handleChange}
          />
          <InputField
            label={Mail.label}
            name={Mail.name}
            value={userReview.email}
            type={Mail.type}
            placeholder={Mail.placeholder}
            onChange={handleChange}
          />
          <InputField
            label={PhoneInput.label}
            name={PhoneInput.name}
            value={userReview.tlf}
            type={PhoneInput.type}
            placeholder={PhoneInput.placeholder}
            onChange={handleChange}
          />
          <InputField
            label={CountryInput.label}
            name={CountryInput.name}
            value={userReview.country}
            type={CountryInput.type}
            placeholder={CountryInput.placeholder}
            onChange={handleChange}
          />

          <CheckboxInput
            legend={ContactPreferences.Legend}
            name={ContactPreferences.name}
            value={checked}
            label={ContactPreferences.label}
            onChange={updateCheckBoxInput}
          />
        </fieldset>
        <fieldset>
          <SelectInputComponent
            legend={SelectInput.Legend}
            id={SelectInput.idName}
            placeholder={SelectInput.placeholder}
            options={options}
            value={selectedService}
            onChange={updateSelectedService}
          />

          <TextAreaInput
            label={textarea.label}
            name={textarea.name}
            cols='30'
            rows='10'
            placeholder={textarea.placeholder}
            value={comment}
            onChange={updateTextArea}
          />
        </fieldset>
        <ButtonInput valueBtn={valueBtn} />
      </FormContainer>
    </MainContainer>
  )
}
export default Form
