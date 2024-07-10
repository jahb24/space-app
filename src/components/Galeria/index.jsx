import Titulo from "../Titulo";
import Tag from "./Tags";
import Populares from "./Populares";
import styled from "styled-components";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;
const ImagenesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Galeria = ({ fotos = [], setTag, alSeleccionarFoto, alAlternarFavorito }) => {
  return (
    <>
      <Tag setTag={setTag}/>
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la galería</Titulo>
          <ImagenesContainer>
            {fotos.map((foto) => {
              return (
                <Imagen
                  alAlternarFavorito={alAlternarFavorito}
                  alSolicitarZoom={alSeleccionarFoto}
                  key={foto.id}
                  imagen={foto}
                ></Imagen>
              );
            })}
          </ImagenesContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
