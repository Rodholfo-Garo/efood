class Pratos {
  title: string
  note: number
  description: string
  infos?: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    note: number,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.note = note
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Pratos
