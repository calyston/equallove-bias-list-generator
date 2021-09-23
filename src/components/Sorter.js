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