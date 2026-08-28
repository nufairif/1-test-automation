import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App.tsx'

describe('App', () => {
  it('renders the Navbar and Landing Page together', () => {
    render(<App />)

    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /welcome to test automation/i }),
    ).toBeInTheDocument()
  })
})
