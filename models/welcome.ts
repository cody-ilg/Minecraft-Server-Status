export interface Disney {
  info: Info;
  data: Datum[];
}

export interface Datum {
  _id:             number;
  films:           string[];
  shortFilms:      any[];
  tvShows:         string[];
  videoGames:      string[];
  parkAttractions: string[];
  allies:          any[];
  enemies:         any[];
  sourceUrl:       string;
  name:            string;
  imageUrl?:       string;
  createdAt:       Date;
  updatedAt:       Date;
  url:             string;
  __v:             number;
}

export interface Info {
  count:        number;
  totalPages:   number;
  previousPage: null;
  nextPage:     string;
}
