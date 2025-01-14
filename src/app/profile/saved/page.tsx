import React from 'react'
import book1 from '/public/images/book1.png'
import book2 from '/public/images/book2.png'
import book3 from '/public/images/book3.png'
import book4 from '/public/images/book4.png'
import book5 from '/public/images/book5.png'

const Saved = () => {
  return (
    <div className="rounded-[14px] bg-white p-[24px] w-[966px] shadow-lg grid grid-cols-3 gap-[50px]">
      <img src={book1.src} alt="book" />
      <img src={book2.src} alt="book" />
      <img src={book3.src} alt="book" />
      <img src={book4.src} alt="book" />
      <img src={book5.src} alt="book" />
    </div>
  )
}

export default Saved
