import React from 'react'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className= {styles.container}>
      <Navbar/>
      <Board/>
      
    </div>
  )
}

export default Home
