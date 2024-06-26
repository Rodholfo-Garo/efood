class Pratos {
  // Faz parte da classe

  title: string
  note: number
  description: string
  infos?: string[]
  image: string
  id: number

  constructor(
    // Argumento do construtor
    id: number,
    title: string,
    note: number,
    description: string,
    infos: string[],
    image: string
  ) {
    // Fazendo Atribuição
    this.id = id
    this.title = title
    this.note = note
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Pratos
