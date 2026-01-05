import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileCard from './components/ProfileCard.jsx'

function App() {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>My Team Portfolio</h1>

        <ProfileCard
          name="รณกร ปิตินานนท์"
          role="Student @ CEDT"
          bio="อยากขี่คาปิบาร่ายักษ์ครับ"
        />


      <ProfileCard
        name="John Doe"
        role="Guest Developer"  
        bio="I love coding and learning new things."
      />

      </div>
  )

}

export default App
