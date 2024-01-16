import React from 'react'
import "./Experiencia.css"
import Formulario from '@/contact/Formulario'
const Experiencia = () => {
  return (
    <main className="main">
      <svg className='darkSmallShape' xmlns="http://www.w3.org/2000/svg" width="203" height="212" viewBox="0 0 203 212" fill="none">
        <path d="M55.697 27.8114C90.7171 5.67692 88.5074 -105.903 157.996 -105.613C200.655 -105.435 218.601 132.224 186.687 175.182C130.316 251.06 -21.2838 197.101 -36.1295 103.747C-44.5342 50.8964 15.0521 53.501 55.697 27.8114Z" fill="#2A2C41"/>
      </svg>
      <svg className='BigShape' xmlns="http://www.w3.org/2000/svg" width="409" height="503" viewBox="0 0 409 503" fill="none">
        <path d="M77.0293 283.036C103.158 211.533 -38.0563 108.693 68.4048 8.82331C133.762 -52.4871 454.754 147.477 459.092 234.289C466.755 387.631 168.618 554.84 30.6259 487.53C-47.4964 449.423 46.704 366.023 77.0293 283.036Z" fill="#FDBF50"/>
      </svg>

        <h1 className='title'>Mi experiencia </h1>
        <p className='p1'>
          Mi travesía en el desarrollo de software comenzó hace tres años, un viaje marcado por 
          el aprendizaje continuo y la evolución profesional. En la Academia Geek, mi curiosidad 
          me llevó a dominar React y JavaScript, forjando la base de mi carrera. Con cada paso, 
          desde Gabby Parrot hasta NAVACOM, mis habilidades se agudizaron, perfeccionando la 
          creación de interfaces intuitivas y diseñando con datos en mente.
        </p>

        <h2 className='subtitle'>Etapas de mi viaje: </h2>
        
        <ul>
            <li>
                <p>
                  <b>Academia Geek: </b>
                  Donde encendí la chispa de mi pasión por el código.
                </p>
                
                <p>
                  <b>Tecnologías: </b> 
                  JavaScript, React, Redux, Figma, CSS, SASS, Firebase, Figma, Git y GitHub.
                </p>
            </li>
            
            <li>
                <p>
                  <b>Gabby Parrot: </b>
                  Aquí, las interfaces cobraron vida bajo mis dedos, y mi comprensión del diseño 
                  y la experiencia de usuario se profundizó.
                </p>
                
                <p>
                  <b>Tecnologías: </b>  
                  React, React-Native, JavaScript, Redux, CSS, SASS, Firebase, Git y GitHub.
                </p>
            </li>

            <li>
                <p>  
                  <b>Soluciones Navacom: </b>
                  Donde cada línea de código reforzaba mi conocimiento en bases de datos y diseño 
                  UI/UX.
                </p> 
                <p>
                  <b>Tecnologías: </b>  
                  JavaScript, CSS, SQL, jQuery,EJS {"(Embedded JavaScript templates)"}, Figma, Git y GitHub.
                </p>
            </li>
            
            <li>
                <p>
                  <b>HiloApp: </b>
                  La culminación de mi experiencia, donde cada desafío superado ha sido una 
                  lección invaluable.
              </p>
              <p>
                <b>Tecnologías: </b> 
                React, React-Native, JavaScript, Redux, CSSs, Figma, Firebase, Node, Express, Mongodb, Git y GitHub.</p>
            </li>
        </ul>

        <p className='p1 p2'>
          HiloApp no es solo un proyecto; es el testimonio de mi crecimiento, de la curiosidad 
          convertida en conocimiento y del conocimiento transformado en innovación tangible. 
          Cada desafío, una oportunidad; cada solución, un paso adelante en mi historia.
        </p>


        <h2 className='title hiloAppTitle'>¿Que es HiloApp? </h2>
        <p className='p1 p2'>
          HiloApp es un sistema de software que desarrollé completamente, enfocado en optimizar y automatizar 
          procesos operativos. Su diseño intuitivo facilita la gestión de tareas y el seguimiento de actividades
          clave. La aplicación incluye funcionalidades como gestión de rutas, administración de permisos y un sistema
          de puntos, todo integrado en una plataforma fácil de usar. Además, cuenta con un dashboard analítico para 
          visualizar datos importantes, ayudando en la toma de decisiones efectiva.
        </p>
        <h3 className='subtitle'> Manejador Wep </h3>

        <div className='p1 HiloApp_Dash' >
            <img src='/images/manejadorWeb.png'/>
            <div className='HiloApp_Dash_content'>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Análisis de KPIS</b> 
                <p>Seguimiento de ventas, uso de bolsas, actividad de usuarios y más.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Filtros Personalizados:</b>
                <p> Opciones para analizar datos por periodos específicos.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Administración de Personal:</b>
                <p>  Gestión de inscripciones y asignación de roles y permisos.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Informes y Descargas: </b> 
                <p>Generación de informes personalizados y opción de envío en PDF.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Módulo de Bodegas:</b>
                <p> Gestión y visualización de datos de bodegas con control de acceso.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Gestión de Rutas:</b> 
                <p>Creación y seguimiento de rutas con detalles de locaciones visitadas.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Administración de Materiales: </b> 
                <p>Control de materiales con gestión de precios y conversiones.</p>
              </div>
              <div  className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Módulo de Redención:</b> 
                <p>Manejo exclusivo de puntos y donaciones para empresas específicas.</p>
              </div>

              <div  className='HiloApp_Dash_content_card'>
                  <b className='HiloApp_Dash_b'>◗ Gestión de Bolsas:</b> 
                  <p>Seguimiento y solicitud de bolsas con control de inventario.</p>
              </div>
            </div>
        </div>

        <h3 className='subtitle'> Hilo usuarios </h3>
        <div className=' user HiloApp_Dash'>
            <img className='apps' width={"200px"} src='/images/appUsuarios.png'/>
            <div className='HiloApp_Dash_content user_content'>
              
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Registro de Usuarios:</b>
                    <p>Captura información personal con autocompletado de dirección mediante Google API.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Sesión de Educación:</b>
                    <p>Carrusel en la página de inicio con videos e imágenes educativas.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Sistema de Puntos:</b>
                    <p>Escanear código QR para reportar participación y acumular puntos.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Sesión de Aliados:</b>
                    <p>Mostrar empresas aliadas y validar descuentos mediante códigos QR.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Donaciones de Café:</b>
                    <p>Permitir a los usuarios realizar donaciones de café a los recolectores utilizando los puntos acumulados.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Información Personal Editable:</b>
                    <p>Proporcionar un módulo donde los usuarios puedan editar su información personal.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Generador de Solicitud de Recolección:</b>
                    <p>Permitir a los usuarios generar una solicitud de recolección escaneando un código QR.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Escaneo de Personal:</b>
                    <p>Permitir al personal escanear su carnet para ver su información relacionada con la empresa.</p>
                </div>

                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Módulo de PQR:</b>
                    <p>Permitir a los usuarios enviar quejas, reclamos o recomendaciones mediante un sistema de PQR.</p>
                </div>
                
                <div className='HiloApp_Dash_content_card'>
                    <b className='HiloApp_Dash_b'>◗ Reporte de Visitas:</b>
                    <p>Permitir a los usuarios reportar si han sido visitados, sin proporcionar datos de recolección.</p>
                </div>
            </div>
        </div>

        <h3 className='subtitle'> Hilo Experts </h3>
        <div className='user HiloApp_Dash'>
          <img className='apps'  src='/images/appLogisticos.png'/>
          <div className='HiloApp_Dash_content user_content'>
          
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Recepción de Solicitudes de Recolección:</b>
                <p>Capacidad para recibir solicitudes, mostrar información relevante del material y generar reportes.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Generación de Rutas:</b>
                <p>Creación de rutas, lectura de códigos QR, y calificación del material recogido.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Módulo de Informes:</b>
                <p>Visualización de rutas y locaciones, con reporte de cantidad y peso del material recogido.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Separación de Materiales:</b>
                <p>Registro de materiales en la planta y digitación del peso para cada material separado.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Recepción de Materiales:</b>
                <p>Digitación de datos de materiales recibidos y generación de informes.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Gestión de Permisos:</b>
                <p>Asignación de permisos según roles y control de acceso a funciones específicas.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Redención de Puntos y Notificaciones:</b>
                <p>Manejo de puntos retenidos y notificaciones de redención y entrega en bodega.</p>
            </div>
            
            <div className='HiloApp_Dash_content_card'>
                <b className='HiloApp_Dash_b'>◗ Personalización Empresarial:</b>
                <p>Gráficos personalizables según la empresa, incluyendo colores y logos.</p>
            </div>
          </div>
        </div>

      <Formulario/>
    </main>
  )
}

export default Experiencia