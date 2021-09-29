import React, { useState, useEffect } from 'react';

//Import Images
import wcAnna from '../assets/images/weekend-citron/Yamamoto_anna_citron.webp';
import wcSana from '../assets/images/weekend-citron/Morohashi_sana_citron.webp';
import wcEmiri from '../assets/images/weekend-citron/Otani_emiri_citron.webp';
import wcRisa from '../assets/images/weekend-citron/Otoshima_risa_citron.webp';
import wcMaika from '../assets/images/weekend-citron/Sasaki_maika_citron.webp';
import wcHana from '../assets/images/weekend-citron/Oba_hana_citron.webp';
import wcIori from '../assets/images/weekend-citron/Noguchi_iori_citron.webp';
import wcHitomi from '../assets/images/weekend-citron/Takamatsu_hitomi_citron.webp';
import wcShoko from '../assets/images/weekend-citron/Takiwaki_shoko_citron.webp';
import wcNagisa from '../assets/images/weekend-citron/Saito_nagisa_citron.webp';
import wcKiara from '../assets/images/weekend-citron/Saito_kiara_citron.webp';

const Sorter = () => {

  const [groupMembers, setGroupMembers] = useState(
    [
      { name: 'Yamamoto Anna', photo: wcAnna },
      { name: 'Morohashi Sana', photo: wcSana },
      { name: 'Otani Emiri', photo: wcEmiri },
      { name: 'Otoshima Risa', photo: wcRisa },
      { name: 'Sasaki Maika', photo: wcMaika },
      { name: 'Oba Hana', photo: wcHana },
      { name: 'Noguchi Iori', photo: wcIori },
      { name: 'Takamatsu Hitomi', photo: wcHitomi },
      { name: 'Takiwaki Shoko', photo: wcShoko },
      { name: 'Saito Nagisa', photo: wcNagisa },
      { name: 'Saito Kiara', photo: wcKiara }
    ]
  );

  //Variables

  const [numberOfMembers, setNumberOfMembers] = useState();

  const [resultsList, setResultsList] = useState([]);

  const [newOption, setNewOption] = useState();

  const [highestResultsListIndex, setHighestResultsListIndex] = useState(1);

  const [lowestResultsListIndex, setLowestResultsListIndex] = useState(0);

  const [midPointIndex, setMidPointIndex] = useState(0);

  const [sortingComplete, setSortingComplete] = useState(false);

  //Initial Member Selection on App Loading

  useEffect(() => {
    setNumberOfMembers(groupMembers.length);
    const [initialMember] = groupMembers.splice(Math.floor(Math.random() * groupMembers.length), 1);
    setResultsList([initialMember]);
  }, []);

  //Console Logged Results List
  console.log(resultsList);

  //Create New Option
  useEffect(() => {
    if (resultsList.length !== 0) {
      if (resultsList.length < numberOfMembers) {
        console.log(resultsList);
        const [newMember] = groupMembers.splice(Math.floor(Math.random() * groupMembers.length), 1);
        setNewOption(newMember);
      } else {
        setSortingComplete(true);
      }
    }

  }, [resultsList.length]);

  //Binary Insertion Sorter
  const insertionSorter = (decision) => {
    console.log(decision);

    let tempHighestResultsListIndex = highestResultsListIndex;
    let tempLowestResultsListIndex = lowestResultsListIndex;
    let tempMidPointIndex = midPointIndex;
    //Rank New Option Higher than Sorted Option
    if (decision === 'rankHigher') {
      if (midPointIndex === 0) {
        tempHighestResultsListIndex = 0
        tempLowestResultsListIndex = 0
      } else {
        tempHighestResultsListIndex = tempMidPointIndex;
      }
    } else {
      //Rank New Option one place Lower than Midpoint of Results List
      tempLowestResultsListIndex = tempMidPointIndex + 1;
    }

    //If no more sorting is needed
    if (tempHighestResultsListIndex === tempLowestResultsListIndex) {
      resultsList.splice(tempHighestResultsListIndex, 0, newOption)
      tempHighestResultsListIndex = resultsList.length
      tempLowestResultsListIndex = 0
    }
    //Finding the midpoint in the current results list
    tempMidPointIndex = Math.floor((tempHighestResultsListIndex + tempLowestResultsListIndex) / 2);

    setHighestResultsListIndex(tempHighestResultsListIndex);
    setLowestResultsListIndex(tempLowestResultsListIndex);
    setMidPointIndex(tempMidPointIndex);
  }

  //Reset Game with Retry Button
  const resetGame = () => {
    window.location.reload();
  }

  return (
    <main>
      {/* Determining which Section Displays */}
      {!sortingComplete ?
        <section id="question-container" >
          {newOption &&
            <figure id="optionA" onClick={() => { insertionSorter('rankHigher') }}>
              <img src={newOption.photo} alt='#' />
              <p>{newOption.name}</p>
            </figure>}
          <span>or</span>
          {resultsList[0] &&
            <figure id="optionB" onClick={() => { insertionSorter('rankLower') }}>
              <img src={resultsList[midPointIndex].photo} alt='#' />
              <p>{resultsList[midPointIndex].name}</p>
            </figure>}
        </section>
        :
        <section id="results-container">
          <h2>Result:</h2>
          <ol id="results-list">
            <img src={resultsList[0].photo} alt="#" />
            {resultsList.map((member) =>
              <li>{member.name}</li>
            )}
          </ol>
          <h2 id="retry" onClick={() => { resetGame() }}>Retry?</h2>
        </section>
      }
    </main >
  )
}

export default Sorter;