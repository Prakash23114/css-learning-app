"use client"

import { useState } from "react"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"

export default function Quiz({ quizData, section }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  if (!quizData || quizData.questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">No quiz available for this section</p>
      </div>
    )
  }

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer

  const handleAnswerSelect = (index) => {
    if (!answered) {
      setSelectedAnswer(index)
      setAnswered(true)
      if (index === currentQuestion.correctAnswer) {
        setScore(score + 1)
      }
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setAnswered(false)
    setScore(0)
    setShowResults(false)
  }

  if (showResults) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold text-primary mb-4">Quiz Complete!</h2>
          <div className="text-6xl font-bold text-accent mb-4">
            {Math.round((score / quizData.questions.length) * 100)}%
          </div>
          <p className="text-2xl text-foreground mb-2">
            You scored {score} out of {quizData.questions.length}
          </p>
          <p className="text-muted-foreground mb-8">
            {score === quizData.questions.length
              ? "Perfect score! Excellent work!"
              : score > quizData.questions.length / 2
                ? "Great job! Keep learning!"
                : "Good effort! Review the lessons and try again."}
          </p>
          <button
            onClick={handleRestart}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium mx-auto"
          >
            <RotateCcw size={18} />
            Restart Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </span>
          <div className="w-48 h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` }}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-primary">{currentQuestion.question}</h2>
      </div>

      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(index)}
            disabled={answered}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all font-medium ${
              selectedAnswer === index
                ? isAnswerCorrect
                  ? "border-green-500 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100"
                  : "border-red-500 bg-red-50 dark:bg-red-950 text-red-900 dark:text-red-100"
                : answered && index === currentQuestion.correctAnswer
                  ? "border-green-500 bg-green-50 dark:bg-green-950 text-green-900 dark:text-green-100"
                  : "border-border hover:border-primary bg-card hover:bg-secondary text-foreground cursor-pointer"
            } ${answered ? "cursor-not-allowed" : ""}`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {answered &&
                selectedAnswer === index &&
                (isAnswerCorrect ? (
                  <CheckCircle size={20} className="text-green-500" />
                ) : (
                  <XCircle size={20} className="text-red-500" />
                ))}
              {answered && index === currentQuestion.correctAnswer && selectedAnswer !== index && (
                <CheckCircle size={20} className="text-green-500" />
              )}
            </div>
          </button>
        ))}
      </div>

      {answered && (
        <div className="mb-8 p-4 bg-secondary rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Explanation:</strong> {currentQuestion.explanation}
          </p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          {currentQuestionIndex === quizData.questions.length - 1 ? "View Results" : "Next Question"}
        </button>
      )}
    </div>
  )
}
