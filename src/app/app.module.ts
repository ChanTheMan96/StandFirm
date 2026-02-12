import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MensHelpComponent } from './mens-help/mens-help.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { HeaderComponent } from './shared/header.component';
import { RelationshipGuideComponent } from './relationship-guide/relationship-guide.component';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
// NzPageHeaderModule removed (not used in templates)
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// NzSelectModule removed (not used in templates)
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  AimOutline,
  AlertOutline,
  BarChartOutline,
  ClockCircleOutline,
  CloudOutline,
  ClusterOutline,
  ExclamationCircleOutline,
  FrownOutline,
  FireOutline,
  CrownOutline,
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
  MehOutline,
  SafetyCertificateOutline,
  ShakeOutline,
  StarOutline,
  StopOutline,
  TeamOutline,
  LockOutline,
  ArrowLeftOutline,
  ReloadOutline,
  CheckCircleFill,
  MenuOutline,
  CloseOutline,
  UnlockOutline
} from '@ant-design/icons-angular/icons';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, MensHelpComponent, WhoIAmComponent, HeaderComponent, RelationshipGuideComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzIconModule,
    NzDividerModule,
    NzAlertModule,
    NzSpinModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: [
    AimOutline,
    AlertOutline,
    BarChartOutline,
    ClockCircleOutline,
    CloudOutline,
    ClusterOutline,
    ExclamationCircleOutline,
    FrownOutline,
    FireOutline,
    CrownOutline,
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
      MehOutline,
      SafetyCertificateOutline,
      ShakeOutline,
      StarOutline,
      StopOutline,
      TeamOutline,
      LockOutline
      ,
      ArrowLeftOutline,
      ReloadOutline,
      CheckCircleFill,
      MenuOutline,
      CloseOutline,
      UnlockOutline
  ] as IconDefinition[] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
