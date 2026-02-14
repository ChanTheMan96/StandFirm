import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensHelpComponent } from './mens-help/mens-help.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { RelationshipGuideComponent } from './relationship-guide/relationship-guide.component';
import { SurrenderComponent } from './surrender/surrender.component';
import { PrayerComponent } from './prayer/prayer.component';

const routes: Routes = [
  { path: '', component: MensHelpComponent },
  { path: 'who-i-am', component: WhoIAmComponent },
  { path: 'relationship-guide', component: RelationshipGuideComponent },
  { path: 'surrender', component: SurrenderComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
