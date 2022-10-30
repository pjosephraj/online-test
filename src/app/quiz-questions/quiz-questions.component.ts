import { Component, OnInit } from '@angular/core';
import { Answers } from '../models/answers';
import { Question } from '../models/questions';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  currentQuestionId: number = 1;
  lastQuestion!: Question;
  questions: Question[] = [];
  correctAnswers!: Map<number, number>;
  showReview: boolean = false;

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.loadQuestions();
    this.correctAnswers = this.questionsService.getCorrectAnswers();
  }

  loadQuestions(): void {
    this.questionsService.getQuestions().subscribe({
      next: (questions) => {
        this.questions = questions;
        this.lastQuestion = questions[questions.length - 1];
      },
      error: (error) => console.log(error),
      complete: () => console.log('Questions loaded.')
    });
  }

  loadNextQuestion(): void {
    this.currentQuestionId += 1; 
  }

  loadPrevQuestion(): void {
    this.currentQuestionId -= 1;
  }

  setAnswer(question: Question, ansIdx: number) {
    const correctAnswer = this.correctAnswers.get(question.qid);
    question.selectedAnswer = ansIdx;
    question.isCorrectAnswer = ansIdx === correctAnswer;
  }

  retakeQuiz() {
    this.loadQuestions();
    this.correctAnswers = this.questionsService.getCorrectAnswers();
    this.currentQuestionId = 1;
    this.showReview = false;
  }

}
