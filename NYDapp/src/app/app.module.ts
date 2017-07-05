import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DictionaryPage } from "../pages/dictionary/dictionary";
import { DiscoveryPage } from "../pages/discovery/discovery";
import { TranslatePage } from "../pages/translate/translate";
import { UserPage } from "../pages/user/user";
import { CoursePage } from "../pages/course/course";
import { Login } from "../pages/login/login";
import { SegmentPage } from "../pages/test/segment/segment";
import { DetailsPage } from "../pages/dictionary/details/details";
import { CoursedetailPage } from "../pages/course/coursedetail/coursedetail";
import { TestPage } from "../pages/test/test";
import { SettingPage } from "../pages/user/user/setting/setting";
import { GradePage } from "../pages/user/user/grade/grade";
import { ExtensionPage } from "../pages/user/user/extension/extension";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DictionaryPage,
    DiscoveryPage,
    TranslatePage,
    UserPage,
    CoursePage,
    Login,
    SegmentPage,
    DetailsPage,
    CoursedetailPage,
    TestPage,
    SettingPage,
    GradePage,
    ExtensionPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DictionaryPage,
    DiscoveryPage,
    TranslatePage,
    UserPage,
    CoursePage,
    Login,
    SegmentPage,
    DetailsPage,
    CoursedetailPage,
    TestPage,
    SettingPage,
    GradePage,
    ExtensionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
