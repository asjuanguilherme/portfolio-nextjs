export type StrapiData<Fields> = {
  id: number
  attributes: Fields & {
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

type StrapiMeta = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type StrapiCollectionTypeData<Fields> = {
  data: StrapiData<Fields>[] | null
  meta?: StrapiMeta
}

export type StrapiSingleTypeData<Fields> = {
  data: StrapiData<Fields> | null
  meta?: StrapiMeta
}
