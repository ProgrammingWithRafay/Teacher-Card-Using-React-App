import React from 'react';
import TeacherCard from './TeacherCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Our Teachers</h1>
      <TeacherCard
        name="Rafay Ali"
        subject="Web Development"
        email="rafay.ali@nu.edu.pk"
        experience="2 Years"
        bio="Mr. Rafay teaches web development and loves helping students learn modern technologies."
        photo="https://i.pravatar.cc/150?img=11"
      />
      <TeacherCard
        name="Ahmad Kamran"
        subject="Database Systems"
        email="ahmad.kamran@nu.edu.pk"
        experience="5 Years"
        bio="Mr. Ahmad is an expert in databases and has worked with many top companies before teaching."
        photo="https://i.pravatar.cc/150?img=47"
      />
    </div>
  );
}

export default App;