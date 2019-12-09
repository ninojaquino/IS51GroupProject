import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MonthPickerComponent } from 'ngx-bootstrap';
// import { Http } from '@angular/http';
interface Izodiac {
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
  // const zodiac: string;
  public zod: ZodiacSignsComponent;
  zodiacs: Array<Izodiac> = [];
  // nameInput = ' ';

  // date = '';
  constructor() {
  }

  ngOnInit() {

  }



  zodiac(month, day) {

    const astroSign = '';
    month = this.month.toLowerCase();
    day = this.day;
    // checks month and date within the
    // valid range of a specified zodiac
    if (month === 'december') {

      if (day < 22) {
        this.value = 'Sagittarius';
      } else {
        this.value = 'Capricorn';
      }
    } else if (month === 'january') {
      if (day < 20) {
        this.value = 'Capricorn';
      } else {
        this.value = 'Aquarius';
      }
    } else if (month === 'february') {
      if (day < 19) {
        this.value = 'Aquarius';
      } else {
        this.value = 'Pisces';
      }
    } else if (month === 'march') {
      if (day < 21) {
        this.value = 'Pisces';
      } else {
        this.value = 'Aries';
      }
    } else if (month === 'april') {
      if (day < 20) {
        this.value = 'Aries';
      } else {
        this.value = 'Taurus';
      }
    } else if (month === 'may') {
      if (day < 21) {
        this.value = 'Taurus';
      } else {
        this.value = 'Gemini';
      }
    } else if (month === 'june') {
      if (day < 21) {
        this.value = 'Gemini';
      } else {
        this.value = 'Cancer';
      }
    } else if (month === 'july') {
      if (day < 23) {
        this.value = 'Cancer';
      } else {
        this.value = 'Leo';
      }
    } else if (month === 'august') {
      if (day < 23) {
        this.value = 'Leo';
      } else {
        this.value = 'Virgo';
      }
    } else if (month === 'september') {
      if (day < 23) {
        this.value = 'Virgo';
      } else {
        this.value = 'Libra';
      }
    } else if (month === 'october') {
      if (day < 23) {
        this.value = 'Libra';
      } else {
        this.value = 'Scorpio';
      }
    } else if (month === 'november') {
      if (day < 22) {
        this.value = 'Scorpio';
      } else {
        this.value = 'Sagittarius';
      }
    }
    return astroSign;
  }

  doSomething() {
    const map = new Map();
    map.set('Ali', this.zodiac('december', 25));
    map.set('Alejandra', this.zodiac('september', 26));
    map.set('Melvin', this.zodiac('june', 16));
    map.set('Angeles', this.zodiac('august', 21));

    // Iterate over map keys
    // for (let key of map.keys()) {
    //    console.log(key);                   //A B C
    // }

    // Iterate over map values
    // for (let value of map.values()) {
    //     console.log(value);                 //1 2 3
    // }

    // Iterate over map entries
    for (const entry of map.entries()) {
      console.log(entry[0], entry[1]);    // 'A' 1 'B' 2 'C' 3
    }

    // Using object destructuring
    // for (let [key, value] of map) {
    //     console.log(key, value);            //'A' 1 'B' 2 'C' 3
    // }

  }

  ZodiacCalculate() {
    // this.zodiac(month, day);

    //  alert('Placeholder, display Zodiac function result here');
  }



}



// import { Component, OnInit } from '@angular/core';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { MonthPickerComponent } from 'ngx-bootstrap';
// import { Http } from '@angular/http';
// interface Izodiac {
//   name: string;
//   month: string;
//   day: number;
//   zodiac?: string;
// }
// @Component({
//   selector: 'app-zodiac-signs',
//   templateUrl: './zodiac-signs.component.html',
//   styleUrls: ['./zodiac-signs.component.css']
// })

// export class ZodiacSignsComponent implements OnInit {
//   const zodiac: string;
//   public zod: ZodiacSignsComponent;
//   zodiacs: Array<Izodiac> = [];
//   nameInput = ' ';

//   date = '';
//   constructor() {
//   }

//   ngOnInit() {

//   }



//   zodiac(month, day) {
//     let astroSign = '';
//     alert(astroSign);
//     checks month and date within the
//     valid range of a specified zodiac
//     if (month === 'december') {

//       if (day < 22) {
//         astroSign = 'Sagittarius';
//       } else {
//         astroSign = 'capricorn';
//       }
//     } else if (month === 'january') {
//       if (day < 20) {
//         astroSign = 'Capricorn';
//       } else {
//         astroSign = 'aquarius';
//       }
//     } else if (month === 'february') {
//       if (day < 19) {
//         astroSign = 'Aquarius';
//       } else {
//         astroSign = 'pisces';
//       }
//     } else if (month === 'march') {
//       if (day < 21) {
//         astroSign = 'Pisces';
//       } else {
//         astroSign = 'aries';
//       }
//     } else if (month === 'april') {
//       if (day < 20) {
//         astroSign = 'Aries';
//       } else {
//         astroSign = 'taurus';
//       }
//     } else if (month === 'may') {
//       if (day < 21) {
//         astroSign = 'Taurus';
//       } else {
//         astroSign = 'gemini';
//       }
//     } else if (month === 'june') {
//       if (day < 21) {
//         astroSign = 'Gemini';
//       } else {
//         astroSign = 'cancer';
//       }
//     } else if (month === 'july') {
//       if (day < 23) {
//         astroSign = 'Cancer';
//       } else {
//         astroSign = 'leo';
//       }
//     } else if (month === 'august') {
//       if (day < 23) {
//         astroSign = 'Leo';
//       } else {
//         astroSign = 'virgo';
//       }
//     } else if (month === 'september') {
//       if (day < 23) {
//         astroSign = 'Virgo';
//       } else {
//         astroSign = 'libra';
//       }
//     } else if (month === 'october') {
//       if (day < 23) {
//         astroSign = 'Libra';
//       } else {
//         astroSign = 'scorpio';
//       }
//     } else if (month === 'november') {
//       if (day < 22) {
//         astroSign = 'scorpio';
//       } else {
//         astroSign = 'sagittarius';
//       }
//     }

//     return astroSign;

//   }

//   doSomething() {
//     let map = new Map();
//     map.set('Ali', this.zodiac('december', 25));
//     map.set('Alejandra', this.zodiac('september', 26));
//     map.set('Melvin', this.zodiac('june', 16));
//     map.set('Angeles', this.zodiac('august', 21));

//     Iterate over map keys
//     for (let key of map.keys()) {
//        console.log(key);                   A B C
//     }

//     Iterate over map values
//     for (let value of map.values()) {
//         console.log(value);                 1 2 3
//     }

//     Iterate over map entries
//     for (let entry of map.entries()) {
//       console.log(entry[0], entry[1]);     'A' 1 'B' 2 'C' 3
//     }

//     Using object destructuring
//     for (let [key, value] of map) {
//         console.log(key, value);            'A' 1 'B' 2 'C' 3
//     }

//   }

//   ZodiacCalculate() {
//     this.zodiac(month, day);

//     alert('Placeholder, display Zodiac function result here');
//   }



// }


