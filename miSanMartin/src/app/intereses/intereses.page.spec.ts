import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InteresesPage } from './intereses.page';

describe('InteresesPage', () => {
  let component: InteresesPage;
  let fixture: ComponentFixture<InteresesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteresesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InteresesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
