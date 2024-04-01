import React from "react"
import Screen from "../Screen"
import Iframe from "react-iframe"
import Text from "../Text"
import { SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { Swiper } from "swiper/react"
const Sep = () => {
  const SwiperData = {
    spaceBetween: 50,
    className: "h-full swiper-projects md:max-w-full w-full ",
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Autoplay, Pagination, Navigation],
  }

  return (
    <>
      <Text title="Specilized English Subject">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingTop: "56.2500%",
            paddingBottom: "0",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
            overflow: "hidden",
            borderRadius: "8px",
            willChange: "transform",
          }}
          className="flex-grow w-full h-full "
        >
          <Iframe
            styles={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0",
              left: "0",
              border: "none",
              padding: "0",
              margin: "0",
            }}
            url="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAF-PiJUq6s&#x2F;1stLS-bhdvLvuhJ7VKCFbQ&#x2F;view?embed"
            allow="fullscreen"
          />
        </div>
      </Text>
      <Text
        title="Why Read?"
        img="https://images.pexels.com/photos/4132936/pexels-photo-4132936.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      >
        Today is the age of information. In this generation, it is hard to be
        mentally challenged and not being able to adapt to the status quo in a
        quick manner. It is discouraging that most Filipino children and young
        adults is not up to standards. According to the 2022 PISA Results, We
        are still one of the lowest amongst the countries that have
        participated. In this essay, I will try to convince you that reading and
        being literate is essential this age of information. Reading can help
        with making our life efficient and have your life be easier. Reading is
        not just a way of communication but it can also be used to provide
        physical records. Reading comes in various forms . From reading sign
        languages or reading in braille, and to add more, there are over a
        hundred languages that has different writing systems or even grammar
        that it follows. In it’s sheer size, some language are even forgotten or
        being obsolete. But let’s get to the point of this essay, reading as an
        essential part of our lives. I am a firm believer of the scientific
        method so let us use the scientific method. We can see that most people
        that are deprived of opportunities are mostly illiterate people and one
        of the countries with poor GDP also have low literacy rate. An example
        of this are countries coming from Africa. So If a person cannot read and
        or write, what are the chances of them surviving in to our modern world
        compared to a literate person? According to the paper published by
        Vladimir Ponczek, the people who are literate earns 21.25% more compared
        to those who are illiterate. How ever, in terms of employment rate,
        there was no significant impact. The following study was done in Brazil
        which can be considered as a third world country. But with the rise of
        AI, being illiterate is a big disadvantage now. Especially to the hard
        labor workers. A lot of companies are laying off employees both literate
        and illiterate. On this specific situation, being literate will help you
        gain an edge amongst the other candidates. And on top of that, you can
        easily create things those who can’t read or write can’t do. Not just
        that you earn less compared to those who can read and write, you also
        have to make yourself stand up against the list of a lot of people which
        is hard especially if you don’t have one of the essential skills needed
        to live in the 21st century. Overall, though you may not feel it now,
        but not being able to hone your ability to read and understand will make
        us suffer in the near future. And it is not that will suffer. It will be
        the next generation. Though there is still time for the next PISA exam,
        that doesn’t mean that we don’t act now and act last minute. We need to
        use our time wisely and hone the minds of our future generation and make
        the previous generation realize the real value of reading and
        understanding is.
        <br />
        <span className="max-w-full">
          Sources:
          <br />
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0272775711000483"
            className="text-underline text-blue-500"
          >
            https://www.sciencedirect.com/science/article/abs/pii/S0272775711000483
          </a>
          <a
            href="https://newsinfo.inquirer.net/1871182/pisa-ph-students-still-among-lowest-scorers"
            className="text-underline text-blue-500"
          >
            https://newsinfo.inquirer.net/1871182/pisa-ph-students-still-among-lowest-scorers
          </a>
        </span>
      </Text>
      <Text
        img="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
        title="The Alchemist by Paulo Coelho"
      >
        In life, we have different point of views and how we percieve things.
        Things like on a movie or a book. Some people only want to see the
        ending of a story. While some people think that the beginning and the
        ending doesn’t matter, what matters is the journey. The Alchemist is
        just your typical story of a boy looking for the philosopher’s stone
        where “you can turn lead into gold”. But that is just a sidestory. Here,
        I’ll be reviewing one of the known works by Paulo Coelho, The Alchemist.
        Our main character, Santiago was under the tree and snooze off. He
        always has this dream where there is a “treasure” the foot of the
        Egyptian pyramids and makes him want to go for an adventure for it. A
        gypsy (basically a nomad) was asked to interpret the dream and a gypsy
        told him to go to Egypt and find that treasure. With that, he sold his
        flock of sheep and set off. Of course, he was set back because of the
        bandits that took all of his savings and was forced to work with a
        crystal merchant. As Santiago journeyed through the vast deserts (the
        setting of this would be around/inspired middle east) and bustling
        cities, he encountered countless challenges and learned invaluable
        lessons along the way. Working with the crystal merchant taught him
        about the value of hard work and determination, but deep down, he knew
        that his purpose was way beyond being a merchant’s assistant. Despite
        the setbacks and hardships he faced, Santiago remained steadfast in his
        pursuit of the treasure buried under the Egyptian pyramids. As the
        journey goes on, he encountered a lot of individuals who would change
        his point of view of the world and his own destiny as well. One such
        encounter was with a mysterious old man who called himself the
        Alchemist. The Alchemist possessed ancient wisdom and mystical knowledge
        including the way of turning a lead to gold, and he saw something
        special in Santiago. He became Santiago's guide, teaching him “the
        language of the universe” and “the secrets of alchemy”. Under the
        tutelage of the Alchemist, Santiago learned to listen to his heart and
        follow his dreams with unwavering faith. He discovered that the treasure
        he sought was not just a material wealth buried in the sands of Egypt,
        but it was also a metaphor for his own spiritual journey and
        self-discovery. Together, Santiago and the Alchemist embarked on a
        transformative quest across the vast desert, braving sandstorms, facing
        their deepest fears, and confronting the mysterious forces that attempts
        to get in ther way. Along the way, Santiago learned to harness the power
        of the elements and unlock the hidden potential within himself. As they
        drew closer to the said pyramids in his dreams, Santiago's faith was put
        to the ultimate test. He was forced to confront his doubts and confront
        that the treasure that he is looking for might only be nothing more than
        a figment of his imagination and is not buried under the Egyptian
        Pyramids. But in the end, Santiago's perseverance and belief in the
        power of his dreams still won. At the foot of the ancient pyramids, he
        uncovered the true treasure that had bothered him for so long – the
        realization that the journey itself was the greatest reward, and that
        the alchemy of the soul was the true source of wealth and fulfillment.
        With this newly found wisdom, Santiago returned home a changed man,
        forever transformed by his extraordinary journey and the timeless wisdom
        of the Alchemist. And though his quest for treasure had ended, his
        journey had only just begun, for he now understood that the greatest
        adventures lie not in the distant lands of the world, but within the
        depths of the human heart. Additionally, the treasure he was looking for
        was not really at the bottom of the Pyramids at Egypt but it was under
        the tree he was snoozing off. The story did really take you for a wild
        ride there. When the treasure you were looking for is just underneath
        you is like having a bait on top of your head. You just gone all around
        but the truth is, it was just in front of you all these times. Though I
        enjoyed reading it when I was in my junior. Looking back now, I love the
        part where he did go back to Fatima after he got the treasure. That is
        so rare these days after all. Another thing that intrigues me was the
        reveal of the real location of the “buried treasure”. I think it was
        quite anti clamactic that the bandits that beat him to pulp was the one
        that revealed the real location of the ”buried treasure”. But I did
        understand what the author wants to say in that regards. Compare to
        Santiago that risked everything just to go to the pyramids and validate
        his dreams, the bandits just sat there and wait for opportunities
        without moving an inch towards their dream or goal. Though I hate the
        reveal of the real “buried treasure” location . It was a good metaphor
        and they properly showed the difference between one working hard to
        attain their dreams and one waiting for a snow in the dessert to happen
        to attain their dreams. Over all, the Alchemist is not that long to
        read. It was my first ever book that got me hooked in to reading in the
        first place and I highly recommend it to new readers or people that
        would like to pass time. Though I am not a fan of the genre since I am
        more of a rom-com kind of person. It would be an understatement if I say
        that this is good book. And this was popular, a best seller, and
        received a lot of award for a reason. Just like Veronika Decides to Die
        which is another work byPaulo Coelho. This will not fail to entertain
        you and hook you into the world of literature.
      </Text>

      <Text title="Reader's Reponse">
        <Swiper {...SwiperData}>
          <SwiperSlide>
            <Iframe
              url="/assets/SEP/English.pdf"
              className="w-full h-full"
            ></Iframe>
          </SwiperSlide>
          <SwiperSlide>
            <Iframe
              url="/assets/SEP/READING%2BPROCESS%2BWORKSHEET%2BD3%2BT12122%20(1).pdf"
              className="w-full  h-full"
            ></Iframe>
          </SwiperSlide>
          <SwiperSlide>
            <Iframe
              url="/assets/SEP/TW04_MAMINTA_JOHNANGELO_RRF-1.pdf"
              className="w-full h-full"
            ></Iframe>
          </SwiperSlide>
        </Swiper>
      </Text>
      <Text title="What I've learned">
      Studying specialized English subjects has been a journey of discovery and growth, offering insights into language nuances, cultural contexts, and professional applications. In this document, I share some of the key lessons I've learned in my exploration of specialized English subjects, highlighting their significance and relevance in various domains.

