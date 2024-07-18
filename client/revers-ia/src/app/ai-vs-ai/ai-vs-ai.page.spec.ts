import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AiVsAiPage } from './ai-vs-ai.page';

describe('AiVsAiPage', () => {
  let component: AiVsAiPage;
  let fixture: ComponentFixture<AiVsAiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AiVsAiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
