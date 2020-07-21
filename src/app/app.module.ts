import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { IntroComponent } from './intro/intro.component';
import { ExtroComponent } from './extro/extro.component';
import { InComponent } from './in/in.component';
import { IsComponent } from './is/is.component';
import { EnComponent } from './en/en.component';
import { EsComponent } from './es/es.component';
import { IntComponent } from './int/int.component';
import { InfComponent } from './inf/inf.component';
import { IstComponent } from './ist/ist.component';
import { IsfComponent } from './isf/isf.component';
import { EntComponent } from './ent/ent.component';
import { EnfComponent } from './enf/enf.component';
import { EstComponent } from './est/est.component';
import { EsfComponent } from './esf/esf.component';
import { IntpComponent } from './intp/intp.component';
import { IntjComponent } from './intj/intj.component';
import { InfpComponent } from './infp/infp.component';
import { InfjComponent } from './infj/infj.component';
import { IstpComponent } from './istp/istp.component';
import { IstjComponent } from './istj/istj.component';
import { IsfpComponent } from './isfp/isfp.component';
import { IsfjComponent } from './isfj/isfj.component';
import { EntpComponent } from './entp/entp.component';
import { EntjComponent } from './entj/entj.component';
import { EnfpComponent } from './enfp/enfp.component';
import { EnfjComponent } from './enfj/enfj.component';
import { EstpComponent } from './estp/estp.component';
import { EstjComponent } from './estj/estj.component';
import { EsfpComponent } from './esfp/esfp.component';
import { EsfjComponent } from './esfj/esfj.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    IntroComponent,
    ExtroComponent,
    InComponent,
    IsComponent,
    EnComponent,
    EsComponent,
    IntComponent,
    InfComponent,
    IstComponent,
    IsfComponent,
    EntComponent,
    EnfComponent,
    EstComponent,
    EsfComponent,
    IntpComponent,
    IntjComponent,
    InfpComponent,
    InfjComponent,
    IstpComponent,
    IstjComponent,
    IsfpComponent,
    IsfjComponent,
    EntpComponent,
    EntjComponent,
    EnfpComponent,
    EnfjComponent,
    EstpComponent,
    EstjComponent,
    EsfpComponent,
    EsfjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