Specialized English subjects have taught me the importance of precision in technical writing. Whether it's crafting scientific reports, engineering documentation, or legal briefs, clarity and accuracy are paramount. I've learned to use language with meticulous attention to detail, ensuring that my writing effectively communicates complex concepts to a specific audience.

Each specialized field has its own unique tone and style conventions. I've learned to adapt my writing style to suit the requirements of different contexts, whether formal, informal, academic, or professional. Understanding the nuances of tone and style enables me to effectively communicate with diverse audiences and convey information in a manner that resonates with them.

Specialized English subjects have introduced me to the concept of discourse communities – groups of individuals who share common goals, interests, and communication practices within a particular field or profession. I've learned to navigate these communities by familiarizing myself with their language norms, conventions, and specialized terminology. By understanding the discourse of a community, I can participate more effectively in discussions, collaborations, and knowledge sharing.

In specialized English study, research and citation practices are fundamental skills for producing credible and scholarly work. I've learned to conduct thorough research using reliable sources and to cite references accurately according to established citation styles such as APA, MLA, or Chicago. These practices not only uphold academic integrity but also demonstrate respect for the work of others and provide transparency in scholarly communication.

Language is deeply intertwined with culture, and understanding cultural nuances is essential for effective communication in global contexts. I've learned to approach language with cultural sensitivity, recognizing that words and expressions may carry different meanings or connotations across cultures. By cultivating cross-cultural awareness, I can navigate cultural differences with respect and adapt my communication to foster mutual understanding and collaboration.

Specialized English study has provided me with opportunities for professional development and networking within my field of interest. I've learned the importance of actively engaging with professional associations, attending conferences, and participating in online forums and communities. These activities not only expand my knowledge and skills but also enable me to connect with peers, mentors, and potential collaborators, enriching my professional journey.

Reflecting on my experience with specialized English subjects, I'm reminded of the profound impact they've had on my language proficiency, cultural awareness, and professional growth. Each lesson learned has equipped me with valuable skills and insights that continue to shape my academic and professional endeavors. As I continue to explore and engage with specialized English study, I look forward to further expanding my knowledge and contributing to the vibrant discourse of my chosen field.
      </Text>
    </>
  )
}

export default Sep
