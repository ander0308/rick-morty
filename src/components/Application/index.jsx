import axios from "axios";
import React, { useEffect, useState } from "react";

import { CardCharacter } from "../CardCharacter";

import { ContainerApp, ContentCharacteres, HeaderApp, Loader } from "./styles";

import IconLoader from '../../assets/loader.gif'

export function Application() {
  const [ characters, setCharacters ] = useState([])
  const [ page, setPage ] = useState(1)
  const [ countPage, setCountPage ] = useState('')
  const [ qtdCharacters, setQtdCharacters ] = useState('')
  const [ isLoader, setIsLoader ] = useState(true)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => {
      const array = [...characters, ...response.data.results ]
      setCharacters(array)
      setCountPage(response.data.info.pages)
      setQtdCharacters(response.data.info.count)
      setIsLoader(false)
    })
    // USANDO FETCH****************8
    // fetch('https://rickandmortyapi.com/api/character')
    // .then((response)=>{
    //   return response.json()
    // }).then((data) => {
    //   setCharacters(data.results)
    // })
  }, [page])

  return (
    <>
    {
      (isLoader) && <Loader><img src={IconLoader} alt="Icone de Loader" /></Loader>
    }

      <ContainerApp>
        <HeaderApp>
          <h1>Ricky and Morty</h1>
          <span>N* de personagens: {qtdCharacters}</span>
        </HeaderApp>
        <ContentCharacteres>
          <div>
            {
              characters && characters.map(({id, image, name, gender, species}) => {
                return(
                  <CardCharacter
                    key={id}
                    image={image}
                    name={name}
                    gender={gender}
                    specie={species}
                />
                )
              })
            }
          </div>

          {/* Logica para esconder o botão quando chegar na ultima página */}
          {
            (!(page === countPage)) && <button onClick={ ()=> {setPage(page + 1)} }>Carregar mais</button>
          }
        </ContentCharacteres>
      </ContainerApp>
    </>
  )
}
