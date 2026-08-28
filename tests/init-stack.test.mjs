import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8')
}

test('package.json exposes npm run dev via Vite', () => {
  const pkg = JSON.parse(read('package.json'))
  assert.equal(pkg.scripts.dev, 'vite')
  assert.ok(pkg.devDependencies.vite, 'vite must be a project dependency')
  assert.ok(pkg.dependencies.react, 'react must be a project dependency')
  assert.ok(pkg.dependencies['react-dom'], 'react-dom must be a project dependency')
})

test('Vite + React entry files exist and mount App', () => {
  assert.ok(existsSync(join(root, 'index.html')))
  assert.ok(existsSync(join(root, 'src/main.tsx')))
  assert.ok(existsSync(join(root, 'src/App.tsx')))

  const html = read('index.html')
  const main = read('src/main.tsx')
  assert.match(html, /id="root"/)
  assert.match(html, /src\/main\.tsx/)
  assert.match(main, /from ['"]\.\/App\.tsx['"]/)
  assert.match(main, /createRoot/)
})

test('Tailwind CSS is wired into Vite', () => {
  const pkg = JSON.parse(read('package.json'))
  const viteConfig = read('vite.config.ts')
  const css = read('src/index.css')

  assert.ok(
    pkg.dependencies.tailwindcss || pkg.devDependencies.tailwindcss,
    'tailwindcss must be installed',
  )
  assert.ok(
    pkg.dependencies['@tailwindcss/vite'] ||
      pkg.devDependencies['@tailwindcss/vite'],
    '@tailwindcss/vite must be installed',
  )
  assert.match(viteConfig, /@tailwindcss\/vite/)
  assert.match(viteConfig, /tailwindcss\(\)/)
  assert.match(css, /@import ["']tailwindcss["']/)
})
