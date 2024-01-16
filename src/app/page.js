
import Formulario from '@/contact/Formulario';
import styles from './page.module.css'
import Link from 'next/link';
const foto = '/Imgs/insta.png'
// const foto =require('./Imgs')
export default function Home() {
  console.log(foto);
  return (
    <div>
      <div className={styles.headerBox}>
            <h4 className={styles.Subtitle}>FullStack developer</h4> 
            <p className={styles.p1}>
              En mi camino como desarrolladora de software, abrazo cada proyecto con 
              dedicación y una mente abierta hacia el aprendizaje continuo. Me considero 
              una eterna estudiante del mundo tecnológico, siempre buscando expandir mis 
              conocimientos y habilidades. Con cada línea de código, me esfuerzo por 
              aportar claridad, eficiencia y valor
            </p>
        </div>
    <main className={styles.main}>
        
        
        <section className={styles.centerBox}>
            <div className={styles.hithere}></div>
            <h6 className={styles.Subtitle}>Transformando Ideas en Realidad con un Toque de Entusiasmo</h6>
            <p >
              Bienvenido a mi mundo donde la tecnología y la creatividad se entrelazan de manera emocionante. 
              Aquí, cada proyecto es una aventura, un lienzo en blanco listo para ser llenado con ideas innovadoras 
              y soluciones prácticas. Me apasiona convertir conceptos complejos en realidades accesibles, siempre con 
              una sonrisa y una actitud positiva. Juntos, podemos descubrir cómo la tecnología no solo resuelve problemas, 
              sino que también añade valors a nuestras vidas.
            </p>
        </section>

        <section className={styles.tecnologias}>
            
            <h2 className={styles.tecnologias_tituloP}>Tecnologías :</h2>
            <h4 className={styles.tecnologias_titulo}> -Front-End</h4>
            
            <div className={styles.tecnologias_seccion}>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/javascript-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>JavaScript</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/css-31.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Css3</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/sass-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Sass</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/react-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>React.js</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/react-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>React-Native</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/redux-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Redux</h4>
                    </div>
                </div>

            </div>
            
            <h4 className={styles.tecnologias_titulo}> -Back-End</h4>
            
            <div className={styles.tecnologias_seccion}>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/nodedotjs-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Node.js</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/express-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Express</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/mongodb-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>MongoDB</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/firebase-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Firebase</h4>
                    </div>
                </div>

                <div className={styles.tecnologias_card}>
                    <div className={styles.tecnologia_card}>
                        <div className={styles.tecnologia_icono}>
                          <img src='/Imgs/strapi-1.png' />
                        </div>
                        <h4 className={styles.tecnologia_nombre}>Strapi</h4>
                    </div>
                </div>

            </div>
        </section>

        <h4 className={styles.tecnologias_tituloP} style={{marginTop:"5%"}}>Mis pilares:</h4>

        <section className={styles.Skills}>
              <div className={styles.Skills_card}>
                  <img src='/images/undraw-learning-sketching-nd-4-f-1.png'/>
                  <p>-Sentido de pertenencia </p>
              </div>

              <div className={styles.Skills_card} >
                  <img src='/images/undraw-accept-tasks-re-09-mv-1.png'/>
                  <p style={{marginLeft:"15%"}}>-Contribución </p>
              </div>

              <div className={styles.Skills_card}>
                  <img src='/images/undraw-things-to-say-re-jpcg-1.png'/>
                  <p>-Honestidad </p>
              </div>
        </section>

        <h4 className={styles.tecnologias_tituloP} style={{marginTop:"5%",textShadow:"0px 4px 4px #2A2C41"}}>Proyecto más relevante:</h4>

        <section className={styles.Proyect}>

              <div className={styles.Proyect_card}>
                  <p className={styles.Proyect_card_point}> 01 </p>
                  <div className={styles.Proyect_card_content} >
                      <p> Manejador Wep </p>
                      <img src='/images/manejadorWeb.png'/>
                  </div>
              </div>

              <div className={styles.Proyect_card} >
                <p className={styles.Proyect_card_point}> 02 </p>
                <div className={styles.Proyect_card_content} >
                  <p > App Usuarios </p>
                  <img src='/images/appUsuarios.png'/>
                </div>
              </div>

              <div className={styles.Proyect_card}>
                <p className={styles.Proyect_card_point}> 03 </p>
                <div className={styles.Proyect_card_content} >
                  <p> App logisticos </p>
                  <img src='/images/appLogisticos.png'/>
                  </div>
              </div>
        </section>
        <Link className='linking' href='/experiencia'> Ver mas sobre el proyecto {"->"}</Link>
        <Formulario/>
    </main>
    </div>
  )
}
