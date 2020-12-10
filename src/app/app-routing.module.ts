import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import {HtmlPageComponent} from './html-page/html-page.component';
import {CssPageComponent} from './css-page/css-page.component';
import {JavascriptPageComponent} from './javascript-page/javascript-page.component';
import {AngularPageComponent} from './angular-page/angular-page.component';
import {PhpPageComponent} from './php-page/php-page.component';

const routes: Routes = [
    {
      path: '', component: MainLayoutComponent, children: [
            {path: '', redirectTo: '/', pathMatch: 'full'},
            {path: '', component: HomePageComponent},
            {path: 'post/:id', component: PostPageComponent},
            {path: 'html', component: HtmlPageComponent},
            {path: 'css', component: CssPageComponent},
            {path: 'javascript', component: JavascriptPageComponent},
            {path: 'angular', component: AngularPageComponent},
            {path: 'php', component: PhpPageComponent}
        ]
    },
    {
        // path: 'admin', loadChildren: './admin/admin.module#AdminModule'
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
