import React from "react";
import "../styles/assesmentContent.css";
export default function QuizInfo() {
  return (
    <div className='erwtisi-apantisi'>
      <div className='erwtisi'></div>

      <div className='apantisi quiz'>
        <label className='a'>Strongly Dislike</label>
        <label className='b'> Dislike</label>
        <label className='c'> Unsure</label>
        <label className='d'>Like</label>
        <label className='e'>Strongly Like</label>
      </div>
    </div>
  );
}
