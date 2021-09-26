
export type UsersState = {
  favorites: {
    [albumId: string]: {
      items: {
        [photoId: string]: any
      }
      [x: string]: any,
    }
  },
}