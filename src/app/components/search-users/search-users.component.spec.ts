import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { SearchUsersComponent } from './search-users.component';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersListComponent } from '../users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUsersService } from 'src/app/services/get-users/get-users.service';
import { StoreInterface } from 'src/app/models/storeInterface';
import { of } from 'rxjs';
import { UpdateAction } from 'src/app/store/actions/updateUsers.actions';

describe('SearchUsersComponent', () => {
  let component: SearchUsersComponent;
  let fixture: ComponentFixture<SearchUsersComponent>;
  let getUsersService: GetUsersService;
  let store: Store<StoreInterface>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUsersComponent , UsersListComponent],
      providers:[GetUsersService, provideMockStore({})], //provideMockStore({})
      imports:[HttpClientTestingModule , ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUsersComponent);
    component = fixture.componentInstance;
    getUsersService = TestBed.inject(GetUsersService);
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch UpdateAction when searchControl value changes', fakeAsync(() => {
    const searchTerm = 'test';
    const mockResponse = { items: [] };

    // Mock the getUsers method of GetUsersService to return an observable with a mock response.
    spyOn(getUsersService, 'getUsers').and.returnValue(of(mockResponse));

    // Mock the dispatch method of the Store.
    const storeDispatchSpy = spyOn(store, 'dispatch');

    // Trigger the value change in searchControl.
    component.searchControl.setValue(searchTerm);

    // Simulate the debounce time.
    tick(300);

    expect(storeDispatchSpy).toHaveBeenCalledWith(new UpdateAction([])); // Initial dispatch with empty array.

    // Trigger the value change again.
    component.searchControl.setValue(searchTerm);

    // Simulate the debounce time.
    tick(300);

    // Check that getUsersService.getUsers was called with the searchTerm.
    expect(getUsersService.getUsers).toHaveBeenCalledWith(searchTerm);

    // Check that UpdateAction was dispatched with the expected user data.
    expect(storeDispatchSpy).toHaveBeenCalledWith(new UpdateAction([])); // Mocked response is an empty array.
  }));
});
