export interface Employee {
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  passport: Passport

}

export interface Passport {
  id: number,
  passportNumber: string,
  validDate: string,
  countries: Country[]
}

export interface Country {
  id: number,
  countryName: string,
  capitalCity: string,
  population: number,
  imgURL: string
}