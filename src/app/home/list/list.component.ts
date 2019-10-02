import { Component, OnInit } from '@angular/core';
import Article from 'src/app/Models/article';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articleList : Article[] = [
    new Article ('canard', 'canard jaune en plastique', 5, 20),
    new Article ('chat', 'peluche de chat', 20, 30),
  ]

  constructor() { }

  ngOnInit() {
  }

}
