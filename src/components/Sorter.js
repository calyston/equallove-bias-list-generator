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

  const [resultsList, setResultsList] = useState([]);

  const [currentOption, setCurrentOption] = useState();

  const [newOption, setNewOption] = useState();

  const [highestResultsListIndex, setHighestResultsListIndex] = useState(1);

  const [lowestResultsListIndex, setLowestResultsListIndex] = useState(0);

  const [midPointIndex, setMidPointIndex] = useState(0);

  //Initial Member Selection on App Loading

  useEffect(() => {
    const [initialMember] = groupMembers.splice(Math.floor(Math.random() * groupMembers.length), 1);
    setResultsList([initialMember]);
  }, []);

  //Console Logged Results List
  console.log(resultsList);

  //Create New Option
  useEffect(() => {
    if (resultsList.length !== 0) {
      const [newMember] = groupMembers.splice(Math.floor(Math.random() * groupMembers.length), 1);
      setNewOption(newMember);
    }
  }, [resultsList.length])

  return (
    <main>
      <section id="question-container">
        <figure id="optionA">
        </figure>
        <span>or</span>
        <figure id="optionB">
        </figure>
      </section>
      <section id="results-container">
        <h2>Result:</h2>
        <ol id="results-list"></ol>
        <h2 id="retry">Retry?</h2>
      </section>
    </main>
  )
}

export default Sorter;