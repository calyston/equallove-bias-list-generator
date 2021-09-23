import React, { useState, useEffect } from 'react';

const Sorter = () => {

  const [groupMembers, setGroupMembers] = useState(
    [
      { name: 'Yamamoto Anna', photo: '' },
      { name: 'Morohashi Sana', photo: '' },
      { name: 'Otani Emiri', photo: '' },
      { name: 'Otoshima Risa', photo: '' },
      { name: 'Sasaki Maika', photo: '' },
      { name: 'Oba Hana', photo: '' },
      { name: 'Noguchi Iori', photo: '' },
      { name: 'Takamatsu Hitomi', photo: '' },
      { name: 'Takiwaki Shoko', photo: '' },
      { name: 'Saito Nagisa', photo: '' },
      { name: 'Saito Kiara', photo: '' }
    ]
  );

  //Variables

  const [resultsList, setResultsList] = useState([]);

  const [currentChoice, setCurrentChoice] = useState();

  const [newChoice, setNewChoice] = useState();

  const [highestResultsListIndex, setHighestResultsListIndex] = useState(1);

  const [lowestResultsListIndex, setLowestResultsListIndex] = useState(0);

  const [midPointIndex, setMidPointIndex] = useState(0);

  //Initial Member Selection on App Loading

  useEffect(() => {
    const randomMemberIndex = Math.floor(Math.random() * groupMembers.length);
    const [initialMember] = groupMembers.splice(randomMemberIndex, 1);
    setResultsList([initialMember]);
  }, []);

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