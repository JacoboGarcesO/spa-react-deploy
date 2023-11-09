import { Book } from '../Book/Book'
import './BooksList.css'

export const BooksList = ({ data }) => {
  return (
    <div className='books-list'>
      {data && data.map((item) => {
        return <Book key={item.id} book={item} />
      })}
    </div>
  )
}
