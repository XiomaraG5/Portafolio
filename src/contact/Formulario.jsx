"use client"
import React from 'react'
import './Styles.formulario.css'

const Formulario = () => { 

    const handleSubmit = async (event) => {
      console.log('====================================');
      console.log(typeof  event.target.name.value,typeof  event.target.email.value,typeof  event.target.message.value);
      console.log('====================================');
        event.preventDefault(); // Evita la recarga de la página
        const tt = {
          // Asume que tienes un estado o refs para cada campo
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
        };
      
        // Opción con fetch para enviar los datos
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            // Asume que tienes un estado o refs para cada campo
            name: event.target.name.value.toString(),
            email: event.target.email.value.toString(),
            message: event.target.message.value.toString(),
          }),
        });
        // const data = await response.json(); // o maneja la respuesta como prefieras
      
        if (response.ok) {
          // Maneja el caso de éxito
          console.log('Mensaje enviado:', response);
        } else {
          // Maneja los errores
          console.error('Error al enviar el mensaje:', response);
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