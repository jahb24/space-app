import styled from "styled-components";
import BotonIcono from "../BotonIcono";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "370px")};
  /* height: 336px; */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px #00000026;
  border-radius: 20px;
  background-color: #001634;
  margin: 18px 0;
`;
const ImagenFigura = styled.img`
  max-width: 100%;
  height: ${(props) => (props.$expandida ? "512px" : "256px")};
  border-radius: 20px 20px 0 0;
`;
const Caption = styled.figcaption`
  box-sizing: border-box;
  padding: 10px 20px;
  h3 {
    font-family: "GandhiSansBold";
    margin: 0;
    color: white;
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
  }
`;
const Footer = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h4 {
    margin: 0;
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    flex-grow: 1;
  }
`;
const Botones = styled.div`
  display: flex;
  gap: 24px;
`;

const Imagen = ({
  imagen,
  expandida = false,
  alSolicitarZoom,
  alAlternarFavorito,
}) => {
  const iconoFavorito = imagen.favorita
    ? "iconos/favorito-activo.png"
    : "iconos/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${imagen.id}`}>
      <ImagenFigura
        $expandida={expandida}
        src={imagen.path}
        alt="imagen del espacio"
      />
      <Caption>
        <h3>{imagen.titulo}</h3>
        <Footer>
          <h4>{imagen.fuente}</h4>
          <Botones>
            <BotonIcono onClick={() => alAlternarFavorito(imagen)}>
              <img src={iconoFavorito} alt="icono de favorito" />
            </BotonIcono>
            {!expandida && (
              <BotonIcono onClick={() => alSolicitarZoom(imagen)}>
                <img src="iconos/expandir.png" alt="icono de expandir" />
              </BotonIcono>
            )}
          </Botones>
        </Footer>
      </Caption>
    </Figure>
  );
};

export default Imagen;
