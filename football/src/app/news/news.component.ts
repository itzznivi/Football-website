import { Component } from '@angular/core';
export interface News {
  headline: string;
  time: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  newsList: News[] = [
    {
      headline: ' Football: Scottish Premiership Results',
      time: '10:00 AM',
      imageUrl: 'https://i.eurosport.com/2020/05/12/2817956-58124148-2560-1440.jpg',
      link:''
   
    },
    {
      headline: ' Football: Spanish Copa Del Rey Result',
      time: '11:30 AM',
      imageUrl: 'https://jooinn.com/images/soccer-football-ball-in-the-corner-of-the-pitch.jpg',
      link:''
    },
    {
      headline: ' Højlund sidelined, Moyes offered new contract and more: football news – as it happened',
      time: '11:00 AM',
      imageUrl: 'https://www.bing.com/th?id=OVFT.yDuLookYLBanSUz1zlV3dS&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.4',
      link:''
    },
    {
      headline: ' Chargers News: Justin Herbert Finally Reacts to Jim Harbaugh Hire',
      time: '1:30 PM',
      imageUrl: 'https://www.bing.com/th?id=OVFT.rcl-fPyDwv9xiW8W-fHvIy&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.4',
      link:''
    },{
      headline: ' Chargers News: Justin Herbert Finally Reacts to Jim Harbaugh Hire',
      time: '12:30 AM',
      imageUrl: 'https://www.bing.com/th?id=OVFT._ovkoTyGI7nVdiBEsKQS3y&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.4',
      link:''
    }, {
      headline: 'The Football News Show: Should Everton be bolder against Crystal Palace?',
      time: '5:30 AM',
      imageUrl: 'https://www.bing.com/th?id=OVFT.3QgaP6iq5UhzZ4KnZz1RZS&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.4',
      link:''
    },
    // Add more news items as needed
  ];
}
