import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestchartComponent } from './testchart.component';
import { ChartModule } from 'primeng/chart';

describe('TestchartComponent', () => {
  let component: TestchartComponent;
  let fixture: ComponentFixture<TestchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestchartComponent ],
      imports: [
        ChartModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
