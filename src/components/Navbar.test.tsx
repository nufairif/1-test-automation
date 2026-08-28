import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar.tsx'

describe('Navbar', () => {
  it('renders the site brand and main navigation links', () => {
    render(<Navbar />)

    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /test automation/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument()
  })
})
