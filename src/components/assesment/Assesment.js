import React, { useState } from "react";
import AssesmentContentV2 from "../AssesmentContent/AssesmentContentV2";
import QuizInfo from "../QuizInfo";
import Controls from "../Controls";
import Result from "../Result";
import "../../styles/assesment.css";

//tha mporousa na ftiaksw ena arxeio me oles tis erwtiseis kai na kanw polla exports alla eftiaksa ksexwrista arxeia
import { questionsRealistic } from "../questions/RealisticQuestions";
import { questionsInvestigative } from "../questions/InvestigativeQuestions";
import { questionsArtistic } from "../questions/ArtisticQuestions";
import { questionsSocial } from "../questions/SocialQuestions";
import { questionsEnterprising } from "../questions/EnterprisingQuestions";
import { questionsConventional } from "../questions/ConventionalQuestions";
import { shuffle } from "../functions/shuffle";
// import Result from './Result'

export default function Assesment() {
  const [x, setX] = useState(0);

  //const [validateCounter, setValidateCounter] = useState(0);
  const [counterRealistic, setCounterRealistic] = useState(0);
  const [counterInvastigative, setCounterInvastigative] = useState(0);
  const [counterArtistic, setCounterArtistic] = useState(0);
  const [counterSocial, setCounterSocial] = useState(0);
  const [counterEnterprising, setCounterEnterprising] = useState(0);
  const [counterConventional, setCounterConventional] = useState(0);
  //temporary values
  const [tempRealistic, setTempR] = useState(null);
  const [tempInvastigative, setTempI] = useState(null);
  const [tempArtistic, setTempA] = useState(null);
  const [tempSocial, setTempS] = useState(null);
  const [tempEnterprising, setTempE] = useState(null);
  const [tempConventional, setTempC] = useState(null);
  //reset btn
  const [Reset, setReset] = useState(false);

  if (Reset === true) {
    console.log("reset is pressed,questions will shuffle");
    shuffle(questionsRealistic);
    shuffle(questionsInvestigative);
    shuffle(questionsArtistic);
    shuffle(questionsSocial);
    shuffle(questionsEnterprising);
    shuffle(questionsConventional);
    setReset(false);
  }

  //validate
  // const [Validate,setValidate]=useState(false);

  return (
    <div>
      {x === 10 && (
        <Result
          counterRealistic={counterRealistic}
          counterInvestigative={counterInvastigative}
          counterArtistic={counterArtistic}
          counterSocial={counterSocial}
          counterEnterprising={counterEnterprising}
          counterConventional={counterConventional}
        />
      )}
      {x <= 9 && (
        <div className='assementcontainer'>
          <QuizInfo />

          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsRealistic}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>
          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsInvestigative}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>
          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsArtistic}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>
          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsSocial}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>
          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsEnterprising}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>
          <div className='wraper'>
            {
              <AssesmentContentV2
                assesmentItem={questionsConventional}
                assesmentItemC={x}
                //change temps
                changeR={setTempR}
                changeI={setTempI}
                changeA={setTempA}
                changeS={setTempS}
                changeE={setTempE}
                changeC={setTempC}
              />
            }
          </div>

          <Controls
            changeX={setX}
            x={x + 1}
            //change the counters
            changeRealistic={setCounterRealistic}
            changeInvestigative={setCounterInvastigative}
            changeArtistic={setCounterArtistic}
            changeSocial={setCounterSocial}
            changeEnterprising={setCounterEnterprising}
            changeConventional={setCounterConventional}
            counterRealistic={counterRealistic}
            counterInvastigative={counterInvastigative}
            counterArtistic={counterArtistic}
            counterSocial={counterSocial}
            counterEnterprising={counterEnterprising}
            counterConventional={counterConventional}
            //change the temp value
            tempR={tempRealistic}
            changeR={setTempR}
            tempI={tempInvastigative}
            changeI={setTempI}
            tempA={tempArtistic}
            changeA={setTempA}
            tempS={tempSocial}
            changeS={setTempS}
            tempE={tempEnterprising}
            changeE={setTempE}
            tempC={tempConventional}
            changeC={setTempC}
            //for the reset btn
            reset={setReset}
          />
        </div>
      )}
    </div>
  );
}
