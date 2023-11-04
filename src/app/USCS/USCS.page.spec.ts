import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { USCSPage } from './USCS.page';

describe('USCSPage', () => {
  let component: USCSPage;
  let fixture: ComponentFixture<USCSPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [USCSPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(USCSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
