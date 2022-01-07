import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';

export default function App() {

  const [isComplete, setIsComplete] = useState(false);
  const [endText, setEndText] = useState('');

  const [NLSentencePT1, setNLSentencePT1] = useState('The ');
  const [NLSentencePT2, setNLSentencePT2] = useState(' is small.');
  
  const [NLSentenceWord, setNLSentenceWord] = useState('House');

  const [TLSentencePT1, setTLSentencePT1] = useState('Das ');
  const [TLSentencePT2, setTLSentencePT2] = useState(' ist klein.');
  const [TLSentenceWord, setTLSentenceWord] = useState('...');

  const [answer1, setanswer1] = useState('Folgen');
  const [answer2, setanswer2] = useState('Schaf');
  const [answer3, setanswer3] = useState('Bereiden');
  const [answer4, setanswer4] = useState('Hause');
  
  const [correctAnswer, setCorrectAnswer] = useState('Hause');

  function setLesson() {

    const lessonNumber = Math.floor(Math.random() * 2) + 1;

    if (lessonNumber === 1) {
      setNLSentencePT1('The ');
      setNLSentenceWord('House');
      setNLSentencePT2(' is small.');
  
      setTLSentencePT1('Das ');
      setCorrectAnswer('Hause');
      setTLSentencePT2(' ist klein.');
  
      setanswer1('Folgen');
      setanswer2('Schaf');
      setanswer3('Bereiden');
      setanswer4('Hause');
    }
    else if (lessonNumber === 2) {
      setNLSentencePT1('The ');
      setNLSentenceWord('Woman');
      setNLSentencePT2(' is happy.');
  
      setTLSentencePT1('Die ');
      setCorrectAnswer('Frau');
      setTLSentencePT2(' ist Frölich.');
  
      setanswer1('Mann');
      setanswer2('Hund');
      setanswer3('Frau');
      setanswer4('Katze');
    }
  }

  useEffect(() => {
    if (TLSentenceWord !== '...') {
      setIsComplete(true);
    }
    if (TLSentenceWord === correctAnswer && isComplete) {
      setEndText('That\'s Correct!');
    } else if (TLSentenceWord !== correctAnswer && isComplete) {
      setEndText('Sorry, the correct answer was "' + correctAnswer + '".');
    }
    
  });

  return (
    <View style={styles.app}>
      <View style={styles.header}></View>
      <View style={styles.exerciseWindow}>
        <Text style={styles.titleText}>Fill in the missing word</Text>
        <Text style={styles.NLText}>{NLSentencePT1}<Text style={styles.NLTextHighlight}>{NLSentenceWord}</Text>{NLSentencePT2}</Text>
        <View>
          <Text style={styles.TLText}>{TLSentencePT1}<Text style={styles.TLTextHighlight}>{TLSentenceWord}</Text>{TLSentencePT2}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTLSentenceWord(answer1)}>
            <Text>
            {answer1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTLSentenceWord(answer2)}>
            <Text>
            {answer2}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setTLSentenceWord(answer3)}>
            <Text>
              {answer3}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setTLSentenceWord(answer4)}>
            <Text>
              {answer4}
            </Text>
          </TouchableOpacity>
        </View>
          <Modal visible={isComplete}>
            <View style={styles.endContainer}>
              <Text style={styles.endText}>{endText}</Text>
              <TouchableOpacity style={styles.button} onPress={() => {setIsComplete(false), setTLSentenceWord('...'), setLesson();}}>
                <Text>
                  New Question
                </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'deepskyblue',
  },
  exerciseWindow: {
    elevation: 50,
    flex: 1,
    alignContent: 'center',
    paddingTop: 50,
    backgroundColor: 'blue',
    height: '80%',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  titleText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)'
  },
  header: {
    height:'20%',
    width: '100%',
  },
  TLText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20,
    marginVertical: 40,
  },
  TLTextHighlight: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'underline',
  },
  NLText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 20,
    marginVertical: 20,
  },
  NLTextHighlight: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'darkgray',
    borderRadius: 20,
    padding: 20,
  },
  endContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
