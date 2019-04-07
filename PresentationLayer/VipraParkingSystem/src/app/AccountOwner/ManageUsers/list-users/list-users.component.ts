import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users= [
    {
      firstName: 'Dharani',
      lasttName: 'Muli',
      role: 'Patrol User',
      emailID: 'dharani@gmail.com',
      username: ' Dharani Muli'

    },
    {
      firstName: 'Dharani',
      lasttName: 'Muli',
      role: 'Patrol User',
      emailID: 'dharani@gmail.com',
      username: ' Dharani Muli'

    },
    {
      firstName: 'Dharani',
      lasttName: 'Muli',
      role: 'Patrol User',
      emailID: 'dharani@gmail.com',
      username: ' Dharani Muli'

    },
    {
      firstName: 'Dharani',
      lasttName: 'Muli',
      role: 'Patrol User',
      emailID: 'dharani@gmail.com',
      username: ' Dharani Muli'

    },
    {
      firstName: 'Dharani',
      lasttName: 'Muli',
      role: 'Patrol User',
      emailID: 'dharani@gmail.com',
      username: ' Dharani Muli'

    }
  ];
}
