import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  margin: 52px 0 1em 0;
  align-items: center;
`;
const TagsTitulo = styled.h3`
  width: 219px;
  height: 32px;
  font-size: 24px;
  font-weight: 400;
  color: #d9d9d9;
  margin: 0;
`;

const BotonesContainer = styled.div`
  display: flex;
  width: 621px;
  height: 52px;
  gap: 24px;
`;

const TagsBotones = styled.button`
  /* width: max-content; */
  height: 100%;
  border-radius: 10px;
  padding: 0 12px;
  background: #d9d9d94d;
  color: white;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tag = ({setTag}) => {
  return (
    <TagsContainer>
      <TagsTitulo>Buscar por tags:</TagsTitulo>
      <BotonesContainer>
        {tags.map((tag) => {
          return <TagsBotones key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</TagsBotones>;
        })}
      </BotonesContainer>
    </TagsContainer>
  );
};

export default Tag;
