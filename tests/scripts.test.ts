import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('package.json test and lint scripts', () => {
  const pkg = JSON.parse(
    readFileSync(join(root, 'package.json'), 'utf8'),
  ) as {
    scripts: Record<string, string>
    devDependencies: Record<string, string>
  }

  it('runs tests with Vitest', () => {
    expect(pkg.scripts.test).toMatch(/\bvitest\b/)
    expect(pkg.devDependencies.vitest).toBeTruthy()
  })

  it('runs lint with ESLint', () => {
    expect(pkg.scripts.lint).toMatch(/\beslint\b/)
    expect(pkg.devDependencies.eslint).toBeTruthy()
  })
})
