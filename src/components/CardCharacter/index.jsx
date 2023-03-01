import { ContainerCard } from "./styles";


export function CardCharacter({image, name, gender, specie}) {
  return (
  <ContainerCard>
    <div className="image">
      <img src={image} alt="Personagem Rick" />
    </div>
    <div className="info">
      <h3>{name}</h3>
      <ul>
        <li>Gênero: {gender}</li>
        <li>Espécie: {specie}</li>
      </ul>
    </div>
  </ContainerCard>
  )
}
