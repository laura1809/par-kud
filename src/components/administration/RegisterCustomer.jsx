import { useState } from 'react'
import { sendEmail } from '../../services/Email'


const RegisterCustomer = () => {
  
  const [templateParams, setTemplateParams] = useState({
    email : 'ltrr2001@gmail.com',
    to_name: 'Laura',
    first_password: 'example123'
  })

  const handleSendEmail = async ()=> {
    const succes= await sendEmail(templateParams);
    (!succes) ? alert('Correo enviado'):alert('No se pudo enviar el correo')
  }
  
  return (
    <>
      <button className='bg-red text-white p-2 w-40' onClick={handleSendEmail}>Enviar correo</button>;
    </>
  )
}

export default RegisterCustomer