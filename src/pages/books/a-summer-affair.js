import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/basa.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      bookId={'asa'}
      blurb={`While Kate Latimer is delighting in the discovery that there is life after children – pursuing the luxury of time
          to herself and the possibility of a creative career - her forty-six-year-old husband, Nicholas, finds himself sliding
          inexorably into the thick of a mid-life crisis. The evident happiness of his spouse, the growing independence of
          his three children only serve to heighten his gloom and disintegrating sense of self-worth. As happiness slips
          from his grasp, so does good sense, leading him towards the most dubious of consolations. Kate, meanwhile, finds
          herself drawn to the enigmatic Max Urquart, a new arrival in the village with an agenda of his own.`}
      reviews={`<div class="reviewtext">A classy tale of modern relationships.</div>
          <div class="reviewref">Manchester Evening News</div>
          <div class="reviewtext">A perceptive, astute novel for Joanna Trollope fans.</div>
          <div class="reviewref">Portsmouth News</div>`}
    />
  )
}

export default BookDescription
