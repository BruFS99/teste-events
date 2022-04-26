/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'themes'

import HeroService from 'services/Hero'
import ListHeroes from 'components/molecules/ListHeroes'
import hero from '__test__/mocks/hero'

describe('Testando componente de List Heroes', () => {
  test('Deve renderizar o empty state da listagem', () => {
    render(
      <ThemeProvider theme={theme}>
        <ListHeroes
          heroes={[]}
          loading={false}
          error={false}
          onChangeFavorite={() => {}}
          onClick={() => {}}
        />
      </ThemeProvider>
    )
    const emptyState = screen.getByText(
      /Não achamos nenhum herói para os valores definidos/i
    )

    expect(emptyState).toBeInTheDocument()
  })

  test('Deve renderizar o error state da listagem', () => {
    render(
      <ThemeProvider theme={theme}>
        <ListHeroes
          error
          heroes={[]}
          loading={false}
          onChangeFavorite={() => {}}
          onClick={() => {}}
        />
      </ThemeProvider>
    )
    const errorState = screen.getByText(
      /Houve um erro ao tentar buscar os dados/i
    )

    expect(errorState).toBeInTheDocument()
  })

  test('Deve renderizar um heroi na listagem', () => {
    render(
      <ThemeProvider theme={theme}>
        <ListHeroes
          heroes={[hero]}
          error={false}
          loading={false}
          onChangeFavorite={() => {}}
          onClick={() => {}}
        />
      </ThemeProvider>
    )

    const heroName = screen.getByText(hero.name)

    expect(heroName).toBeInTheDocument()
  })

  test('Deve renderizar a listagem de herois default', async () => {
    const limit = 10

    const { data } = await HeroService.getHeroes({
      limit,
    })

    const heroes = data.data.results

    const firstHero = heroes[0].name
    const lastHero = heroes[limit - 1].name

    render(
      <ThemeProvider theme={theme}>
        <ListHeroes
          heroes={heroes}
          error={false}
          loading={false}
          onChangeFavorite={() => {}}
          onClick={() => {}}
        />
      </ThemeProvider>
    )

    const firstHeroName = screen.getByText(firstHero)
    const lastHeroName = screen.getByText(lastHero)

    expect(firstHeroName).toBeInTheDocument()
    expect(lastHeroName).toBeInTheDocument()
  })
})
