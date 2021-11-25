import React from "react";
import "../../styles/assesmentContent.css";
import { questionsArtistic } from "../questions/ArtisticQuestions";
import { questionsConventional } from "../questions/ConventionalQuestions";
import { questionsEnterprising } from "../questions/EnterprisingQuestions";
import { questionsInvestigative } from "../questions/InvestigativeQuestions";
import { questionsRealistic } from "../questions/RealisticQuestions";
import { questionsSocial } from "../questions/SocialQuestions";

export default function AssesmentContent({
  assesmentItem,
  assesmentItemC,

  //setCounter,
  changeR,
  changeI,
  changeA,
  changeS,
  changeE,
  changeC,
}) {
  let name = "";
  //setting the id's of each question
  switch (assesmentItem) {
    case questionsRealistic:
      name = "R" + (assesmentItemC + 1);
      break;
    case questionsInvestigative:
      name = "I" + (assesmentItemC + 1);
      break;
    case questionsArtistic:
      name = "A" + (assesmentItemC + 1);
      break;
    case questionsSocial:
      name = "S" + (assesmentItemC + 1);
      break;
    case questionsEnterprising:
      name = "E" + (assesmentItemC + 1);
      break;
    case questionsConventional:
      name = "C" + (assesmentItemC + 1);
      break;
    default:
      console.log("ERROR");
  }
  //changing temp coiunters
  const handleClick = (a) => {
    switch (assesmentItem) {
      case questionsRealistic:
        changeR(a);
        break;
      case questionsInvestigative:
        changeI(a);
        break;
      case questionsArtistic:
        changeA(a);
        break;
      case questionsSocial:
        changeS(a);
        break;
      case questionsEnterprising:
        changeE(a);
        break;
      case questionsConventional:
        changeC(a);
        break;
      default:
        console.log("ERROR");
    }
  };

  // const handleCheck=()=>{
  //   console.log({name}+" is checked");
  //   Validate();
  // }

  //const name = assesmentItemC + assesmentItem;
  //assesmentItemC + assesmentItem[0][1] + Math.floor(Math.random() * 100);
  return (
    <div>
      <div className='erwtisi-apantisi' key={assesmentItemC}>
        <h1 className='erwtisi'>{assesmentItem[assesmentItemC]}</h1>
        <div className='apantisi'>
          <label className='a sd'>
            <input
              type='radio'
              value={0}
              name={name}
              onClick={() => handleClick(0)}
            />
          </label>
          <label className='a d'>
            <input
              type='radio'
              value={1}
              name={name}
              onClick={() => handleClick(1)}
            />
          </label>
          <label className='a ns'>
            <input
              type='radio'
              value={2}
              name={name}
              onClick={() => handleClick(2)}
            />
          </label>
          <label className='a ag'>
            <input
              type='radio'
              value={3}
              name={name}
              onClick={() => handleClick(3)}
            />
          </label>
          <label className='a sag'>
            <input
              type='radio'
              value={4}
              name={name}
              onClick={() => handleClick(4)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
