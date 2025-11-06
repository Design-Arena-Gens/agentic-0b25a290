'use client'

import { useState } from 'react'
import styles from './page.module.css'

const quotes = [
  {
    text: "Dituria është jeta e zemrës nga injoranca dhe drita e syve nga errësira.",
    category: "Dituria"
  },
  {
    text: "Ai që kërkon dituri duhet ta dijë se ajo është adhurimi më i mirë.",
    category: "Dituria"
  },
  {
    text: "Nuk ka dituri pa devotshmëri, dhe nuk ka devotshmëri pa dituri.",
    category: "Devotshmëria"
  },
  {
    text: "Mençuria është përgatitja më e mirë për botën tjetër.",
    category: "Mençuria"
  },
  {
    text: "Njeriu më i ditur është ai që mbledh diturinë e njerëzve tek e vetja.",
    category: "Dituria"
  },
  {
    text: "Durim dhe tolerancë janë cilësitë më të larta të besimtarit.",
    category: "Virtyte"
  },
  {
    text: "Ai që është modest në diturinë e tij, Allahu do ta lartësojë.",
    category: "Modestia"
  },
  {
    text: "Gjuha është përkthyesi i zemrës; kjo që zemra fshehin, gjuha e zbulon.",
    category: "Urtësia"
  },
  {
    text: "Dituria është thesar që nuk pushon së dhëni, kurse pasuria është diçka që pakësohet me shpenzim.",
    category: "Dituria"
  },
  {
    text: "Bukuria e fjalës është në sinqeritet, dhe bukuria e dijes është në veprim.",
    category: "Vepra"
  },
  {
    text: "Është më mirë të heshtësh dhe të mendohen budalla, se sa të flasësh dhe të heqësh çdo dyshim.",
    category: "Heshtja"
  },
  {
    text: "Drejtësia është themeli i sundimit dhe besimi është themeli i shoqërisë.",
    category: "Drejtësia"
  },
  {
    text: "Sabri në sprova është gjysma e imanit.",
    category: "Sabri"
  },
  {
    text: "Ai që mëson diturinë por nuk vepron me të, është si ai që aron por nuk mbjell.",
    category: "Vepra"
  },
  {
    text: "Dituria e shton respektin dhe ulësinë tek besimtari.",
    category: "Dituria"
  }
]

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const getNewQuote = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      setCurrentQuote(quotes[randomIndex])
      setIsAnimating(false)
    }, 300)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Ibn Abdul-Barr</h1>
        <p className={styles.subtitle}>يوسف بن عبد الله بن محمد بن عبد البر</p>

        <div className={`${styles.quoteCard} ${isAnimating ? styles.fadeOut : styles.fadeIn}`}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quote}>{currentQuote.text}</p>
          <div className={styles.category}>{currentQuote.category}</div>
        </div>

        <button onClick={getNewQuote} className={styles.button}>
          Fjalë e re
        </button>

        <div className={styles.bio}>
          <h2>Rreth Ibn Abdul-Barr</h2>
          <p>
            Ibn Abdul-Barr (978-1071) ishte një dijetar i madh andalusian, specialist në hadith,
            fikh dhe histori. Ai është i njohur për veprat e tij monumentale si "Al-Tamhid" dhe
            "Al-Istidhkar", që janë midis komentareve më të rëndësishme të Muwatta së Imam Malik.
          </p>
        </div>
      </div>
    </main>
  )
}
