import './Header.css'
import React from 'react'

export default function Header({ text }) {
  return (
    <section className="Header">
      <h1>{text}</h1>
    </section>
  )
}