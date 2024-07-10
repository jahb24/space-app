import styled from "styled-components"
import search from "./search.png"

const ContenedorEstilizado = styled.div`
    position: relative;
    display: inline-block;
    width: 566px;
`

const CampoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`
const ImagenLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const CampoTexto = ({setFiltro}) => {
    return (
        <ContenedorEstilizado>
            <CampoEstilizado onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="¿Qué estás buscando?"/>
            <ImagenLupa src={search} alt="icono de lupa"/>
        </ContenedorEstilizado>
        
    )
}

export default CampoTexto