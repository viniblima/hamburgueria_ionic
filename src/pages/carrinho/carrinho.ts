import { Component } from '@angular/core';
import { NavController, NavParams,AlertController, LoadingController } from 'ionic-angular';
import { Cardapio } from '../../domain/cardapio/cardapio';
import { OpcoesPage } from '../opcoes/opcoes';
import { Http } from '@angular/http';
import { PagarPage } from '../pagar/pagar';
import { Valor } from '../../domain/valor/valor';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {
  public carrinhos: Cardapio[];
  public carrinho: Cardapio;
  public valor_total = 0;
  public aviso;
  public teste;
  public data;
  public num;
  public aux;
  public arrayIndex;
  public http;
  public valor: Valor;
  public total;
  public total_final;
  public n;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    http: Http,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController ) 
    {
      this. valor = new Valor(null,null);
      this.data = {};
      this.data.response = '';
      this.http = http;

      this.aviso = 'Carrinho';
      this.carrinhos = JSON.parse(sessionStorage.getItem("carrinho"));
      
      //console.log(this.carrinho);
      
      this.arrayIndex = this.carrinhos.length;
      console.log(this.carrinhos);
      
      for(let i =0; i<this.arrayIndex;i++){
        this.carrinho = this.carrinhos[i];
        
        this.valor_total += parseFloat(this.carrinhos[i].preco);
        
        
      }
    this.total = this.valor_total.toFixed(2);
    console.log(this.total);
    console.log(this.valor_total);
    //this.total_final = this.total.splice('.');
    //console.log(this.total_final[0]+','+this.total_final[1]);
    }
    ngOnInit(){
      let loader = this._loadingCtrl.create({
        content: "Carregando..."
      });
      loader.present();

      this.http
      .get('http://vservices.com.br/servicos/servicos/get_numero_pedidos')
      .map(res => res.json())
      .toPromise()
        .then(numero =>{
          this.num = numero;
          loader.dismiss();
          console.log(this.num);
        })
      .catch(err =>{
        console.log(err);
        this._alertCtrl
        .create({
          title: "Falha na conexão",
          buttons: [{ text: "OK"}],
          subTitle: "Não foi possivel obter a descrição. Tente novamente."
        }).present();
      });
      
      this.valor.num_string = this.arrayIndex;
      this.valor.valor = this.total;
      console.log(this.valor.num_string);
    }

    esvaziarCarrinho(){
      sessionStorage.setItem("carrinho",'[]');
      console.log(sessionStorage.getItem("carrinho"));
      this.navCtrl.setRoot(OpcoesPage);
    }
    goToHome(){
      this.navCtrl.setRoot(OpcoesPage);
    }
    cadastrarPedido(){
      this.cadastrarId();
      for(var i=0;i<this.arrayIndex;i++){
      var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_galera';
      var data = JSON.stringify({
        nome: this.carrinhos[i].nome,
        observacao: this.carrinhos[i].observacao,
        num_pedido: this.num+1
      });

      this.http.post(link, data)
        .subscribe( data =>{
          this.data.response = data._body;
          console.log(this.data.response);
          if(this.data.response == 'sucesso'){
            sessionStorage.setItem("carrinho", '[]');
            this.navCtrl.setRoot(OpcoesPage);
            this.n = 'sucesso';
            
          }
        }, error =>{
          console.log("Ocorreu um erro!");
        });
      }
      
        this.alertPedido();
      
      
    }
    cadastrarId(){
      
      var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_caixa';
      var data = JSON.stringify({
        num_pedido: this.num+1,
        valor: this.total
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
    
    
    finalizarPedido(valor){
      console.log(this.total);
      this.navCtrl.push(PagarPage, {valorTotal: valor});
    }

    alertPedido(){
      let pedido_id = this.num+1;
      this._alertCtrl.create({
        title: 'Pedido #00'+pedido_id+' efetuado',
        subTitle: 'Siga ao Caixa para efetuar o pagamento',
        buttons: [{text: 'OK'}]
      }).present();
    }

}
