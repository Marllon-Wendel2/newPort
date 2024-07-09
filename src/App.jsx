import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ghost from './assets/ghost-solid.svg'
import perfil from './assets/perfil3.png'
import exemplo from './assets/exemplo1.png'
import exemplo2 from './assets/exemplo2.png'
import linha from './assets/ellipsis-solid.svg'
import whatsapp from './assets/whatsapp.svg'
import email from './assets/envelope-solid.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function direciona(url) {
    window.open(url, "_blank")
  }

  return (
    <>
  <div className="tamplete__container">
      <ul className="header__container">
       <img src={ghost} alt="iconGhost" className="icon__Ghost" />
        <li className="header__item"><a href='#about'>SOBRE MIM</a></li>
        <li className="header__item"><a href='#projetos'>PROJETOS</a></li>
        <li className="header__item"><a href='#contato'>CONTATOS</a></li>
      </ul>
        <h2 id="about">Marllon, pessoa desenvolvedora com foco em Back-end com NodeJs</h2>
        <h3>
          Freelancer e estudante de desenvolvimento web e software utilizando NodeJs, Express
        </h3>
      <div className="conteudo__container">
        <div >
        <p>
        Olá! Meu nome é Marllon Wendel e sou estudante e desenvolvedor web apaixonado por criar soluções eficientes e elegantes. Tenho experiência com NodeJs e Express, o que me permite desenvolver backends robustos e escaláveis. Além disso, possuo conhecimento em React, capacitando-me a construir interfaces de usuário interativas e responsivas.
        </p>
        <p>
        Ao longo da minha jornada, busco sempre aprimorar minhas habilidades e aprender novas tecnologias para entregar projetos de alta qualidade. Estou sempre pronto para enfrentar novos desafios e colaborar em equipe para alcançar os melhores resultados.
        </p>
        <p>
        Neste portfólio, você encontrará alguns dos meus projetos, que demonstram minhas habilidades e meu comprometimento com o desenvolvimento web. Sinta-se à vontade para explorar e entrar em contato comigo para discutir possíveis colaborações ou apenas trocar ideias sobre tecnologia.
        </p>
      <button className="button__vamosla">Vamos lá!</button>
        </div>
      <img src={perfil} alt="" className="perfil" />
      </div>
  <div className='break'></div>
  <di className= "exemplo__container"id="projetos">
    <di>
    <img src={exemplo} alt="" className="exemplo" />
    </di>
    <div className="exemplo__conteudo">
      <h2>BOOKS CLUB</h2>
      <h3>Projeto fullstack de uma rede social</h3>
      <p>O Books Club é uma projeto fullstack realizado por mim para demonstrar o consumo de uma API criada por mim, utilizando do MongoDB como banco de dados garantindo a permanencia das informações, o react para sua interface no front-end e mais importando o back-end em NodeJS funcional e escalavel</p>
      <button  className='button__exemplo' onClick={() => direciona("https://club-books.vercel.app/")}>Deploy Front-end</button>
      <button className='button__exemplo' onClick={() => direciona("https://github.com/Marllon-Wendel2/ClubBooks")}>GitHub Front-end</button>
      <button className='button__exemplo' onClick={() => direciona("https://github.com/Marllon-Wendel2/server-booksclub")}>GitHub Back-end</button>
    </div>
  </di>
  <di className= "exemplo__container"id="projetos">
    <di>
    <img src={exemplo2} alt="" className="exemplo" />
    </di>
    <div className="exemplo__conteudo">
      <h2>API JORNADA</h2>
      <h3>Projeto Back-end</h3>
      <p>A API Jornada é uma aplicação desenvolvida utilizando Node.js com o framework Express e banco de dados MongoDB, projetada para gerenciar informações e operações relacionadas a um site de viagens chamado Jornada. A API facilita o gerenciamento dos depoimentos, usuários, e avaliações, permitindo interações dinâmicas e eficientes entre os clientes e o serviço de viagens.</p>
      <button className='button__exemplo' onClick={() => direciona("https://github.com/Marllon-Wendel2/jornadaDesafio")}>GitHub Back-end</button>
    </div>
  </di>
  <div className='break'></div>
  <div className="contato__container" id="contato">
    <h1 className="contato_titulo">Fale comigo:</h1>
    <ul className="contato__lista">
      <li className="contato__lista-item"><img src={whatsapp} onClick={() => direciona("https://wa.me/+5581997311779")}/></li>
      <p>WHATSAPP</p>
      <li className="contato__lista-item"><img src={email} onClick={() => direciona("mailto:m.w.p.ferreira@outlook.com")}/></li>
      <p>E-MAIL</p>
      <li className="contato__lista-item"><img src={github} onClick={() => direciona("https://github.com/Marllon-Wendel2")}/></li>
      <p>GITHUB</p>
      <li className="contato__lista-item"><img src={linkedin} onClick={() => direciona("https://www.linkedin.com/in/marllon-wendel-595674209")}/></li>
      <p>LINKEDIN</p>
    </ul>
  </div>

  </div>
    </>
  )
}

export default App
