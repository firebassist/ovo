

const API_URL = 'https://dl.dropboxusercontent.com/s/b3hvg307y3t2qjy/albums.json';

export const selectLibraryActionCreator = (id, title, description) => {
  return {
    type: 'select_library',
    payloadId: id,
    payloadTitle: title,
    payloadDescription: description
  }
}

export const addLibraryActionCreator = (title, description) => {
  return {
    type: 'add_library',
    payloadTitle: title,
    payloadDescription: description
  }
}
