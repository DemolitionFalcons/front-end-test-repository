import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSinglePlayerComponent } from './create-single-player.component';

describe('CreateSingleGameComponent', () => {
  let component: CreateSinglePlayerComponent;
  let fixture: ComponentFixture<CreateSinglePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSinglePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSinglePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
