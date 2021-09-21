import React from 'react';

const Sorter = () => {
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