/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ana-sayfa',
        loadChildren: () => import('../ana-sayfa/ana-sayfa.module').then(m => m.AnaSayfaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/ana-sayfa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ana-sayfa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {} */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'ana-sayfa',
        loadChildren: () => import('../ana-sayfa/ana-sayfa.module').then(m => m.AnaSayfaPageModule)
      },
      {
        path: 'xox-game',
        loadChildren: () => import('../xox-game/xox-game.module').then(m => m.XoxGamePageModule)
      },
      {
        path: 'scientific-calculator',
        loadChildren: () => import('../scientific-calculator/scientific-calculator.module').then(m => m.ScientificCalculatorPageModule)
      },
      {
        path: 'todo-list',
        loadChildren: () => import('../todo-list/todo-list.module').then(m => m.TodoListPageModule)
      },
      {
        path: 'memory-game',
        loadChildren: () => import('../memory-game/memory-game.module').then(m => m.MemoryGamePageModule)
      },
      {
        path: 'game2048',
        loadChildren: () => import('../game2048/game2048.module').then(m => m.Game2048PageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/ana-sayfa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/ana-sayfa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
