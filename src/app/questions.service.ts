import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './models/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/assets/questions.json');
  }

  getCorrectAnswers() {
    const answers = new Map();
    answers.set(1, 1);
    answers.set(2, 3);
    answers.set(3, 3);
    answers.set(4, 1);
    answers.set(5, 2);
    return answers;
  }
}
