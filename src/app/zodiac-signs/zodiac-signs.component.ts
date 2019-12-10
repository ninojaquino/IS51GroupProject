import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MonthPickerComponent } from 'ngx-bootstrap';
// import { Http } from '@angular/http';
interface IZodiac {
  name: string;
  month: string;
  day: number;
  zodiac?: string;
}

@Component({
  selector: 'app-zodiac-signs',
  templateUrl: './zodiac-signs.component.html',
  styleUrls: ['./zodiac-signs.component.css']
})

export class ZodiacSignsComponent implements OnInit {
  public value: any;
  public month: any;
  public day: any;
  public zod: ZodiacSignsComponent;
  zodiacs: Array<IZodiac> = [];

  constructor() {
  }

  ngOnInit() {

  }


  zodiac(month, day) {

    const astroSign = '';
    month = this.month.toLowerCase();
    day = this.day;
    if (month === 'december') {

      if (day < 22) {
        this.value = 'Sagittarius';
      } else if (day > 22 && day <= 31) {
        this.value = 'Capricorn';
      } else {
        this.value = 'Only 31 days in December!';
      }
    } else if (month === 'january') {
      if (day < 20) {
        this.value = 'Capricorn';
      } else if (day > 20 && day <= 31) {
        this.value = 'Aquarius';
      } else {
        this.value = 'Only 31 days in January!';
      }
    } else if (month === 'february') {
      if (day < 19) {
        this.value = 'Aquarius';
      } else if (day > 19 && day <= 29) {
        this.value = 'Pisces';
      } else {
        this.value = 'Only 29 days in February!';
      }
    } else if (month === 'march') {
      if (day < 21) {
        this.value = 'Pisces';
      } else if (day > 21 && day <= 31) {
        this.value = 'Aries';
      } else {
        this.value = 'Only 31 days in March!';
      }
    } else if (month === 'april') {
      if (day < 20) {
        this.value = 'Aries';
      } else if (day > 20 && day <= 30) {
        this.value = 'Taurus';
      } else {
        this.value = 'Only 30 days in April!';
      }
    } else if (month === 'may') {
      if (day < 21) {
        this.value = 'Taurus';
      } else if (day > 21 && day <= 31) {
        this.value = 'Gemini';
      } else {
        this.value = 'Only 31 days in May!';
      }
    } else if (month === 'june') {
      if (day < 21) {
        this.value = 'Gemini';
      } else if (day > 21 && day <= 30) {
        this.value = 'Cancer';
      } else {
        this.value = 'Only 30 days in June!';
      }
    } else if (month === 'july') {
      if (day < 23) {
        this.value = 'Cancer';
      } else if (day > 23 && day <= 31) {
        this.value = 'Leo';
      } else {
        this.value = 'Only 31 days in July!';
      }
    } else if (month === 'august') {
      if (day < 23) {
        this.value = 'Leo';
      } else if (day > 23 && day <= 31) {
        this.value = 'Virgo';
      } else {
        this.value = 'Only 31 days in August!';
      }
    } else if (month === 'september') {
      if (day < 23) {
        this.value = 'Virgo';
      } else if (day > 23 && day <= 30) {
        this.value = 'Libra';
      } else {
        this.value = 'Only 30 days in September!';
      }
    } else if (month === 'october') {
      if (day < 23) {
        this.value = 'Libra';
      } else if (day > 23 && day <= 31) {
        this.value = 'Scorpio';
      } else {
        this.value = 'Only 31 days in October!';
      }
    } else if (month === 'november') {
      if (day < 22) {
        this.value = 'scorpio';
      } else if (day > 22 && day <= 30) {
        this.value = 'Sagittarius';
      } else {
        this.value = 'Only 30 days in November!';
      }
    } else {
      this.value = 'Nada! Either the month or day is wrong!';
    }
    return astroSign;
  }

  doSomething() {
    const map = new Map();
    map.set('Ali', this.zodiac('december', 25));
    map.set('Alejandra', this.zodiac('september', 26));
    map.set('Melvin', this.zodiac('june', 16));
    map.set('Angeles', this.zodiac('august', 21));

    // Iterate over map entries
    for (const entry of map.entries()) {
      // console.log(entry[0], entry[1]);
    }

  }

}




