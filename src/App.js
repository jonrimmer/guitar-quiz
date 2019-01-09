import React, { useState, useMemo } from 'react';
import GuitarString from './GuitarString';
import './App.css';
import { TUNINGS, addSemitones, letterEquals, majorChord, minorChord } from './music';
import { newBoolArray, getRandomInt } from './util';
import Fretboard, { positionToGridArea } from './Fretboard';
import Note from './Note';
import { Voicings } from './voicing';

const fretCount = 12;

const App = () => {
  const [appMode, setAppMode] = useState('explore');
  const [tuning, setTuning] = useState(TUNINGS[0]);
  const [judgement, setJudgement] = useState(null);
  const [answer, setAnswer] = useState('');
  const [chordRoot, setChordRoot] = useState('A');
  const [chordType, setChordType] = useState('Major');
  const [showOctave, setShowOctave] = useState(true);
  const [includedStrings, setIncludedStrings] = useState(newBoolArray(tuning.notes.length));
  const voicings = useMemo(() => new Voicings(fretCount));
  const [notes, setNotes] = useState([]);
  const [voicingIndex, setVoicingIndex] = useState(0);

  const computeRandomQuestion = (includedStrings) => {
    const strings = includedStrings.reduce((acc, val, i) => {
      if (val) {
        acc.push(i);
      }

      return acc;
    }, []);

    return {
      type: 'note',
      string: strings[getRandomInt(strings.length)],
      fret: getRandomInt(fretCount)
    };
  };

  const positionToNote = (string, fret) => {
    const rootNote = tuning.notes[string];
    return addSemitones(rootNote, fret)
  }

  const [question, setQuestion] = useState(() => 
    computeRandomQuestion(includedStrings)
  );

  const allNotes = useMemo(() => {
    const result = [];

    for (let string = 0; string < tuning.notes.length; string++) {
      for (let fret = 0; fret < fretCount + 1; fret++) {
        result.push({
          type: 'indicator',
          note: positionToNote(string, fret),
          gridArea: positionToGridArea(string, fret)
        })
      }
    }

    return result;
  }, [tuning, showOctave]);

  const handleSubmit = event => {
    // Done late in case the tuning has changed.
    const solution = positionToNote(question.string, question.fret);

    if (letterEquals(answer, solution)) {
      setQuestion(computeRandomQuestion(includedStrings));
      
      setJudgement({
        correct: true,
        id: Date.now()
      });
    }
    else {
      setJudgement({
        correct: false,
        id: Date.now()
      });
    }

    setAnswer('');

    event.preventDefault();
  };

  const handleTuningChanged = (e) => {
    setTuning(TUNINGS.find(tuning => tuning.name === e.target.value) || tuning);
  }

  const toggleGuitarString = toToggle => {
    let value = [...includedStrings];
    value[toToggle] = !value[toToggle];
    setIncludedStrings(value);

    if (question.string === toToggle) {
      setQuestion(computeRandomQuestion(value));
    }
  };

  const showVoicing = index => {
    const chord = chordType == 'Major' ? majorChord(chordRoot + '3') : minorChord(chordRoot + '3');
    const chordVoicings = voicings.getVoicings(tuning, chord).root;

    if (index < 0) {
      index = 0;
    }
    else if (index >= chordVoicings.length) {
      index = chordVoicings.length - 1;
    }

    const played = [];

    chordVoicings[index].notes.forEach((fret, string) => {
      let note = addSemitones(tuning.notes[string], fret);
      if (fret !== null) {
        played.push({
          type: note.tone === chord.rootNote.tone ? 'chordRoot' : 'indicator',
          note,
          gridArea: positionToGridArea(string, fret)
        });
      }
    });

    setNotes(played);
    setVoicingIndex(index);
  }

  const showChord = () => {
    showVoicing(0);
  };

  const nextVoicing = () => {
    showVoicing(voicingIndex + 1);
  }

  const prevVoicing = () => {
    showVoicing(voicingIndex - 1);
  }

  const firstVoicing = () => {
    showVoicing(Number.NEGATIVE_INFINITY);
  }

  const lastVoicing = () => {
    showVoicing(Number.POSITIVE_INFINITY);
  }

  const switchAppMode = mode => {
    setAppMode(mode);

    if (mode === 'quiz') {
      setNotes([{
        note: positionToNote(question.string, question.fret),
        type: 'quiz',
        gridArea: positionToGridArea(question.string, question.fret)
      }]);
    }
    else {
      setNotes(allNotes);
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        Guitar Quiz    
      </header>
      <div className="App-options">
        <label>
          Mode
        </label>
        <label className="App-explore">
          <input
            type="radio"
            value="explore"
            checked={appMode === 'explore'}
            onChange={() => switchAppMode('explore')}
          />
            Explore
        </label>
        <label className="App-quiz">
          <input
            type="radio"
            value="quiz"
            checked={appMode === 'quiz'}
            onChange={() => setAppMode('quiz')}
          />
          Quiz
        </label>

        <label className="App-tuning">Tuning</label>
        <select
          className="App-tuning"
          value={tuning.name}
          onChange={handleTuningChanged}
        >
          { TUNINGS.map((tuning, i) => <option key={i}>{tuning.name}</option>)}
        </select>

        <label className="App-show-octave">
          <input
            type="checkbox"
            checked={showOctave}
            onChange={() => setShowOctave(!showOctave) }
          /> Show octave
        </label>
      </div>
      <Fretboard
        fretCount={fretCount}
        tuning={tuning}
      >
        {
          notes.map((note, i) =>
            <Note
              key={i}
              showOctave={showOctave}
              {...note}
            ></Note>
          )
        }

        {
          tuning.notes.map((rootNote, i, { length } ) =>
            <GuitarString
              key={i}
              num={i}
              count={length}
              onToggle={() => toggleGuitarString(i)}
              includeInQuiz={includedStrings[i]}
              rootNote={rootNote}
            ></GuitarString>
          )
        }
      </Fretboard>

      {
        appMode === 'quiz' ? <form 
          className="App-question"
          onSubmit={event => handleSubmit(event)}
        >
          <h1>What is the higlighted note?</h1>
          <input
            className="App-answer-field"
            type="text"
            value={answer}
            onChange={event => setAnswer(event.target.value)}
          />
          {
            judgement ?
              <div
                className={'App-judgement ' + (judgement.correct ? 'correct' : 'incorrect') }
                key={judgement.id}
              >
                { judgement.correct ? 'Correct' : 'Incorrect' }
              </div> : null
          }
        </form> : <div className="chordSelector">
          <select
            className="App-chord-root"
            value={chordRoot}
            onChange={event => setChordRoot(event.target.value)}
          >
            <option>A</option>
            <option>A#</option>
            <option>B</option>
            <option>C</option>
            <option>C#</option>
            <option>D</option>
            <option>D#</option>
            <option>E</option>
            <option>F</option>
            <option>F#</option>
            <option>G</option>
            <option>G#</option>
          </select>
          <select
            className="App-chord-type"
            value={chordType}
            onChange={event => setChordType(event.target.value)}
          >
            <option>Major</option>
            <option>Minor</option>
          </select>
          <button onClick={showChord}>Chord</button>
          <button onClick={firstVoicing}>|&lt;</button>
          <button onClick={prevVoicing}>&lt;</button>
          <button onClick={nextVoicing}>&gt;</button>
          <button onClick={lastVoicing}>&gt;|</button>
        </div>
      }
    </div>
  );
}

export default App;
