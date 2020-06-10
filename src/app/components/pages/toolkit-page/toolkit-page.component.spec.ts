import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitPageComponent } from './toolkit-page.component';

describe('ToolkitPageComponent', () => {
  let component: ToolkitPageComponent;
  let fixture: ComponentFixture<ToolkitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
