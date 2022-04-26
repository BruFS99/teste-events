/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'themes'

import SectionHeroes from 'components/organisms/SectionHeroes'

import hero from '__test__/mocks/hero'

describe('testando componente de sessão de heróis', () => {
  test('Deve listar que foram listado 0 herois', () => {
    render(
      <ThemeProvider theme={theme}>
        <SectionHeroes
          listHeroes={[]}
          showLoadMore={false}
          isOrderByName={false}
          loading={false}
          error={false}
          handleToggleOrderByName={() => {}}
          favoriteHeroesIsVisible={false}
          handleToggleVisibleFavoritHeroes={() => {}}
          handleFavoriteChange={() => {}}
          handleClickHeroCard={() => {}}
          loadingMore={false}
          totalHeroes={0}
        />
      </ThemeProvider>
    )
    const counterHero = screen.getByText(/Encontrados 0 heróis/i)

    expect(counterHero).toBeInTheDocument()
  })

  test('Deve mostrar button de carregar mais', async () => {
    // não consegui usar o hook aqui para simular direito a paginação :(
    render(
      <ThemeProvider theme={theme}>
        <SectionHeroes
          listHeroes={[hero]}
          showLoadMore
          isOrderByName={false}
          loading={false}
          error={false}
          handleToggleOrderByName={() => {}}
          favoriteHeroesIsVisible={false}
          handleToggleVisibleFavoritHeroes={() => {}}
          handleFavoriteChange={() => {}}
          handleClickHeroCard={() => {}}
          loadingMore={false}
          totalHeroes={0}
        />
      </ThemeProvider>
    )
    const buttonLoadMore = screen.getByText(/Carregar mais/i)

    expect(buttonLoadMore).toBeInTheDocument()
  })
})
