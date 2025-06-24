export interface IAnswer {
  error?: string;
  errType?: string;
  PHPSESSID?: string;
  // id?: string
  token?: string;
}

export interface Fighter {
  ID:     number;  // `json:"id"`
  Name:   string; // `json:"name"`
  Club:   string; // `json:"club"`
  Master: number;  // `json:"master"`
  Time :  number;  // `json:"time"`
}
export interface FighterRaw {
  id:     number;  // `json:"id"`
  name:   string; // `json:"name"`
  club:   string; // `json:"club"`
  master: number;  // `json:"master"`
  time:  number;  // `json:"time"`
}
