export interface Comment {
  id: number
  name: string
  description: string
  legalNorm: Link[]
  references: Link[]
  constraint: string
}

export interface Link {
  to: string
  text: string
}

export type CommentKeys = keyof Comment
