import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseDiscPage } from './choose-disc.page';

describe('ChooseDiscPage', () => {
  let component: ChooseDiscPage;
  let fixture: ComponentFixture<ChooseDiscPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseDiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
