/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'themes'

import HeroService from 'services/Hero'
import ListComics from 'components/organisms/ListComics'

import mockHero from '__test__/mocks/hero'

describe('Testando componente de listagem de quadrinhos', () => {
  test('Deve renderizar os ultimos lançamentos do heroi', async () => {
    const params = {
      limit: '10',
      orderBy: '-onsaleDate',
      offset: '0',
    }

    const { data: dataHero } = await HeroService.getHeroById(
      String(mockHero.id)
    )
    const hero = dataHero.data.results[0]

    const { data } = await HeroService.getHeroComics(String(hero.id), params)

    const comics = data.data.results
    const lastComic = comics[0].title
    const firstComic = comics[comics.length - 1].title

    render(
      <ThemeProvider theme={theme}>
        <ListComics comics={comics} />
      </ThemeProvider>
    )
    const lastComicElement = screen.getByAltText(lastComic)
    const firstComicElement = screen.getByAltText(firstComic)

    expect(lastComicElement).toBeInTheDocument()
    expect(firstComicElement).toBeInTheDocument()
  })

  test('Deve renderizar o empty state da listagem de quadrinhos', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ListComics comics={[]} />
      </ThemeProvider>
    )
    const emptyState = screen.getByText(
      'Não há informações sobre os ultimos lançamentos'
    )

    expect(emptyState).toBeInTheDocument()
  })
})
