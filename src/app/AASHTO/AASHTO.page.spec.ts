import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AASHTOPage } from './AASHTO.page';

describe('AASHTOPage', () => {
  let component: AASHTOPage;
  let fixture: ComponentFixture<AASHTOPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AASHTOPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AASHTOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
