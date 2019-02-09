import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Pedido } from '../../domain/pedido/pedido';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-print',
  templateUrl: 'print.html',
})
export class PrintPage {
  public pedido: Pedido;
  public pedidos: Pedido[];
  private _http;
  public data;
  public text;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    _http: Http,
    public printer: Printer,
    public alertCtrl: AlertController) 
    {
      
      this.pedido = this.navParams.get('pedidoSelecionado');
      console.log(this.pedido);

      this._http = _http;
      this.data = {};
      this.data.response = '';
      this.text = '';

      let url = 'http://vservices.com.br/servicos/servicos/get_pedidos_caixa_lista';
      
      let data = JSON.stringify({
        id: this.pedido.id
      });
      
      this._http.post(url,data).subscribe( data => {
        this.data.response = data._body;
        console.log(this.data.response);
        this.pedidos = JSON.parse(this.data.response);
        console.log(this.pedidos);
      }, error => {
        console.log(error);
      });
    }

    print(){
      let options: PrintOptions = {
        name: 'Pedido #00'+this.pedido.id,
        //printerId: 'printer007',
        duplex: true,
        landscape: true,
        grayscale: true
      };

      console.log(this.pedidos.length);
      this.text = '<h1>Pedido #00'+this.pedido.id+'</h1><br/><br/>';
      for(let i = 0; i < this.pedidos.length; i ++){
        this.text += '<h2>'+this.pedidos[i].nome_produto+'</h2>';
        this.text += '<h3>Observação/Tipo de Pão: '+this.pedidos[i].observacao+'</h3>';
        this.text += '<br/><br/>';
      }
      console.log(this.text);

      this.printer.print(this.text,options);


    }
    alertPrint(){
      this.alertCtrl.create({
        title: "Galera's Burger",
        subTitle:'Confirma o pagamento do pedido?',
        buttons: [
                  {text: 'Sim',
                  handler: data => {
                    this.print();
                    this.finalizaPedido();
                  }},
                  {text: 'Não'}
                  ]
      }).present();
    }
    finalizaPedido(){
      let url = 'http://vservices.com.br/servicos/servicos/finaliza_pedido_galera';
      let data = JSON.stringify({
        id:this.pedido.id
      });

      this._http.post(url, data).subscribe( data =>{
        this.data.response = data._body;
        if(this.data.response == 'sucesso'){
          this.navCtrl.setRoot(ListPage);
        }
      }, error => {
        console.log(error);
      })
    }

  

}
