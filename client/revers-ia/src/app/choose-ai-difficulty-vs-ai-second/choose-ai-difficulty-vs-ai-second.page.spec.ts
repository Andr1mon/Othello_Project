import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseAiDifficultyVsAiSecondPage } from './choose-ai-difficulty-vs-ai-second.page';

describe('ChooseAiDifficultyVsAiSecondPage', () => {
  let component: ChooseAiDifficultyVsAiSecondPage;
  let fixture: ComponentFixture<ChooseAiDifficultyVsAiSecondPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseAiDifficultyVsAiSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
