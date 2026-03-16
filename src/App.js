import React from 'react';
import TeacherCard from './TeacherCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Our Teachers</h1>
      <TeacherCard
        name="Rafay Ali"
        subject="Database Systems"
        email="rafay.ali@nu.edu.pk"
        experience="2 Years"
        bio="Mr. Rafay teaches database systems and loves helping students learn modern technologies."
        photo={require('./RafayAli.png')}
      />
      <TeacherCard
        name="Ahmad Kamran"
        subject="Web Development"
        email="ahmad.kamran@nu.edu.pk"
        experience="2 Years"
        bio="Mr. Ahmad is an expert in web development and has worked with many top companies before teaching."
        photo={require('./AhmadKamran.png')}
      />
    </div>
  );
}

export default App;