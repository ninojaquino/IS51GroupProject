import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zodiac-signs',
  templateUrl: './zodiac-signs.component.html',
  styleUrls: ['./zodiac-signs.component.css']
})
export class ZodiacSignsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
const month: string;
let day: number;

let zodiacs = (['Aries', 'Leo', 'Cancer', 'Pisces', 'Scorpio', 'Taurus', 'Sagittarius', 'Gemini', 'Virgo', 'Libra', 'Capricorn']);

if (month === 'March' && day >= 21 || month === 'April' && day <= 19) {
  let zodiac = 'Aries';
 console.log(zodiac); 
 while (zodiac) {
console.log(`zodiac sign is ${zodiac}`)
}
}

  

