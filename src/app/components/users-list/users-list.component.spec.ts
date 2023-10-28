import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { UsersListComponent } from './users-list.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListComponent ],
      providers:[provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all data in users list', ()=>{
    let componentHTML:HTMLElement =  fixture.nativeElement; 
    component.users = [{
      avatar_url:'test',
      login:'test',
      html_url:'test'
    },
    {
      avatar_url:'test',
      login:'test',
      html_url:'test'
    }
    ]

    fixture.detectChanges();
    expect(componentHTML.querySelectorAll('.bg-card').length).toBe(2);
  

  })
});
