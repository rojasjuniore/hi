import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// http
import { HttpModule } from '@angular/http';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Servicios
import { FirebaseService } from './services/firebase.service';

// Firabase
import { AngularFireModule } from 'angularfire2';
import { configFirebase } from '../environments/config.firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    AngularFireModule.initializeApp(configFirebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
