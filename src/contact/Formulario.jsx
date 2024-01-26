"use client"
import React from 'react'
import './Styles.formulario.css'

const Formulario = () => { 

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const 
      name= event.target.name.value,
      email= event.target.email.value,
      message= event.target.message.value
    
  
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({name,email,message}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      console.log('Mensaje enviado:');
    } else {
      console.error('Error al enviar el mensaje:');
    }
  };
      
  return (
    <div className='contect_form'>
        <h2>¡ Hablemos !</h2>
        <div className='contect_form_box1'>
            <div>Wapme</div>
            <h4>Locación</h4>
            <p>Medellín - Colombia</p>
        </div>
        <form className='contect_form_box2' onSubmit={handleSubmit}>
            <div>
                <input className='inputsLine' name='name' type='text' required placeholder='Nombre'/>
                <input className='inputsLine' name='email' type='email' required placeholder='Email'/>
            </div>
            <textarea placeholder='Mensaje' name='message' required />

            <button type='submit'>Enviar  {"->"} </button>
        </form>
    </div>
  )
}

export default Formulario