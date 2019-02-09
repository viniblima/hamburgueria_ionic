import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Pedido } from '../../domain/pedido/pedido';
import { NavController } from 'ionic-angular';
import { PrintPage } from '../print/print';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  public pedido: Pedido[];
  
  constructor(
    public http: Http,
    public navCtrl: NavController)
  {
    this.http
    .get('http://vservices.com.br/servicos/servicos/get_pedidos_caixa')
    .map( res => res.json())
    .toPromise()
    .then( pedidos => {
      this.pedido = pedidos;
      console.log(this.pedido);
    }, error => {
      console.log(error);
    });
  }
  seleciona(pedido){
    console.log(pedido);
    this.navCtrl.push(PrintPage,{pedidoSelecionado:pedido});
  }
}
