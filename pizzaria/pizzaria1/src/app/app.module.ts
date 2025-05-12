import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({"projectId":"pizzaria-projeto-teste-630e3","appId":"1:272333502713:web:411c6529676f1ea0438a28","storageBucket":"pizzaria-projeto-teste-630e3.appspot.com", "apiKey":"Código retirado por segurança","authDomain":"pizzaria-projeto-teste-630e3.firebaseapp.com","messagingSenderId":"272333502713","measurementId":"G-CNY0JXT0TK"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideRemoteConfig(() => getRemoteConfig()), provideFirebaseApp(() => initializeApp({"projectId":"pizzaria-projeto-teste-630e3","appId":"1:272333502713:web:411c6529676f1ea0438a28","storageBucket":"pizzaria-projeto-teste-630e3.appspot.com","apiKey":"AIzaSyDeEQlpaVInzG0BkGI7tMBuC7C4VXYzaL8","authDomain":"pizzaria-projeto-teste-630e3.firebaseapp.com","messagingSenderId":"272333502713","measurementId":"G-CNY0JXT0TK"}))],
  bootstrap: [AppComponent]
})
export class AppModule {}
