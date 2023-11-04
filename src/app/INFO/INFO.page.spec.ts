import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { INFOPage } from './INFO.page';

describe('INFOPage', () => {
  let component: INFOPage;
  let fixture: ComponentFixture<INFOPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [INFOPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(INFOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
