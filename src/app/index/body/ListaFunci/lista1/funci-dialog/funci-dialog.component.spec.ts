import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunciDialogComponent } from './funci-dialog.component';

describe('FunciDialogComponent', () => {
  let component: FunciDialogComponent;
  let fixture: ComponentFixture<FunciDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunciDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunciDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
