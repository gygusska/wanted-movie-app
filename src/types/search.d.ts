interface ISearch {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface ISearchAPIRes {
  Search: ISearch[]
  totalResults: string
  Response: string
}
