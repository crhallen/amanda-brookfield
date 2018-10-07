import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/bftload.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'ftload'}
      blurb={`After the death of her mother and the end of a new relationship
            leave her heartbroken, novelist Amanda Brookfield finds her once 
            secure world imploding. As despair deepens, she latches onto the 
            idea of getting a puppy just to revive her optimistic spirit. 
            <br />
            <br />Aware that her lifestyle will not suit becoming a dog-owner 
            and warned by friends not to give up her freedom, Amanda nonetheless
            cannot resist Mabel, an eight week old golden doodle. Arming herself
            with an arsenal of equipment, she soon learns that there are no
            short-cuts to training and caring for a dog. In the daily challenges
            that ensue, the constant ups and downs, Amanda realises she is
            starting to come to terms with her bereavement and the prospect of
            facing the rest of her life alone.
            <br />
            <br />
            <em>For The Love of a Dog</em> charts the bigger, more poignant
            story about the labour of emotional recovery after the trauma of
            loss. Mabel shines like a light throughout, the innocent architect
            of rebuilding her owner’s shattered self-belief. Mabel’s own journey
            is equally captivating, as she blossoms into a mischievous,
            endearing head-turner of a companion – as affectionate as she is
            glorious.
            <br />
            <br />
            <a
              href="https://www.instagram.com/amanda_and_mabel_brookfield/"
              target="_blank"
              rel="noopener noreferrer"
              >
              Follow Amanda and Mable on Instagram
            </a>
            `}
      reviews={false}
    />
  )
}

export default BookDescription
