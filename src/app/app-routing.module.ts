import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { StartComponent } from "./start/start.component";
import { IntroComponent } from "./intro/intro.component";
import { ExtroComponent } from "./extro/extro.component";
import { InComponent } from "./in/in.component";
import { IsComponent } from "./is/is.component";
import {  EnComponent} from "./en/en.component";
import { EsComponent } from "./es/es.component";
import { IntComponent } from "./int/int.component";
import { InfComponent } from "./inf/inf.component";
import {  IstComponent } from "./ist/ist.component";
import {  IsfComponent } from "./isf/isf.component";
import { EntComponent } from "./ent/ent.component";
import { EnfComponent } from "./enf/enf.component";
import { EstComponent } from "./est/est.component";
import { EsfComponent } from "./esf/esf.component";
import { IntpComponent } from "./intp/intp.component";
import { IntjComponent } from "./intj/intj.component";
import {  InfpComponent} from "./infp/infp.component";
import { InfjComponent } from "./infj/infj.component";
import { IstpComponent } from "./istp/istp.component";
import {  IstjComponent} from "./istj/istj.component";
import { IsfpComponent } from "./isfp/isfp.component";
import { IsfjComponent } from "./isfj/isfj.component";
import { EntpComponent } from "./entp/entp.component";
import { EntjComponent } from "./entj/entj.component";
import { EnfpComponent } from "./enfp/enfp.component";
import { EnfjComponent } from "./enfj/enfj.component";
import {  EstpComponent } from "./estp/estp.component";
import { EstjComponent } from "./estj/estj.component";
import { EsfpComponent } from "./esfp/esfp.component";
import { EsfjComponent  } from "./esfj/esfj.component";
const routes: Routes = [
  {
    path: '',
    component: HomeComponent 
  },
  {
    path: 'start',
    component: StartComponent 
  },
  {
    path: 'intro',
    component: IntroComponent 
  },
  {
    path: 'extro',
    component: ExtroComponent 
  },
  {
    path: 'in',
    component: InComponent 
  },{
    path: 'is',
    component: IsComponent 
  },{
    path: 'en',
    component: EnComponent 
  },{
    path: 'es',
    component: EsComponent 
  },{
    path: 'int',
    component: IntComponent 
  },{
    path: 'inf',
    component: InfComponent 
  },{
    path: 'ist',
    component: IstComponent 
  },{
    path: 'isf',
    component: IsfComponent 
  },{
    path: 'ent',
    component: EntComponent 
  },{
    path: 'enf',
    component: EnfComponent 
  },{
    path: 'est',
    component: EstComponent 
  },{
    path: 'esf',
    component: EsfComponent 
  },{
    path: 'intp',
    component: IntpComponent 
  },{
    path: 'intj',
    component: IntjComponent 
  },{
    path: 'infp',
    component: IntpComponent 
  },{
    path: 'infj',
    component: InfjComponent 
  },{
    path: 'istp',
    component: IstpComponent 
  },{
    path: 'istj',
    component: IstjComponent 
  },{
    path: 'isfp',
    component: IsfpComponent 
  },{
    path: 'isfj',
    component: IsfjComponent 
  }

  ,{
    path: 'entp',
    component: EntpComponent 
  },{
    path: 'entj',
    component: EntjComponent 
  },{
    path: 'enfp',
    component: EntpComponent 
  },{
    path: 'enfj',
    component: EnfjComponent 
  },{
    path: 'estp',
    component: EstpComponent 
  },{
    path: 'estj',
    component: EstjComponent 
  },{
    path: 'esfp',
    component: EsfpComponent 
  },{
    path: 'esfj',
    component: EsfjComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
