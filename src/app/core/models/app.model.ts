export interface IResponseModel {
  product: string;
  init: string;
  dataseries: IDataseries[]
}

export interface IDataseries {
  date: string;
  weather: string;
  temp2m: {
    max: number;
    min: number
  };
  wind10m_max: number;
}
