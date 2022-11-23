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

export type StrapiCollectionRequest<Fields> = {
  data: StrapiData<Fields>[]
  meta: StrapiMeta
}

export type StrapiSingleRequest<Fields> = {
  data: StrapiData<Fields>
  meta: StrapiMeta
}

export type StrapiRelationalField<Fields> = {
  data: StrapiData<Fields> | null
}
