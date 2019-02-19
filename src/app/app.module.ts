import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { ConsultaComponent } from "./pessoa/consulta/consulta.component";
import { CadastroComponent } from "./pessoa/cadastro/cadastro.component";

import { ConfigService } from "./services/config.service";
import { PessoaService } from "./services/pessoa.service";

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ConfigService, PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
