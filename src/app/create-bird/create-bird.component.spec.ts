import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBirdComponent } from './create-bird.component';

describe('CreateBirdComponent', () => {
  let component: CreateBirdComponent;
  let fixture: ComponentFixture<CreateBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
