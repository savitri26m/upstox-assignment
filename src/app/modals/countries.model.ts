export class ICountry {
    id: number
    name: string
    region: string
    numericCode: number
    nativeName: string
    flag: string
    capital: string
    population: number
    alpha3Code: string
    currencies: ICurrency[]
    subregion: string
    languages: ILanguage
    borders: string[]
}

export class ILanguage{
    iso639_1: string
    iso639_2: string
    name:string
    nativeName: string
}

export class ICurrency{
    code: string
    name: string
    symbol:string
}

