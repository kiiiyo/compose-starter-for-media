// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IAuthorFields {
  /** DisplayName */
  displayName: string

  /** AvatarImage */
  avatarImage?: Asset | undefined
}

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'author'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ICategoryFields {
  /** DisplayName */
  displayName: string

  /** Slug */
  slug: string

  /** Description */
  description?: string | undefined
}

export interface ICategory extends Entry<ICategoryFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'category'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IPostFields {
  /** Title */
  title: string

  /** Slug */
  slug: string

  /** Description */
  description?: string | undefined

  /** Content */
  content?: Document | undefined

  /** Image */
  image?: Asset | undefined

  /** Authors */
  authors: IAuthor

  /** Categories */
  categories: ICategory

  /** Tags */
  tags?: ITag[] | undefined
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'post'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface ITagFields {
  /** DisplayName */
  displayName: string

  /** Slug */
  slug: string

  /** Description */
  description?: string | undefined
}

export interface ITag extends Entry<ITagFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'tag'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'author' | 'category' | 'post' | 'tag'

export type LOCALE_CODE = 'ja'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'ja'
