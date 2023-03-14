import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

async function importPhotos(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/photos/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

async function importCasestudies(articleFilename) {
  let { meta, default: component } = await import(
    `../pages/casestudies/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function getAllPhotos() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/photos'),
  })

  let articles = await Promise.all(articleFilenames.map(importPhotos))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export async function getAllCasestudies() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/casestudies'),
  })

  let articles = await Promise.all(articleFilenames.map(importCasestudies))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}