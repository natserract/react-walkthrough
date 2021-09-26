
export type UsersState = {
  users: {
    favorites: {
      [albumId: string]: {
        items: {
          [photoId: string]: any
        }
        [x: string]: any,
      }
    },
    comments: {
      [photoId: string]: {
        id: string;
        userId: string;
        albumId: string;
        contents: {
          text: string,
          id: string,
        }[],
        createdDate?: Date
      }
    }
  }
}