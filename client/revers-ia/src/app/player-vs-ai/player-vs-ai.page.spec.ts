import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerVsAiPage } from './player-vs-ai.page';

describe('PlayerVsAiPage', () => {
  let component: PlayerVsAiPage;
  let fixture: ComponentFixture<PlayerVsAiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayerVsAiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});