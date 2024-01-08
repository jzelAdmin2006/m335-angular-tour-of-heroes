import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  standalone: true,
  imports: [NgIf, NgForOf],
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
