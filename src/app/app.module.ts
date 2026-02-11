import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TopicsComponent } from './topics/topics.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { MensHelpComponent } from './mens-help/mens-help.component';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  ExclamationCircleOutline,
  FrownOutline,
  FireOutline,
  UserOutline,
  CompassOutline,
  WarningOutline,
  HeartOutline,
  CloseCircleOutline,
  ExclamationOutline,
  EyeOutline,
  WalletOutline,
  QuestionCircleOutline,
  EyeInvisibleOutline,
  StarOutline
} from '@ant-design/icons-angular/icons';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, TopicsComponent, TopicDetailComponent, MensHelpComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    NzSelectModule,
    NzAlertModule,
    NzSpinModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: [
    ExclamationCircleOutline,
    FrownOutline,
    FireOutline,
    UserOutline,
    CompassOutline,
    WarningOutline,
    HeartOutline,
    CloseCircleOutline,
    ExclamationOutline,
    EyeOutline,
    WalletOutline,
    QuestionCircleOutline,
    EyeInvisibleOutline,
    StarOutline
  ] as IconDefinition[] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
