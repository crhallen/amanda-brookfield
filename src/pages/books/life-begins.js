import React from 'react'
import BookInfo from '../../components/BookInfo'

import ftloadCover from '../../assets/covers/blb.jpg'

const BookDescription = ({openModal}) => {
  return (
    <BookInfo
      cover={ftloadCover}
      openModal={openModal}
      blurb={`Life Begins tells the story of 39-year-old Charlotte Turner, trying to get her life back on track after a miserable
          marriage. She discovers in the process that readiness to embrace a better future is not in itself a reliable route
          to happiness. Her forlorn twelve year old son is a constant source of anxiety, while her once close still-married
          girlfriends seem to treat her differently now that she is single, as do their husbands... Yet the biggest hurdle
          Charlotte faces is her own past, boomeranging back at every turn, flinging out answers to questions she has spent
          thirty years trying to leave behind.`}
      reviews={`<div class="reviewtext">An absorbing look at one woman's midlife crisis.</div>
          <div class="reviewref">Bella</div>
          <div class="reviewtext">A warm-hearted, perceptive tale of hope and renewal that shows it is possible to start life again.</div>
          <div class="reviewref">Prima</div>
          <div class="reviewtext">It makes you realise how sometimes even when you think your life is routine and mundane, that much can happen with
            just one small change...some of it was heartbreaking, much of it was satisfying. It left me with a feel good
            factor, something that is my mark of a good book.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">It was a great read and, just like the holiday, I didn’t want it to end.</div>
          <div class="reviewref">Amazon Reviewer</div>
          <div class="reviewtext">I thought it was a beautifully crafted piece of storytelling. I loved the way you kept changing the perspective
            of the story by using different characters to move the narrative along. The theme of trust shaken in childhood
            and impacting on adult relationships was an interesting one and I loved the fact that while you handled it earnestly
            there was always a positive, feel good quality to the story.</div>
          <div class="reviewref">Amazon Reviewer</div>`}
    />
  )
}

export default BookDescription
