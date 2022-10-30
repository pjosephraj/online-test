import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

const routes: Routes = [
  {path: '', component: QuizHomeComponent},
  {path: 'questions', component: QuizQuestionsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
