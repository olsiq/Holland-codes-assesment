import React from 'react'
import '../styles/about.css'
import HollandPortrait from '../images/john holland.png'
import RiasecPNG from '../images/riasec.png'

export default function About() {
    return (
        <div className="containerHolland">
            <h1>Dr. John L. Holland</h1>
            <h2>information about his life & work</h2>
            <div className="container-h holland">
                <img className='img' src={HollandPortrait} alt="john holland"></img>
                <p><strong>Dr. John L. Holland</strong> was an American psychologist and Professor Emeritus of Sociology at Johns Hopkins University. He was the creator of the career development model, Holland Occupational Themes, commonly known as the Holland Codes.</p>
                <br></br>
                <p>Holland was born and raised in Omaha, Nebraska. At the age of 20, Holland's father emigrated from England to the U.S. He initially worked as a laborer, later becoming an advertising executive after attending night school at the YMCA. Holland's mother was an elementary school teacher, and he was one of four children.</p>
                <br></br>
                <p>Holland graduated from Central High, Omaha, Nebraska, in 1938 and from the University of Nebraska at Omaha (then Municipal University of Omaha) in 1942. He received his B.A. in Psychology (and also studied French and math). Holland joined the army after graduating from college, becoming engaged in the events of World War II. He stayed with the army as a private until 1946, working as "a classification interviewer, test proctor, paralegal clerk, laborer, squadron clerk, psychological assistant, and Wechsler test administrator led to his belief that many people exemplify common psychological types, although his training had fostered the belief that people are infinitely complex. He was also able to work with and get training from social workers, psychologists, and physicians—experiences that stimulated his desire to become a psychologist." After leaving the army, he entered a doctoral program in psychology at the University of Minnesota, receiving a master's degree in 1947 and a Ph.D. in 1952.</p>
                <br></br>
                <p>Holland was an "average" student at Minnesota, where he had "trouble finding an interesting" topic for his doctoral dissertation. He finally produced a dissertation that explored "speculations about art and personality". This topic did not sit well with fellow students or faculty despite its straightforward empirical design. Holland eventually got the doctorate and 10 sets of used painting materials."</p>
                <br></br>
                <p>His initial work after completing his Ph.D. was at Western Reserve University and the Veteran's Administration Psychiatric Hospital (1953–56). He later worked for the National Merit Scholarship Corporation (1957–63) and the American College Testing Program (1963–69).</p>
                <br></br>
                <p>Holland joined Johns Hopkins University's Sociology department in 1969, where he published some of his most important research on personality and career choice. He retired from Johns Hopkins in 1980 but continued his research until his death in 2008. Holland died on November 27, 2008, at Union Memorial Hospital at the age of 89. He was awarded the APA Distinguished Scientific Award for the Applications of Psychology in the same month.</p>
                <p>His initial work after completing his Ph.D. was at Western Reserve University and the Veteran's Administration Psychiatric Hospital (1953–56). He later worked for the National Merit Scholarship Corporation (1957–63) and the American College Testing Program (1963–69).</p>
                <br></br>
                <p>Holland joined Johns Hopkins University's Sociology department in 1969, where he published some of his most important research on personality and career choice. He retired from Johns Hopkins in 1980, but continued his research until his death in 2008. Holland died on November 27, 2008, at Union Memorial Hospital at the age of 89. He was awarded the APA Distinguished Scientific Award for the Applications of Psychology in the same month</p>
            </div>
            
            <div class="container-h container2">
                <img src={RiasecPNG} alt="riasec codes" className="right"></img>
                <p >Holland's theory of vocational choice, The Holland Occupational Themes, now pervades career counseling research and practice. Its origins can be traced to an article in the Journal of Applied Psychology in 1958 and a subsequent article in 1959 that set out his theory of vocational choices. The basic premise was that one's occupational preferences were in a sense a veiled expression of underlying character. The 1959 article in particular ("A Theory of Vocational Choice", published in the Journal of Counseling Psychology) is considered the first major introduction of Holland's "theory of vocational personalities and work environments". Holland originally labeled his six types as "motoric, intellectual, esthetic, supportive, persuasive, and conforming". He later developed and changed them to: "Realistic (Doers), Investigative (Thinkers), Artistic (Creators), Social (Helpers), Enterprising (Persuaders), and Conventional (Organizers)".</p>
                <br></br>
                <p>According to the Committee on Scientific Awards, Holland's research shows that personalities seek out and flourish in career environments they fit and that jobs and career environments are classifiable by the personalities that flourish in them. Holland also wrote of his theory that the choice of a vocation is an expression of personality. Furthermore, while Holland suggests that people can be "categorized as one of six types, he also argues that a six-category scheme built on the assumption that there are only six kinds of people in the world is unacceptable on the strength of common sense alone. But a six category scheme that allows a simple ordering of a person's resemblance to each of the six models provides the possibility of 720 different personality patterns.</p>
                <br></br>
                <p>Holland's typology provides an interpretative structure for several different vocational interest surveys, including the two measures he developed: The Vocational Preference Inventory in 1953 and the Self Directed Search (SDS) in 1970 (revised in 1977, 1985, and 1994). Holland continued to work on his theory after his retirement from Johns Hopkins in 1980, finally revising it once again in 1997. He also worked with Gary Gottfredson on a few new inventories. In 1991, they developed the Position Classification Inventory (PCI) which was an outgrowth of their attempt to extend the system to all occupations in 1982, 1989, and 1996. In 1994, they developed The Career Attitudes and Strategies Inventory.</p>
                <br></br>
                <p>The US Department of Labor ETA has been using an updated and expanded version of the RIASEC model in the "Interests" section of its free online database, <a href="https://www.onetonline.org/"> The Occupational Information Network (O*NET)</a>, since its inception during the late 1990s.</p>
            </div>
        </div>
    )
}
