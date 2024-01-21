import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PlatesPage } from './plates.page';

describe('PlatesPage', () => {
  let component: PlatesPage;
  let fixture: ComponentFixture<PlatesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
