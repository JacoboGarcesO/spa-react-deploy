export const createBook = (book) => {
  return fetch('...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then((response) => response.json())
    .then((response) => response)
}

export const updateBook = (book) => {
  return fetch('...', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then((response) => response.json())
    .then((response) => response)
}

export const deleteBook = (bookId) => {
  return fetch(`http://tu-api/libros/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((response) => response)
}
