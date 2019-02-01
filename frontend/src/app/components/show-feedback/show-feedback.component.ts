import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Feedback } from 'src/app/models/feedback';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-feedback',
  templateUrl: './show-feedback.component.html',
  styleUrls: ['./show-feedback.component.css']
})
export class ShowFeedbackComponent implements OnInit {

  private feedbacksCollection: AngularFirestoreCollection<Feedback>;
  feedbacks: Observable<Feedback[]>;

  feedbackId;

  name: string;
  email: string;
  feedback: string;

  constructor(
    private afs: AngularFirestore,
    private routeParam: ActivatedRoute
  ) { 
    this.feedbacksCollection = afs.collection<Feedback>('feedbacks');
    this.feedbacks = this.feedbacksCollection.valueChanges();

    this.feedbackId = this.routeParam.snapshot.paramMap.get('id');
  }

  ngOnInit() { 
    this.afs.firestore.doc('/feedbacks/' + this.feedbackId).get().then(
      result => {

        this.name = result.data().name;
        this.email = result.data().email;
        this.feedback = result.data().feedback;

      }
    )
  }
  
}