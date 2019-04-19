import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCommentComponentComponent } from './sub-comment-component.component';

describe('SubCommentComponentComponent', () => {
  let component: SubCommentComponentComponent;
  let fixture: ComponentFixture<SubCommentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCommentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCommentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
