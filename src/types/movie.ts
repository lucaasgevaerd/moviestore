export type MoviePages = {
  page: number,
  results: [
    {
      poster_path: string,
      adult?: boolean,
      overview?: string,
      release_date: string,
      genre_ids?: [{
        ids: [number],
      }],
      id: number,
      original_title?: string,
      original_language?: string,
      title: string,
      backdrop_path?: string,
      popularity?: number,
      vote_count?: number,
      video?: string,
      vote_average: number
    }]
}