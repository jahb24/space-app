import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    /* img{//Esto es para poner estilos a los img que estén dentro de un header
        width: 212px;
    } */
`

const Logo = styled.img`
    width: 212px;
`

const Cabecera = ({setFiltro}) => {
    return <HeaderEstilizado>
        {/* <img src="img/logo.png" alt="Logo de space app" /> */}
        <Logo src="img/logo.png"/>
        <CampoTexto setFiltro={setFiltro}/>
    </HeaderEstilizado>
}

export default Cabecera