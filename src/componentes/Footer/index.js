import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='iconesSociais'>
                <img src="/imagens/fb.png" alt="Icone facebook" />
                <img src="/imagens/tw.png" alt="Icone twitter" />
                <img src="/imagens/ig.png" alt="Icone instagram" />
            </div>
            <div className='logoOrgano'>
                <img src="/imagens/logo.png" alt="Icone instagram" />
            </div>
            <div className='creditos'>
                
            <p>Desenvolvido por <a href="https://github.com/Lguilherme3" src="Perfil do Aluno">Luiz Guilherme</a>+. <br></br> Junto com Escola Alura.</p>
                
            </div>
        </div>

    )
}

export default Footer


// <a href="https://github.com/Lguilherme3" src="Perfil do Aluno">Luiz Guilherme</a>