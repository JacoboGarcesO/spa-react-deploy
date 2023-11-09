import { useState } from 'react'
import './BookForm.css'

export const BookForm = ({ createBook }) => {
  const [formData, setFormData] = useState({
    id: globalThis.crypto.randomUUID(),
    title: null,
    author: null,
    gender: null,
    producctionDate: null
  })

  const onChangeInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createBook(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='book-form'>
      <h1 className='book-form__title'>Crear libro</h1>
      <fieldset className='book-form__fieldset'>
        <div className='book-form__input'>
          <label htmlFor='title'>Título</label>
          <input onChange={onChangeInput} name='title' type='text' id='title' required />
        </div>

        <div className='book-form__input'>
          <label htmlFor='author'>Autor</label>
          <input onChange={onChangeInput} name='author' type='text' id='author' required />
        </div>

        <div className='book-form__input'>
          <label htmlFor='gender'>Género</label>
          <input onChange={onChangeInput} name='gender' type='text' id='gender' required />
        </div>

        <div className='book-form__input'>
          <label htmlFor='producctionDate'>Fecha de producción</label>
          <input onChange={onChangeInput} name='producctionDate' type='date' id='producctionDate' required />
        </div>
      </fieldset>

      <button className='book-form__button' type='submit'>Crear</button>
    </form>
  )
}
