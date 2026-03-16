import React from 'react';
import TeacherCard from './TeacherCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Our Teachers</h1>
      <TeacherCard
        name="Mr. Ahmed Ali"
        subject="Web Development"
        email="ahmed.ali@university.edu"
        experience="5 Years"
        bio="Mr. Ahmed teaches web development and loves helping students learn modern technologies."
        photo="https://i.pravatar.cc/150?img=11"
      />
      <TeacherCard
        name="Ms. Sara Khan"
        subject="Database Systems"
        email="sara.khan@university.edu"
        experience="8 Years"
        bio="Ms. Sara is an expert in databases and has worked with many top companies before teaching."
        photo="https://i.pravatar.cc/150?img=47"
      />
    </div>
  );
}

export default App;