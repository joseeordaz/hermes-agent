import { describe, expect, it } from 'vitest'

import { artWidth, parseRichMarkup } from '../banner.js'

describe('custom banner art markup', () => {
  it('keeps colored spans and adjacent plain text on one rendered row', () => {
    const lines = parseRichMarkup('left[#ff0000]AA[/][#00ff00]BB[/]right')

    expect(lines).toEqual([
      [
        ['', 'left'],
        ['#ff0000', 'AA'],
        ['#00ff00', 'BB'],
        ['', 'right']
      ]
    ])
    expect(artWidth(lines)).toBe(13)
  })
})
