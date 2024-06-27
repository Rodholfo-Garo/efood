class PratosPerfil {
  title: string
  description: string
  infos?: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default PratosPerfil
