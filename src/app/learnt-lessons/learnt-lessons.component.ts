import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from '../contact';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-lessons-learnt',
  templateUrl: './learnt-lessons.component.html',
  styleUrls: ['./learnt-lessons.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class LearntLessonsComponent {
  contactData$: Observable<Contact> = of({
    company: 'Bison Schweiz AG',
    name: 'Johannes Zeller',
    email: 'johannes.zeller@bison-group.com',
  });
}
