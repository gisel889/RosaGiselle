import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDetallePage } from './home-detalle.page';

describe('HomeDetallePage', () => {
  let component: HomeDetallePage;
  let fixture: ComponentFixture<HomeDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
