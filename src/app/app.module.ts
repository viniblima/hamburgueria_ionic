import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DescricaoPage } from '../pages/descricao/descricao';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CardapioPage } from '../pages/cardapio/cardapio';
import { OpcoesPage } from '../pages/opcoes/opcoes';
import { ProdutoPage } from '../pages/produto/produto';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { PagarPage } from '../pages/pagar/pagar';
import { CaixaPage } from '../pages/caixa/caixa';
import { PrintPage } from '../pages/print/print';

import { Printer } from '@ionic-native/printer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DescricaoPage,
    CardapioPage,
    OpcoesPage,
    ProdutoPage,
    CarrinhoPage,
    PagarPage,
    CaixaPage,
    PrintPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DescricaoPage,
    CardapioPage,
    OpcoesPage,
    ProdutoPage,
    CarrinhoPage,
    PagarPage,
    CaixaPage,
    PrintPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Printer
  ]
})
export class AppModule {}
