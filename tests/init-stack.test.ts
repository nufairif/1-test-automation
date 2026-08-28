import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function read(relativePath: string) {
  return readFileSync(join(root, relativePath), 'utf8')
}

describe('initialized Vite + React + Tailwind stack', () => {
  it('exposes npm run dev via Vite', () => {
    const pkg = JSON.parse(read('package.json')) as {
      scripts: Record<string, string>
      dependencies: Record<string, string>
      devDependencies: Record<string, string>
    }

    expect(pkg.scripts.dev).toBe('vite')
    expect(pkg.devDependencies.vite).toBeTruthy()
    expect(pkg.dependencies.react).toBeTruthy()
    expect(pkg.dependencies['react-dom']).toBeTruthy()
  })

  it('mounts App from the Vite + React entry files', () => {
    expect(existsSync(join(root, 'index.html'))).toBe(true)
    expect(existsSync(join(root, 'src/main.tsx'))).toBe(true)
    expect(existsSync(join(root, 'src/App.tsx'))).toBe(true)

    const html = read('index.html')
    const main = read('src/main.tsx')
    expect(html).toMatch(/id="root"/)
    expect(html).toMatch(/src\/main\.tsx/)
    expect(main).toMatch(/from ['"]\.\/App\.tsx['"]/)
    expect(main).toMatch(/createRoot/)
  })

  it('wires Tailwind CSS into Vite', () => {
    const pkg = JSON.parse(read('package.json')) as {
      dependencies?: Record<string, string>
      devDependencies?: Record<string, string>
    }
    const viteConfig = read('vite.config.ts')
    const css = read('src/index.css')

    expect(pkg.dependencies?.tailwindcss || pkg.devDependencies?.tailwindcss).toBeTruthy()
    expect(
      pkg.dependencies?.['@tailwindcss/vite'] ||
        pkg.devDependencies?.['@tailwindcss/vite'],
    ).toBeTruthy()
    expect(viteConfig).toMatch(/@tailwindcss\/vite/)
    expect(viteConfig).toMatch(/tailwindcss\(\)/)
    expect(css).toMatch(/@import ["']tailwindcss["']/)
  })
})
