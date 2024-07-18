import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'offline',
    loadChildren: () => import('./offline/offline.module').then( m => m.OfflinePageModule)
  },
  {
    path: 'player-vs-ai',
    loadChildren: () => import('./player-vs-ai/player-vs-ai.module').then( m => m.PlayerVsAiPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'ai-vs-ai',
    loadChildren: () => import('./ai-vs-ai/ai-vs-ai.module').then( m => m.AiVsAiPageModule)
  },
  {
    path: 'how-to-play',
    loadChildren: () => import('./how-to-play/how-to-play.module').then( m => m.HowToPlayPageModule)
  },
  {
    path: 'choose-disc',
    loadChildren: () => import('./choose-disc/choose-disc.module').then( m => m.ChooseDiscPageModule)
  },
  {
    path: 'choose-ai-difficulty-vs-player',
    loadChildren: () => import('./choose-ai-difficulty-vs-player/choose-ai-difficulty-vs-player.module').then( m => m.ChooseAiDifficultyVsPlayerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'choose-ai-difficulty-vs-ai-first',
    loadChildren: () => import('./choose-ai-difficulty-vs-ai-first/choose-ai-difficulty-vs-ai-first.module').then( m => m.ChooseAiDifficultyVsAiFirstPageModule)
  },
  {
    path: 'choose-ai-difficulty-vs-ai-second',
    loadChildren: () => import('./choose-ai-difficulty-vs-ai-second/choose-ai-difficulty-vs-ai-second.module').then( m => m.ChooseAiDifficultyVsAiSecondPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
