"use client";

import { useMemo, useState } from "react";
import { studyGuides } from "../lib/studyGuides";

function shuffle(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function choiceLetter(index) {
  return String.fromCharCode(65 + index);
}

function buildQuiz(guide) {
  return shuffle(guide.questions)
    .slice(0, guide.examSize)
    .map((question) => ({
      ...question,
      choices: shuffle(question.choices),
      selectedAnswer: ""
    }));
}

function getAnswerReference(question, answer) {
  const answerIndex = question.choices.findIndex((choice) => choice === answer);

  if (answerIndex === -1) {
    return `- ${answer || "No answer selected"}`;
  }

  return `${choiceLetter(answerIndex)}. ${answer}`;
}

function summarizeResults(questions) {
  const score = questions.filter((question) => question.selectedAnswer === question.answer).length;
  const attempted = questions.filter((question) => question.selectedAnswer).length;
  const percentage = Math.round((score / questions.length) * 100);
  const topicStats = {};

  questions.forEach((question) => {
    if (!topicStats[question.topic]) {
      topicStats[question.topic] = { correct: 0, total: 0, recommendation: question.recommendation };
    }

    topicStats[question.topic].total += 1;

    if (question.selectedAnswer === question.answer) {
      topicStats[question.topic].correct += 1;
    }
  });

  const weakTopics = Object.entries(topicStats)
    .map(([topic, stats]) => ({ topic, ...stats }))
    .filter((topic) => topic.correct < topic.total)
    .sort((a, b) => a.correct / a.total - b.correct / b.total);

  return {
    score,
    attempted,
    skipped: questions.length - attempted,
    percentage,
    status: percentage >= 70 ? "Passed" : "Needs review",
    weakTopics
  };
}

export default function QuizApp() {
  const [guideId, setGuideId] = useState(studyGuides[0].id);
  const [quiz, setQuiz] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const selectedGuide = useMemo(
    () => studyGuides.find((guide) => guide.id === guideId) || studyGuides[0],
    [guideId]
  );
  const currentQuestion = quiz[currentIndex];
  const results = isFinished ? summarizeResults(quiz) : null;

  function startQuiz() {
    setQuiz(buildQuiz(selectedGuide));
    setCurrentIndex(0);
    setIsFinished(false);
  }

  function selectAnswer(answer) {
    setQuiz((previousQuiz) =>
      previousQuiz.map((question, index) =>
        index === currentIndex ? { ...question, selectedAnswer: answer } : question
      )
    );
  }

  function finishQuiz() {
    setIsFinished(true);
  }

  return (
    <main>
      <h1>Azure AI Quiz Generator</h1>
      <p className="intro">Create a simple practice quiz from an Azure certification study guide.</p>

      <div className="actions">
        <div className="guide-control">
          <label htmlFor="study-guide">Certification study guide</label>
          <select id="study-guide" value={guideId} onChange={(event) => setGuideId(event.target.value)}>
            {studyGuides.map((guide) => (
              <option key={guide.id} value={guide.id}>
                {guide.name}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={startQuiz}>
          Generate Quiz
        </button>
      </div>

      {quiz.length === 0 && <p className="status">Choose a study guide and generate a quiz.</p>}
      {quiz.length > 0 && !isFinished && currentQuestion && (
        <section className="quiz" aria-label="Generated quiz">
          <article className="question">
            <h2>
              {currentIndex + 1}. {currentQuestion.question}
            </h2>
            <ul className="choices">
              {currentQuestion.choices.map((choice, index) => (
                <li key={choice}>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      checked={currentQuestion.selectedAnswer === choice}
                      onChange={() => selectAnswer(choice)}
                    />
                    <span>
                      <strong>{choiceLetter(index)}.</strong> {choice}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </article>

          <div className="quiz-footer">
            <div className="progress">
              Question {currentIndex + 1} of {quiz.length}
            </div>
            <button
              className="secondary"
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              Previous
            </button>
            {currentIndex < quiz.length - 1 ? (
              <button className="secondary" type="button" onClick={() => setCurrentIndex(currentIndex + 1)}>
                Next
              </button>
            ) : (
              <button className="secondary" type="button" onClick={finishQuiz}>
                Finish Quiz
              </button>
            )}
          </div>
        </section>
      )}

      {isFinished && results && (
        <section className="quiz" aria-label="Quiz results">
          <section className="metrics" aria-label="Performance metrics">
            <div className="metric">
              <strong>Score</strong>
              <span>
                {results.score}/{quiz.length}
              </span>
            </div>
            <div className="metric">
              <strong>Percentage</strong>
              <span>{results.percentage}%</span>
            </div>
            <div className="metric">
              <strong>Status</strong>
              <span>{results.status}</span>
            </div>
            <div className="metric">
              <strong>Attempted</strong>
              <span>
                {results.attempted}/{quiz.length}
              </span>
            </div>
            <div className="metric">
              <strong>Skipped</strong>
              <span>{results.skipped}</span>
            </div>
          </section>

          <section className="topic-summary" aria-label="Weak-topic recommendations">
            <h2>Weak-Topic Recommendations</h2>
            {results.weakTopics.length === 0 ? (
              <p>No weak topics found. Generate another quiz to keep practicing.</p>
            ) : (
              <ol className="recommendations">
                {results.weakTopics.map((topic) => (
                  <li key={topic.topic}>
                    <strong>
                      {topic.topic} ({topic.correct}/{topic.total}):
                    </strong>{" "}
                    {topic.recommendation}
                  </li>
                ))}
              </ol>
            )}
          </section>

          <ol className="review">
            {quiz.map((question, index) => {
              const isCorrect = question.selectedAnswer === question.answer;

              return (
                <li className="review-item" key={`${question.topic}-${question.question}`}>
                  <h2>
                    {index + 1}. {question.question}
                  </h2>
                  <p className={isCorrect ? "correct" : "incorrect"}>{isCorrect ? "Correct" : "Incorrect"}</p>
                  <p>
                    <strong>Your answer:</strong> {getAnswerReference(question, question.selectedAnswer)}
                  </p>
                  <p>
                    <strong>Correct answer:</strong> {getAnswerReference(question, question.answer)}
                  </p>
                  <p>
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </li>
              );
            })}
          </ol>
        </section>
      )}
    </main>
  );
}
