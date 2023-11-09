import { useEffect, useState } from 'react'
import { Container } from '../components/Container/Container'
import { BooksList } from '../components/BooksList/BooksList'
import { BookForm } from '../components/BookForm/BookForm'
import { createBook, updateBook, deleteBook } from '../../infrastructure/services/books.js'

export const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((response) => setData(response))
  }, [])

  const create = (formData) => {
    createBook(formData).then((response) => {
      setData([...data, response])
    })
  }

  const update = (formData) => {
    updateBook(formData).then((response) => {
      const filteredBooks = data.filter((book) => {
        return book.id !== formData.id
      })
      setData([...filteredBooks, response])
    })
  }

  const deleteB = (bookId) => {
    deleteBook(bookId).then((response) => {
      const filteredBooks = data.filter((book) => {
        return book.id !== bookId
      })
      setData(filteredBooks)
    })
  }

  return (
    <Container>
      <BookForm createBook={create} />
      <BooksList data={data} />
    </Container>
  )
}
