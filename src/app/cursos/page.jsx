import Formulario from "@/contact/Formulario"
import "./Styles.css"

function AboutPage(){


    return(
        <div className="main">
            <svg xmlns="http://www.w3.org/2000/svg" width="409" height="503" viewBox="0 0 409 503" fill="#FDBF50" className="svg">
                <path d="M77.0293 283.036C103.158 211.533 -38.0563 108.693 68.4048 8.82331C133.762 -52.4871 454.754 147.477 459.092 234.289C466.755 387.631 168.618 554.84 30.6259 487.53C-47.4964 449.423 46.704 366.023 77.0293 283.036Z" fill="#FDBF50"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="203" height="212" viewBox="0 0 203 212" fill="none" className="svgBlue">
                <path d="M55.697 27.8114C90.7171 5.67692 88.5074 -105.903 157.996 -105.613C200.655 -105.435 218.601 132.224 186.687 175.182C130.316 251.06 -21.2838 197.101 -36.1295 103.747C-44.5342 50.8964 15.0521 53.501 55.697 27.8114Z" fill="#2A2C41"/>
            </svg>


            <h1 className='title'>Cursos y certificados</h1>
            <div className="Content-certificados">
                <div id="card1" className="Content-certificados_card">
                    <img src="/certificados/diploma-analitica-instrumentacion_page-0001.jpg" alt="" />
                    <b  className='subtitle'>Analitica instrumentacion de datos</b>
                </div>
                <div id="card2" className="Content-certificados_card">
                    <img src="/certificados/diploma-ingenieria_page-0001.jpg" alt="" />
                    <b  className='subtitle'>Fundamentos ingenieria de software</b>
                </div>
                <div id="card3" className="Content-certificados_card">
                    <img src="/certificados/estructurajs.jpg" alt="" />
                    <b className='subtitle'>Estructuras de datos en js</b>
                </div>
                <div id="card5" className="Content-certificados_card">
                    <img src="/certificados/front.jpg" alt="" />
                    <b className='subtitle'>Master en Css</b>
                </div>
                <div id="card6" className="Content-certificados_card">
                    <img src="/certificados/Geek.jpg" alt="" />
                    <b className='subtitle'>Front-end Academia</b>
                </div>
                <div id="card7" className="Content-certificados_card">
                    <img src="/certificados/node.jpg" alt="" />
                    <b className='subtitle'>Node.js</b>
                </div>
                <div id="card8" className="Content-certificados_card">
                    <img src="/certificados/react-native.jpg" alt="" />
                    <b className='subtitle'>React-Native</b>
                </div>
            </div>
            <Formulario/>
        </div>
    )
}

export default AboutPage