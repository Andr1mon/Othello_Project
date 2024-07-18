import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseAiDifficultyVsAiFirstPage } from './choose-ai-difficulty-vs-ai-first.page';

describe('ChooseAiDifficultyVsAiFirstPage', () => {
  let component: ChooseAiDifficultyVsAiFirstPage;
  let fixture: ComponentFixture<ChooseAiDifficultyVsAiFirstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseAiDifficultyVsAiFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
