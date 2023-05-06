import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


 items: MenuItem[]=[];
  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home',
        routerLink:"allCourse"
      },
      {label: 'Student', icon: 'pi pi-fw pi-pencil',
        routerLink:"student"
      },
      {label: 'Admission', icon: 'pi pi-fw pi-file',
        routerLink:"admission"
      },
      {label: 'Payment', icon: 'pi pi-fw pi-cog',
        routerLink:"payment"
      }
    ];
  }


}
