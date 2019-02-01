import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { DataService } from 'src/app/services/data/data.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  submitted = false;

  name: string;
  email: string;
  feedback: string;

  show: boolean = false;

  private feedbackCollection: AngularFirestoreCollection<Feedback>;
  feedbacks: Observable<Feedback[]>;

  constructor(
    private data: DataService,
    private afs: AngularFirestore,
  ) {
    this.feedbackCollection = afs.collection<Feedback>('feedbacks');
    this.feedbacks = this.feedbackCollection.valueChanges();
  }

  ngOnInit() { }

  onSubmit() {
    this.feedbackCollection.add(
      {
        'name': this.name,
        'email': this.email,
        'feedback': this.feedback
      }
    );

    this.name = '';
    this.email = '';
    this.feedback = '';

    alert("Successfully submitted Feedback!");
  }



}
