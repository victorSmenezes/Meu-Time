'use client'

import { GlobalStyle } from '../styles/globalStyles'

import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { Container, FilterBox, Header, BoxList, List, BoxMenuTitle } from './page.styles'
import Select from '@/components/Select/Select'
import Options from '@/components/Options/Options'

export default function Home() {
  const [countries, setCountries] = useState()

  /*  useEffect(() => {
    async function teste() {
      const { data: { response } } = await api.get('countries')
      setCountries(response)

    }
    teste()

  }, [])  */

  return (
    <>
      <GlobalStyle />

      <Header>
        <h1>MEU TIME</h1>
      </Header>

      <Container>
        <FilterBox>
          <Select
            name='coutrie_id'
            text="Selecione um País"
            options={countries}
          />

          <Select
            name='league_id'
            text="Selecione um Liga"
            options={countries}
          />


        </FilterBox>

        <BoxList>
          <BoxMenuTitle>
            {/* <img src='' alt='' /> */}
            <option>Time</option>
          </BoxMenuTitle>

          <Options/>

        </BoxList>
      </Container>
    </>
  )
}
