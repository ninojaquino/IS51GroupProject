import { LocalStorageService } from '../localStorageService';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { Local } from 'protractor/built/driverProviders';
import { ToastService, IToast } from '../toast/toast.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: false
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'Another event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: false
    }
  ];


  localStorageService: LocalStorageService<CalendarEvent>;
  toastTypes: Array<string> = [];
  toastChallenges: Array<string> = [];
  constructor(private modal: NgbModal, private toastService: ToastService) {
    this.localStorageService = new LocalStorageService('events');
    this.toastTypes = ['success', 'info', 'warning', 'danger'];
    this.toastChallenges = ['challenge 1: Say hi to a stranger', 'challenge 2: Treat your friend',
    'challenge 3: Call a loved one and ask how they are doing',
    'challenge 4: Assist an elderly', 'challenge 5: Do ten push ups', 'challenge 6: Run a mile',
     'challenge 7: Placeholder'];
  }

  ngOnInit() {
      const savedEvents = this.getItemsFromLocalStorage('events');
      this.events = savedEvents;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
    // this delete works it deletes the item from local storage but its giving an error gotta ask for help
    // this.saveItemsToLocalStorage(this.events);
  }
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  saveItemsToLocalStorage(events: CalendarEvent) {
    const savedEvents = localStorage.setItem('events', JSON.stringify(events));
  }

  getItemsFromLocalStorage(key: string) {
    const savedEvents = JSON.parse(localStorage.getItem(key));
    this.localStorageService.getItemsFromLocalStorage(key);
    this.events = savedEvents;
    return savedEvents;
  }

  toastDailyChallenge() {
    const rand = Math.floor(Math.random() * 7);
    const randomToastType = Math.floor(Math.random() * 4);
    const toastType = this.toastTypes[randomToastType];
    const toastMessage = 'Your daily challenge is: ' + this.toastChallenges[rand];
    const duration = 5500;
    const toastOptions: IToast = {
      message: toastMessage,
      timeout: duration,
      info: toastType
    };
    this.toastService.showToast(toastOptions.info, toastOptions.message, toastOptions.timeout);
  }


}
