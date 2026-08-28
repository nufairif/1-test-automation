import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LandingPage } from './LandingPage.tsx'

describe('LandingPage', () => {
  it('renders the landing heading and about section', () => {
    render(<LandingPage />)

    expect(
      screen.getByRole('heading', { name: /welcome to test automation/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^about$/i })).toBeInTheDocument()
    expect(
      screen.getByText(/simple landing page/i),
    ).toBeInTheDocument()
  })
})
