import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Alec</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <div className="imageContainer">
            <a href="https://github.com/Kuzyi">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />{' '}
            </a>
            <a href="https://www.linkedin.com/in/alec-kuzma/">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />{' '}
            </a>
            <a href="mailto:aekwow321@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" />{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, React</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS MySQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C#</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
