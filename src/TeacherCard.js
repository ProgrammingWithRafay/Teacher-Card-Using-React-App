import React from 'react';
import './TeacherCard.css';

function TeacherCard(props) {
  return (
    <div className="card">
      <img src={props.photo} alt={props.name} className="card-photo" />
      <h2 className="card-name">{props.name}</h2>
      <p className="card-subject">📚 {props.subject}</p>
      <p className="card-experience">⏳ Experience: {props.experience}</p>
      <p className="card-bio">{props.bio}</p>
      <a href={`mailto:${props.email}`} className="card-email">
        ✉️ {props.email}
      </a>
    </div>
  );
}

export default TeacherCard;