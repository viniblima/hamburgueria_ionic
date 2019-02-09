import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { Dados } from '../../domain/dados/dados';

import { Valor } from '../../domain/valor/valor';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { Http } from '@angular/http';
import { OpcoesPage } from '../opcoes/opcoes';

@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html',
})
export class PagarPage {
  public valor_total;
  public ref;
  public dados: Dados;
  public valorParcela;
  public http;
  public data;
  public parcela;
  public id;
  public valor: Valor;
  public sinal;
  public carrinhos: Cardapio[];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    http: Http) 
    {
      

      this.carrinhos = JSON.parse(sessionStorage.getItem("carrinho"));
      this.valor = this.navParams.get("valorTotal");
      console.log(this.valor.valor);
      this.dados = new Dados(null, null, null, null, null, null,null,null,null, null);
      this.http = http;
      this.data = {};
      this.data.response = '';
      this.valorParcela = this.valor.valor/2;
      
      this.parcela = this.valorParcela.toFixed(2);
      
      console.log(this.valor.num_string);

      
      this.http.get('http://vservices.com.br/servicos/servicos/get_id')
      .subscribe( data =>{
        this.data.response = data._body;
        console.log(this.data);
        var res = this.data.response;
        this.id = parseFloat(res);
        this.id += 1;
        this.ref = 'sucesso'+this.id;
        console.log(this.ref);
        console.log(this.id);


      })
    }
    
    
    
    
   cadastrarPedido(){
    
    for(var i=0;i<this.valor.num_string;i++){
      
      var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_galera';
      var data = JSON.stringify({
      nome: this.carrinhos[i].nome,
      observacao: this.carrinhos[i].observacao,
      num_pedido: this.id
    });

    this.http.post(link, data)
      .subscribe( data =>{
        this.data.response = data._body;
        console.log(this.data.response);
        if(this.data.response == 'sucesso'){
          sessionStorage.setItem("carrinho", '[]');
          this.cadastrarId();
        }
      }, error =>{
        console.log("Ocorreu um erro!");
      });
    }
    
  }
  fazerPedido(){
    this.alertCtrl.create({
      title: "Pedido efetuado!",
      subTitle: "Galera's Burguer agradece a preferência!",
      buttons: [{text: "OK"}]
    }).present();
    this.navCtrl.setRoot(OpcoesPage);
    sessionStorage.setItem("carrinho", "[]");
  }
  cadastrarId(){
    console.log(this.id);
    var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_caixa';
    var data = JSON.stringify({
      num_pedido: this.id
    });

    this.http.post(link, data)
      .subscribe( data =>{
        this.data.response = data._body;
        console.log(this.data.response);
        if(this.data.response == ' sucesso'){
         console.log('acabou');
        }

      }, error =>{
        console.log("Ocorreu um erro!");
      });
  }
    
}
