import React from 'react'
import './Styles.formulario.css'

const Formulario = () => { 

    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita la recarga de la página
        const formData = {
          // Asume que tienes un estado o refs para cada campo
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
        };
      
        // Opción con fetch para enviar los datos
        const response = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        const data = await response.json(); // o maneja la respuesta como prefieras
      
        if (response.ok) {
          // Maneja el caso de éxito
          console.log('Mensaje enviado:', data);
        } else {
          // Maneja los errores
          console.error('Error al enviar el mensaje:', data);
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
        <form className='contect_form_box2'>
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