import React from "react";
import "../styles/home.css";
import { Offline } from "react-detect-offline";
import { Button, Link } from "@mui/material";

const Home = () => {
  return (
    <div className='main'>
      <div className='section1'>
        <h1>Welcome to the Holland Code Assessment </h1>
        <p className='imp-txt'>
          A Holland Code is a three-letter code that is made up of an
          individual's three dominant personality types out of six possible
          choices. The six types Dr. Holland identified are collectively
          referred to as RIASEC, and the initials stand for the first letter of
          each of the following personality types: Realistic, Investigative,
          Artistic, Social, Enterprising, and Conventional.
        </p>
        <br />

        <p id='backstory'>
          The Holland Occupational Themes is a theory of personality that
          focuses on career and vocational choices. It groups people on based on
          their suitability for six different categories of occupations. The six
          types yield the RIASEC acronym, by which the theory is also commonly
          known. The theory was developed by John L. Holland over the course of
          his career, starting in the 1950s. The typology has come to dominate
          the field of career counseling and has been incorporated into most of
          the popular assessments used in the field. The RIASEC Markers from the
          Interest Item Pool were developed by Liao, Armstrong and Rounds (2008)
          for use in psychological research as a public domain alternative to
          the usual assessments which are marketed commercially.
        </p>
        <br />
        <h3>Read the instructions before you start the assessment</h3>
      </div>

      <div className='section2'>
        <h1>How it works :</h1>
        <p>
          The Interest Profiler has 60 questions about work activities that some
          people do on their jobs.
        </p>
        <br />
        <p>
          Read each question carefully and decide how you would feel about doing
          each type of work
        </p>
        <br />
        <h2>
          Remember, this is <strong>not</strong> a test, <br />
          there is no right or wrong answer!
          <br />
          Just think about if you would like or dislike doing the work
        </h2>
        <p>On each screen, click the Next button at the bottom to continue</p>
        <br />
        <Offline>It appears you are offline.</Offline>
        <br />
        <Offline>
          You can continue with the assessment but you won't be able to view all
          the possible jobs that might interests you!
        </Offline>
        <br />

        <Button color='success' variant='outlined'>
          <Link color='#6ca24a' href='/assesment' underline='none'>
            Start the assessment
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Home;
