import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario } from '../../domain/usuario/usuario';
import { OpcoesPage } from '../opcoes/opcoes';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-caixa',
  templateUrl: 'caixa.html',
})
export class CaixaPage {
  public usuario: Usuario;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) 
    {
      this.usuario = new Usuario(null,null);

      
    }
    opcoes(){
      this.navCtrl.setRoot(OpcoesPage);
    }
    check(){
      console.log(this.usuario);
      if(this.usuario.email == 'admin' && this.usuario.password=='admin'){
        console.log("LOGOU");
        this.navCtrl.setRoot(ListPage);
      }else{
        this.toastCtrl.create({
          message: "Login e/ou senha inválidos",
          position: 'bottom',
          duration: 3000
        }).present();
      }
    }
  
}
