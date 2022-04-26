/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'themes'

import HeroService from 'services/Hero'
import SectionHero from 'components/organisms/SectionHero'

import mockHero from '__test__/mocks/hero'

describe('Testando componente de sessao do heroi', () => {
  test('Deve renderizar o nome do heroi', async () => {
    const { data } = await HeroService.getHeroById(String(mockHero.id))

    const hero = data.data.results[0]

    render(
      <ThemeProvider theme={theme}>
        <SectionHero
          hero={hero}
          dateLastComic="13 de dezembro"
          isFavorite
          onChangeFavorite={() => {}}
        />
      </ThemeProvider>
    )
    const heroName = screen.getByText(hero.name)

    expect(heroName).toBeInTheDocument()
  })

  test('Deve renderizar o a quantidade de quadrinhos do heroi', async () => {
    const { data } = await HeroService.getHeroById(String(mockHero.id))

    const hero = data.data.results[0]
    const comicsAvailable = hero.comics.available

    render(
      <ThemeProvider theme={theme}>
        <SectionHero
          hero={hero}
          dateLastComic="13 de dezembro"
          isFavorite
          onChangeFavorite={() => {}}
        />
      </ThemeProvider>
    )
    const qtdComics = screen.getByText(comicsAvailable)

    expect(qtdComics).toBeInTheDocument()
  })

  test('Deve renderizar o a quantidade de filmes do heroi', async () => {
    const { data } = await HeroService.getHeroById(String(mockHero.id))

    const hero = data.data.results[0]
    const seriesAvailable = hero.series.available

    render(
      <ThemeProvider theme={theme}>
        <SectionHero
          hero={hero}
          dateLastComic="13 de dezembro"
          isFavorite
          onChangeFavorite={() => {}}
        />
      </ThemeProvider>
    )
    const qtdSeries = screen.getByText(seriesAvailable)

    expect(qtdSeries).toBeInTheDocument()
  })
})
