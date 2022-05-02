import React, { useEffect, useState } from "react";
import { test } from "../../backUp";

const Api = ({ pytanie }) => {
  const [words, setWords] = useState([]);
  const [question, setQuestion] = useState([]);
  const [goodW, setGoodW] = useState([]);
  const [skad, setSkad] = useState();

  useEffect(() => {
    console.log(pytanie);
    fetchFn();
  }, []);

  //   const fetchFn = async () => {
  //     const data = await fetch("http://localhost:3000/animals")
  //       .then((res) => (!res.ok ? console.log("niedziała") : res.json()))
  //       .then((data) => {
  //         setWords(data.all_words);
  //       })
  //       .catch((err) => {
  //         setWords(test.animals.all_words);
  //         setQuestion(test.animals.question);
  //         setGoodW(test.animals.good_words);
  //       });
  //   };

  const fetchFn = async () => {
    try {
      const data = await fetch(`http://localhost:3000/${pytanie}`);
      const dane = await data.json();
      setWords(dane.all_words);
      setQuestion(dane.question);
      setGoodW(dane.good_words);
      setSkad("z API");
      console.log("z API");
    } catch (error) {
      pytanie === "animals"
        ? setData(
            test.animals.all_words,
            test.animals.question,
            test.animals.good_words
          )
        : pytanie === "colors"
        ? setData(
            test.colors.all_words,
            test.colors.question,
            test.colors.good_words
          )
        : setData(
            test.vehicles.all_words,
            test.vehicles.question,
            test.vehicles.good_words
          );
    }
  };

  const setData = (word, quest, goodW) => {
    setWords(word);
    setQuestion(quest);
    setGoodW(goodW);
    setSkad("z LOCAL");
    console.log("z LOCAL");
  };

  return (
    <div>
      <h1>{skad}</h1>
      <h1>{question}</h1>
      <br />
      <hr />
      <br />
      {words.map((word) => {
        return (
          <div key={word}>
            <h1>{word}</h1>
          </div>
        );
      })}
      <br />
      <hr />
      <br />
      {goodW.map((good) => {
        return (
          <div key={good}>
            <h2>{good}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
