import React from "react";
import { Link, Button } from "@mui/material";
import { Offline } from "react-detect-offline";
import "../styles/result.css";
import "./functions/onet";
import { onet } from "./functions/onet";

export default function Result({
  counterRealistic,
  counterInvestigative,
  counterArtistic,
  counterSocial,
  counterEnterprising,
  counterConventional,
}) {
  const yourScore = [
    { value: counterRealistic, code: "R" },
    { value: counterInvestigative, code: "I" },
    { value: counterArtistic, code: "A" },
    { value: counterSocial, code: "S" },
    { value: counterEnterprising, code: "E" },
    { value: counterConventional, code: "C" },
  ];
  yourScore.sort((a, b) => (a.value > b.value ? -1 : 1));
  const yourCode = yourScore[0].code + yourScore[1].code + yourScore[2].code;
  let url = onet(yourScore[0].code, yourScore[1].code, yourScore[2].code);

  return (
    <div className='result'>
      <div className='scores'>
        <div>
          <h1 className='score'>
            Your realistic score is : {counterRealistic}
          </h1>
        </div>
        <div>
          <h1 className='score'>
            Your investigative score is : {counterInvestigative}
          </h1>
        </div>

        <div>
          <h1 className='score'>Your artistic score is : {counterArtistic}</h1>
        </div>
        <div>
          {" "}
          <h1 className='score'>Your social score is : {counterSocial}</h1>
        </div>
        <div>
          {" "}
          <h1 className='score'>
            Your enteprenuer score is : {counterEnterprising}
          </h1>
        </div>
        <div>
          <h1 className='score'>
            Your conventional score is : {counterConventional}
          </h1>
        </div>
      </div>
      <div className='your-code'>
        <h1 className='score'>Your RIASEC code is : {yourCode}</h1>
      </div>
      <div className='info'>
        <p id='onet'>
          The United States Department of Labor Employment and Training
          Administration maintains a database of occupations sorted by Holland
          Code.
          <br></br>
          Click the button to find the list of occupations based on your Holland
          Code
        </p>
        <Button variant='outlined' color='success'>
          <Link
            color='inherit'
            underline='none'
            target='_blank'
            rel='noopener noreferrer'
            href={url}
          >
            List of occupations based on your Holland Code
          </Link>
        </Button>
      </div>
      <Offline>
        It appears you are offline.
        <br />
        We won't be able to be redirected you to the onet site.
        <br /> Copy & Paste the following link when you go online: <br />
        {url}
      </Offline>
    </div>
  );
}
