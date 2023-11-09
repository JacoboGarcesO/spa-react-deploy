import './Book.css'

export const Book = ({ book }) => {
  return (
    <article className='book'>
      <h2 className='book__title'>{book.title}</h2>
      <h3 className='book__author'>{book.author}</h3>
      <span className='book__gender'>{book.gender}</span>
      <strong className='book__date'>{book.gender}</strong>
    </article>
  )
}
