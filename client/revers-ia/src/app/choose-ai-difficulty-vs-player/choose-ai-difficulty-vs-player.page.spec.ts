import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseAiDifficultyVsPlayerPage } from './choose-ai-difficulty-vs-player.page';

describe('ChooseAiDifficultyVsPlayerPage', () => {
  let component: ChooseAiDifficultyVsPlayerPage;
  let fixture: ComponentFixture<ChooseAiDifficultyVsPlayerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChooseAiDifficultyVsPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
