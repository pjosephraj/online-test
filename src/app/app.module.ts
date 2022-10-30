import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizHomeComponent } from './quiz-home/quiz-home.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizHomeComponent,
    QuizQuestionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
