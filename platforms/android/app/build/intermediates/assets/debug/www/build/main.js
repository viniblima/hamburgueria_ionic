webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style=\'background-color: #0A0D14;\'>\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/>\n  <img src = \'http://vservices.com.br/topo_card.png\'/>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrintPage = /** @class */ (function () {
    function PrintPage(navCtrl, navParams, _http, printer, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.printer = printer;
        this.alertCtrl = alertCtrl;
        this.pedido = this.navParams.get('pedidoSelecionado');
        console.log(this.pedido);
        this._http = _http;
        this.data = {};
        this.data.response = '';
        this.text = '';
        var url = 'http://vservices.com.br/servicos/servicos/get_pedidos_caixa_lista';
        var data = JSON.stringify({
            id: this.pedido.id
        });
        this._http.post(url, data).subscribe(function (data) {
            _this.data.response = data._body;
            console.log(_this.data.response);
            _this.pedidos = JSON.parse(_this.data.response);
            console.log(_this.pedidos);
        }, function (error) {
            console.log(error);
        });
    }
    PrintPage.prototype.print = function () {
        var options = {
            name: 'Pedido #00' + this.pedido.id,
            //printerId: 'printer007',
            duplex: true,
            landscape: true,
            grayscale: true
        };
        console.log(this.pedidos.length);
        this.text = '<h1>Pedido #00' + this.pedido.id + '</h1><br/><br/>';
        for (var i = 0; i < this.pedidos.length; i++) {
            this.text += '<h2>' + this.pedidos[i].nome_produto + '</h2>';
            this.text += '<h3>Observação/Tipo de Pão: ' + this.pedidos[i].observacao + '</h3>';
            this.text += '<br/><br/>';
        }
        console.log(this.text);
        this.printer.print(this.text, options);
    };
    PrintPage.prototype.alertPrint = function () {
        var _this = this;
        this.alertCtrl.create({
            title: "Galera's Burger",
            subTitle: 'Confirma o pagamento do pedido?',
            buttons: [
                { text: 'Sim',
                    handler: function (data) {
                        _this.print();
                        _this.finalizaPedido();
                    } },
                { text: 'Não' }
            ]
        }).present();
    };
    PrintPage.prototype.finalizaPedido = function () {
        var _this = this;
        var url = 'http://vservices.com.br/servicos/servicos/finaliza_pedido_galera';
        var data = JSON.stringify({
            id: this.pedido.id
        });
        this._http.post(url, data).subscribe(function (data) {
            _this.data.response = data._body;
            if (_this.data.response == 'sucesso') {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    PrintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-print',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\print\print.html"*/'<ion-header>\n\n  <ion-navbar color = \'primary\'>\n    <ion-title>Pedido #00{{pedido.id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style = "background-color:	#0A0D14;color: white;">\n  \n  <ion-card style=\'background-color: #D9B056; color: white;\'>\n    <ion-list id="pedidos-list5">\n        <ion-item color="none" id="pedidos-list-item10" style = "background-color:#D9B056" class="item-borderless" *ngFor=\'let pedidos of pedidos\'>  \n          <ion-icon name="restaurant" item-left style =\'color:white;\'></ion-icon>\n          <h1 style="color: white;">{{pedidos.nome_produto}}</h1>\n          <h1 style="color: white;" *ngIf="pedidos.observacao == \'Brioche\' ">Pão: Brioche</h1>\n          <h1 style="color: white;" *ngIf="pedidos.observacao == \'Australiano\' ">Pão: Australiano</h1>\n          \n        </ion-item>\n    </ion-list>  \n  </ion-card>\n\n    <br/><br/>\n    <br/>\n<button id="login-button1" (click)="alertPrint()" ion-button color="light" block>\n      Imprimir\n    </button>\n</ion-content>'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\print\print.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_printer__["a" /* Printer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrintPage);
    return PrintPage;
}());

//# sourceMappingURL=print.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produto_produto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardapioPage = /** @class */ (function () {
    function CardapioPage(navCtrl, navParams, _http, _alertCtrl, _loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.opcao = this.navParams.get("opcaoSelecionada");
        console.log(this.opcao);
        this.url = 'http://vservices.com.br/servicos/servicos/get_cardapio/' + this.opcao.id;
    }
    CardapioPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Carregando opções..."
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (cardapios) {
            _this.cardapio = cardapios;
            loader.dismiss();
            console.log(_this.cardapio);
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: "OK" }],
                subTitle: "Não foi possivel obter a descrição. Tente novamente."
            }).present();
        });
    };
    CardapioPage.prototype.seleciona = function (cardapio) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produto_produto__["a" /* ProdutoPage */], { cardapioSelecionado: cardapio });
    };
    CardapioPage.prototype.carrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CardapioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapio',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\cardapio\cardapio.html"*/'<ion-header>\n\n  <ion-navbar color = \'primary\'>\n    <ion-title>{{opcao.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style = "background-color:	#0A0D14;">\n    <ion-img  width=\'280\' height="50" src = \'http://vservices.com.br/topo_card.png\' ></ion-img>\n    <ion-img width=\'50\' height=\'45\' src = \'http://vservices.com.br/cart.jpg\' (click)="carrinho()"></ion-img>\n    <br/><br/><br/><br/>\n  <ion-card *ngFor = \'let cardapio of cardapio\' style="background-color: #0A0D14">\n    <img src = "{{cardapio.imgurl}}" (click)=\'seleciona(cardapio)\'/>\n    <br/><br/><br/>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\cardapio\cardapio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CardapioPage);
    return CardapioPage;
}());

//# sourceMappingURL=cardapio.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opcoes_opcoes__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProdutoPage = /** @class */ (function () {
    function ProdutoPage(navCtrl, _http, _http2, _alertCtrl, _loadingCtrl, navParams) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._http2 = _http2;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.navParams = navParams;
        this.pedidos = [];
        this.cardapio = this.navParams.get("cardapioSelecionado");
        console.log(this.cardapio);
        this.url = 'http://vservices.com.br/servicos/servicos/get_pergunta/' + this.cardapio.cardapio_id;
        this.pedidos = JSON.parse(sessionStorage.getItem("carrinho"));
        if (this.pedidos == null) {
            this.pedidos = [];
            sessionStorage.setItem("carrinho", '[]');
        }
        console.log(sessionStorage.getItem("carrinho"));
    }
    ProdutoPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Carregando descrição..."
        });
        loader.present();
        this._http
            .get(this.url)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (pergunta) {
            _this.pergunta_base = pergunta;
            loader.dismiss();
            console.log(_this.pergunta_base);
            _this.pergunta = _this.pergunta_base[0].pergunta;
            console.log(_this.pergunta);
            //let url2 = 'http://vservices.com.br/servicos/servicos/get_resposta/'+this.pergunta_base[0].id;
            _this.consultaResposta(_this.pergunta_base[0].id);
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: "OK" }],
                subTitle: "Não foi possivel obter a descrição. Tente novamente."
            }).present();
        });
    };
    ProdutoPage.prototype.consultaResposta = function (id) {
        var _this = this;
        var loader2 = this._loadingCtrl.create({
            content: "Carregando descrição..."
        });
        loader2.present();
        this._http2
            .get('http://vservices.com.br/servicos/servicos/get_resposta/' + id)
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (resposta) {
            _this.resposta = resposta;
            loader2.dismiss();
            console.log(_this.resposta);
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: "OK" }],
                subTitle: "Não foi possivel obter a descrição. Tente novamente."
            }).present();
        });
    };
    ProdutoPage.prototype.adicionaCarrinho = function () {
        this.cardapio.pergunta = this.pergunta;
        console.log(this.cardapio);
        if (sessionStorage.getItem("carrinho") == '[]') {
            console.log("carrinho vazio");
            this.pedidos[0] = this.cardapio;
            sessionStorage.setItem("carrinho", JSON.stringify(this.pedidos));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__opcoes_opcoes__["a" /* OpcoesPage */]);
        }
        else {
            var arrayIndex = this.pedidos.length;
            this.pedidos[arrayIndex] = this.cardapio;
            sessionStorage.setItem('carrinho', JSON.stringify(this.pedidos));
        }
        this._alertCtrl.create({
            title: "Adicionado ao carrinho!",
            subTitle: "Falta pouco pra fazer seu pedido!",
            buttons: [{ text: "OK" }]
        }).present();
    };
    ProdutoPage.prototype.goToCarrinho = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    ProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produto',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\produto\produto.html"*/'<ion-header>\n\n  <ion-navbar color = \'primary\'>\n    <ion-title>{{cardapio.nome}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style = "background-color:	#0A0D14;color: white;">\n  <ion-img  width=\'280\' height="50" src = \'http://vservices.com.br/topo_card.png\' ></ion-img>\n  <br/><br/><br/><br/>\n  <img src=\'{{cardapio.imgurl}}\'/>\n  <br/><br/><br/>\n  <h1>\n  {{cardapio.descricao}}\n  </h1>\n  <br/><br/>\n  <h1>{{pergunta}}</h1>\n  <br/>\n  \n    <ion-item>\n      <ion-label>{{pergunta}}</ion-label>\n    <ion-select [(ngModel)]=\'cardapio.observacao\'>\n      <ion-option *ngFor=\'let resposta of resposta\' value =\'{{resposta.resposta}}\'  name = \'observacao\'>{{resposta.resposta}}</ion-option>\n    </ion-select>\n    </ion-item>\n    <br/>\n    <button ion-button color="primary" (click)=\'adicionaCarrinho()\' block>Adicionar ao Carrinho</button>\n    <br/><br/>\n    <button ion-button color="primary" (click)=\'goToCarrinho()\' block>Carrinho</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\produto\produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ProdutoPage);
    return ProdutoPage;
}());

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_dados_dados__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opcoes_opcoes__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagarPage = /** @class */ (function () {
    function PagarPage(navCtrl, navParams, loadingCtrl, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.carrinhos = JSON.parse(sessionStorage.getItem("carrinho"));
        this.valor = this.navParams.get("valorTotal");
        console.log(this.valor.valor);
        this.dados = new __WEBPACK_IMPORTED_MODULE_2__domain_dados_dados__["a" /* Dados */](null, null, null, null, null, null, null, null, null, null);
        this.http = http;
        this.data = {};
        this.data.response = '';
        this.valorParcela = this.valor.valor / 2;
        this.parcela = this.valorParcela.toFixed(2);
        console.log(this.valor.num_string);
        this.http.get('http://vservices.com.br/servicos/servicos/get_id')
            .subscribe(function (data) {
            _this.data.response = data._body;
            console.log(_this.data);
            var res = _this.data.response;
            _this.id = parseFloat(res);
            _this.id += 1;
            _this.ref = 'sucesso' + _this.id;
            console.log(_this.ref);
            console.log(_this.id);
        });
    }
    PagarPage.prototype.cadastrarPedido = function () {
        var _this = this;
        for (var i = 0; i < this.valor.num_string; i++) {
            var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_galera';
            var data = JSON.stringify({
                nome: this.carrinhos[i].nome,
                observacao: this.carrinhos[i].observacao,
                num_pedido: this.id
            });
            this.http.post(link, data)
                .subscribe(function (data) {
                _this.data.response = data._body;
                console.log(_this.data.response);
                if (_this.data.response == 'sucesso') {
                    sessionStorage.setItem("carrinho", '[]');
                    _this.cadastrarId();
                }
            }, function (error) {
                console.log("Ocorreu um erro!");
            });
        }
    };
    PagarPage.prototype.fazerPedido = function () {
        this.alertCtrl.create({
            title: "Pedido efetuado!",
            subTitle: "Galera's Burguer agradece a preferência!",
            buttons: [{ text: "OK" }]
        }).present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__opcoes_opcoes__["a" /* OpcoesPage */]);
        sessionStorage.setItem("carrinho", "[]");
    };
    PagarPage.prototype.cadastrarId = function () {
        var _this = this;
        console.log(this.id);
        var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_caixa';
        var data = JSON.stringify({
            num_pedido: this.id
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            console.log(_this.data.response);
            if (_this.data.response == ' sucesso') {
                console.log('acabou');
            }
        }, function (error) {
            console.log("Ocorreu um erro!");
        });
    };
    PagarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagar',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\pagar\pagar.html"*/'<ion-header>\n\n  <ion-navbar color = \'primary\'>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  <ion-title><span text-color="color">Pagamento</span></ion-title>\n</ion-navbar>\n\n</ion-header>\n\n<ion-content padding style = "background-color:	#0A0D14;color: white;">\n  <!--\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n        Nome do proprietário:\n  </ion-label>\n  <ion-input [(ngModel)] = "dados.holderName" name = "name" style = "color: white"></ion-input>\n</ion-item>\n\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      CPF(proprietário):\n  </ion-label>\n<ion-input [(ngModel)] = "dados.holderCPF" name = "cpf" style = "color: white"></ion-input>\n</ion-item>\n\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n    Data de nascimento (proprietário):\n  </ion-label>\n  <ion-input [(ngModel)] = "dados.holderBirthDate" name = "birthdate" maxlength=\'10\' style = "color: white"></ion-input>\n</ion-item>\n\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n    DDD:\n  </ion-label>\n  <ion-input [(ngModel)] = "dados.holderAreaCode" name = "ddd" maxlength=\'2\' style = "color: white"></ion-input>\n</ion-item>\n\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Telefone:\n  </ion-label>\n  <ion-input [(ngModel)] = "dados.holderPhone" name = "telefone" maxlength=\'9\' style = "color: white"></ion-input>\n</ion-item>\n-->\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Numero do Cartao:\n  </ion-label>\n    <ion-input [(ngModel)] = "dados.numCartao" name = "numCartao" maxlength=\'16\' style = "color: white"></ion-input> \n</ion-item>\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Código de Segurança:\n  </ion-label>\n    <ion-input [(ngModel)] = "dados.numSegCartao" name = "numSegCartao" maxlength=\'4\' style = "color: white" ></ion-input> \n</ion-item>\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Mês de Expiração:\n  </ion-label>\n    <ion-input [(ngModel)] = "dados.expirationMonth" name = "expirationMonth" maxlength=\'2\' style = "color: white" ></ion-input> \n</ion-item>\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Ano de Expiração:\n  </ion-label>\n    <ion-input [(ngModel)] = "dados.expirationYear" name = "expirationYear" maxlength=\'4\' style = "color: white" ></ion-input> \n</ion-item>\n\n<ion-item style = "background-color:#D9B056">\n  <ion-label style = "color: white">\n      Parcela:\n  </ion-label>\n    <ion-select [(ngModel)] = "dados.parcelaQuantidade" name = \'parcelaQuantidade\' style = "color: white">\n      <ion-option [value] = "1">1 X de R$ {{valor.valor}}</ion-option>\n      <ion-option [value] = "2">2 X de R$ {{parcela}}</ion-option>\n    </ion-select>\n</ion-item>\n  \n<button (click) = "teste()" ion-button color="light" block>Efetuar pagamento</button>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\pagar\pagar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], PagarPage);
    return PagarPage;
}());

//# sourceMappingURL=pagar.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaixaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opcoes_opcoes__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CaixaPage = /** @class */ (function () {
    function CaixaPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_2__domain_usuario_usuario__["a" /* Usuario */](null, null);
    }
    CaixaPage.prototype.opcoes = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__opcoes_opcoes__["a" /* OpcoesPage */]);
    };
    CaixaPage.prototype.check = function () {
        console.log(this.usuario);
        if (this.usuario.email == 'admin' && this.usuario.password == 'admin') {
            console.log("LOGOU");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
        }
        else {
            this.toastCtrl.create({
                message: "Login e/ou senha inválidos",
                position: 'bottom',
                duration: 3000
            }).present();
        }
    };
    CaixaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-caixa',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\caixa\caixa.html"*/'\n<ion-content padding style = "background-color:	#0A0D14;">\n  <br/><br/><br/><br/>\n  <img src = \'http://vservices.com.br/topo_card.png\' (click)=\'opcoes()\'class=\'topo\'/>\n  <form id="login-form1">\n    <ion-list id="login-list2" padding>\n      <ion-item>\n        <ion-label color=\'primary\'>\n          Email:\n        </ion-label>\n        <ion-input type="email" [(ngModel)] = "usuario.email" name = "email" color=\'primary\'></ion-input>\n      </ion-item>\n      <br/><br/>\n      <ion-item>\n        <ion-label color=\'primary\'>\n          Senha:\n        </ion-label>\n        <ion-input type="password" [(ngModel)] = "usuario.password" name = "senha" color=\'primary\'></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1" padding>\n    <button id="login-button1" (click)="check()" ion-button color="light" block>\n      Login\n    </button>\n    \n  </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\caixa\caixa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CaixaPage);
    return CaixaPage;
}());

//# sourceMappingURL=caixa.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_descricao_descricao__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cardapio_cardapio__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_opcoes_opcoes__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_produto_produto__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pagar_pagar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_caixa_caixa__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_print_print__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_printer__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_descricao_descricao__["a" /* DescricaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cardapio_cardapio__["a" /* CardapioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opcoes_opcoes__["a" /* OpcoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pagar_pagar__["a" /* PagarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_caixa_caixa__["a" /* CaixaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_print_print__["a" /* PrintPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_descricao_descricao__["a" /* DescricaoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cardapio_cardapio__["a" /* CardapioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opcoes_opcoes__["a" /* OpcoesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_produto_produto__["a" /* ProdutoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pagar_pagar__["a" /* PagarPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_caixa_caixa__["a" /* CaixaPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_print_print__["a" /* PrintPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_printer__["a" /* Printer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_opcoes_opcoes__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_opcoes_opcoes__["a" /* OpcoesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Pedidos', component: __WEBPACK_IMPORTED_MODULE_6__pages_opcoes_opcoes__["a" /* OpcoesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dados; });
var Dados = /** @class */ (function () {
    function Dados(numCartao, numSegCartao, expirationMonth, expirationYear, holderName, holderCPF, holderBirthDate, holderAreaCode, holderPhone, parcelaQuantidade) {
        this.numCartao = numCartao;
        this.numSegCartao = numSegCartao;
        this.expirationMonth = expirationMonth;
        this.expirationYear = expirationYear;
        this.holderName = holderName;
        this.holderCPF = holderCPF;
        this.holderBirthDate = holderBirthDate;
        this.holderAreaCode = holderAreaCode;
        this.holderPhone = holderPhone;
        this.parcelaQuantidade = parcelaQuantidade;
    }
    return Dados;
}());

//# sourceMappingURL=dados.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Valor; });
var Valor = /** @class */ (function () {
    function Valor(valor, num_string) {
        this.valor = valor;
        this.num_string = num_string;
    }
    return Valor;
}());

//# sourceMappingURL=valor.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(email, password) {
        this.email = email;
        this.password = password;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescricaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescricaoPage = /** @class */ (function () {
    function DescricaoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.produtos = [];
        this.produto = this.navParams.get("descricaoProduto");
        console.log(sessionStorage.getItem("carrinho"));
        this.produtos = JSON.parse(sessionStorage.getItem("carrinho"));
        if (this.produtos == null) {
            this.produtos = [];
        }
        //
    }
    DescricaoPage.prototype.adicionaCarrinho = function () {
        if (sessionStorage.getItem("carrinho") == '[]') {
            console.log("carrinho vazio");
            this.produtos[0] = this.produto;
            sessionStorage.setItem("carrinho", JSON.stringify(this.produtos));
            console.log(this.produtos);
        }
        else {
            var arrayIndex = this.produtos.length;
            this.produtos[arrayIndex] = this.produto;
            sessionStorage.setItem('carrinho', JSON.stringify(this.produtos));
            console.log(this.produtos);
        }
    };
    DescricaoPage.prototype.esvaziarCarrinho = function () {
        sessionStorage.setItem("carrinho", '[]');
        console.log(sessionStorage.getItem("carrinho"));
    };
    DescricaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descricao',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\descricao\descricao.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Descricao</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-card>\n  <strong>Nome: {{produto.nome}}</strong><br/>\n    <strong>Preço: {{produto.preco}}</strong><br/>\n    <strong>Id: {{produto.id}}</strong><br/>\n    \n</ion-card>\n<button (click)=\'adicionaCarrinho()\'>Adicionar ao carrinho</button>\n\n<button (click)=\'esvaziarCarrinho()\'>Esvaziar carrinho</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\descricao\descricao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DescricaoPage);
    return DescricaoPage;
}());

//# sourceMappingURL=descricao.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpcoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardapio_cardapio__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__caixa_caixa__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpcoesPage = /** @class */ (function () {
    function OpcoesPage(navCtrl, _http, _loadingCtrl, _alertCtrl) {
        this.navCtrl = navCtrl;
        this._http = _http;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
    }
    OpcoesPage.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem("carrinho") == undefined) {
            sessionStorage.setItem("carrinho", '[]');
        }
        var loader = this._loadingCtrl.create({
            content: "Carregando. Aguarde..."
        });
        loader.present();
        this._http
            .get('http://vservices.com.br/servicos/servicos/get_opcoes')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (opcoes) {
            _this.opcao = opcoes;
            console.log(_this.opcao);
            loader.dismiss();
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl.create({
                title: "Falha na conexão",
                buttons: [{ text: "OK" }],
                subTitle: "Não possível obter as opções. Tente novamente."
            }).present();
        });
    };
    OpcoesPage.prototype.seleciona = function (opcao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cardapio_cardapio__["a" /* CardapioPage */], { opcaoSelecionada: opcao });
    };
    OpcoesPage.prototype.carrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    OpcoesPage.prototype.caixa = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__caixa_caixa__["a" /* CaixaPage */]);
    };
    OpcoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opcoes',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\opcoes\opcoes.html"*/'\n\n<ion-content padding style = "background-color:	#0A0D14;">\n  <img src = \'http://vservices.com.br/topo_card.png\' (click)=\'caixa()\' class=\'topo\'/>\n  <ion-img width=\'50\' height=\'45\' style=\'position: absolute; left:80%;top:8%;\' src = \'http://vservices.com.br/cart.jpg\' (click)="carrinho()"></ion-img>\n  <br/><br/><br/><br/><br/><br/><br/><br/>\n  \n  <ion-card *ngFor = \'let opcao of opcao\' style=\'background-color: #0A0D14\'>\n    <img src = "{{opcao.imgurl}}" (click) = "seleciona(opcao)"/>\n    <br/><br/><br/>\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\opcoes\opcoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OpcoesPage);
    return OpcoesPage;
}());

//# sourceMappingURL=opcoes.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print_print__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(http, navCtrl) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.http
            .get('http://vservices.com.br/servicos/servicos/get_pedidos_caixa')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (pedidos) {
            _this.pedido = pedidos;
            console.log(_this.pedido);
        }, function (error) {
            console.log(error);
        });
    }
    ListPage.prototype.seleciona = function (pedido) {
        console.log(pedido);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__print_print__["a" /* PrintPage */], { pedidoSelecionado: pedido });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\list\list.html"*/'\n<ion-content padding style = "background-color:	#0A0D14;color: white;">\n  \n    <ion-card style=\'background-color: #D9B056; color: white;\' *ngFor=\'let pedido of pedido\'>\n      <ion-list id="pedidos-list5">\n          <ion-item color="none" id="pedidos-list-item10" style = "background-color:#D9B056" class="item-borderless" (click)=\'seleciona(pedido)\'>  \n            <ion-icon name="restaurant" item-left style =\'color:white;\'></ion-icon>\n            <h1 style="color: white;">Pedido #00{{pedido.id}}</h1>\n            <h1 style="color: white;">R${{pedido.valor}}</h1>\n            \n            \n          </ion-item>\n      </ion-list>  \n    </ion-card>\n      <br/><br/>\n      <br/>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__opcoes_opcoes__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pagar_pagar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__domain_valor_valor__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams, http, _alertCtrl, _loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._loadingCtrl = _loadingCtrl;
        this.valor_total = 0;
        this.valor = new __WEBPACK_IMPORTED_MODULE_5__domain_valor_valor__["a" /* Valor */](null, null);
        this.data = {};
        this.data.response = '';
        this.http = http;
        this.aviso = 'Carrinho';
        this.carrinhos = JSON.parse(sessionStorage.getItem("carrinho"));
        //console.log(this.carrinho);
        this.arrayIndex = this.carrinhos.length;
        console.log(this.carrinhos);
        for (var i = 0; i < this.arrayIndex; i++) {
            this.carrinho = this.carrinhos[i];
            this.valor_total += parseFloat(this.carrinhos[i].preco);
        }
        this.total = this.valor_total.toFixed(2);
        console.log(this.total);
        console.log(this.valor_total);
        //this.total_final = this.total.splice('.');
        //console.log(this.total_final[0]+','+this.total_final[1]);
    }
    CarrinhoPage.prototype.ngOnInit = function () {
        var _this = this;
        var loader = this._loadingCtrl.create({
            content: "Carregando..."
        });
        loader.present();
        this.http
            .get('http://vservices.com.br/servicos/servicos/get_numero_pedidos')
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (numero) {
            _this.num = numero;
            loader.dismiss();
            console.log(_this.num);
        })
            .catch(function (err) {
            console.log(err);
            _this._alertCtrl
                .create({
                title: "Falha na conexão",
                buttons: [{ text: "OK" }],
                subTitle: "Não foi possivel obter a descrição. Tente novamente."
            }).present();
        });
        this.valor.num_string = this.arrayIndex;
        this.valor.valor = this.total;
        console.log(this.valor.num_string);
    };
    CarrinhoPage.prototype.esvaziarCarrinho = function () {
        sessionStorage.setItem("carrinho", '[]');
        console.log(sessionStorage.getItem("carrinho"));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__opcoes_opcoes__["a" /* OpcoesPage */]);
    };
    CarrinhoPage.prototype.goToHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__opcoes_opcoes__["a" /* OpcoesPage */]);
    };
    CarrinhoPage.prototype.cadastrarPedido = function () {
        var _this = this;
        this.cadastrarId();
        for (var i = 0; i < this.arrayIndex; i++) {
            var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_galera';
            var data = JSON.stringify({
                nome: this.carrinhos[i].nome,
                observacao: this.carrinhos[i].observacao,
                num_pedido: this.num + 1
            });
            this.http.post(link, data)
                .subscribe(function (data) {
                _this.data.response = data._body;
                console.log(_this.data.response);
                if (_this.data.response == 'sucesso') {
                    sessionStorage.setItem("carrinho", '[]');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__opcoes_opcoes__["a" /* OpcoesPage */]);
                    _this.n = 'sucesso';
                }
            }, function (error) {
                console.log("Ocorreu um erro!");
            });
        }
        this.alertPedido();
    };
    CarrinhoPage.prototype.cadastrarId = function () {
        var _this = this;
        var link = 'http://vservices.com.br/servicos/servicos/cadastrar_pedido_caixa';
        var data = JSON.stringify({
            num_pedido: this.num + 1,
            valor: this.total
        });
        this.http.post(link, data)
            .subscribe(function (data) {
            _this.data.response = data._body;
            console.log(_this.data.response);
            if (_this.data.response == ' sucesso') {
                console.log('acabou');
            }
        }, function (error) {
            console.log("Ocorreu um erro!");
        });
    };
    CarrinhoPage.prototype.finalizarPedido = function (valor) {
        console.log(this.total);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pagar_pagar__["a" /* PagarPage */], { valorTotal: valor });
    };
    CarrinhoPage.prototype.alertPedido = function () {
        this._alertCtrl.create({
            title: 'Pedido efetuado',
            subTitle: 'Siga ao Caixa para efetuar o pagamento',
            buttons: [{ text: 'OK' }]
        }).present();
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\carrinho\carrinho.html"*/'<ion-header>\n\n  <ion-navbar color = \'primary\'>\n    <ion-title>Carrinho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style = "background-color:	#0A0D14;color: white;">\n  \n    <ion-card style=\'background-color: #D9B056; color: white;\' *ngFor=\'let carrinho of carrinhos\'>\n      <ion-list id="pedidos-list5">\n          <ion-item color="none" id="pedidos-list-item10" style = "background-color:#D9B056" class="item-borderless">  \n            <ion-icon name="restaurant" item-left style =\'color:white;\'></ion-icon>\n            <h1 style="color: white;">Pedido: {{carrinho.nome}}</h1>\n            <br/>\n            <h1 style="color: white;">{{carrinho.pergunta}} {{carrinho.observacao}}</h1>\n          </ion-item>\n      </ion-list>  \n    </ion-card>\n      <br/><br/>\n      <br/>\n      <h4 style=\'color:white;\'>Total: R$ {{total}}</h4>\n<button ion-button color="primary" (click)=\'cadastrarPedido()\' block>Finalizar Pedido!</button>\n<br/><br/>\n<button ion-button color="primary" (click)=\'esvaziarCarrinho()\' block>Esvaziar Carrinho</button>\n<br/><br/>\n<button ion-button color="primary" (click)=\'goToHome()\' block>Home</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Nexon\Desktop\NexonApp\carrinho\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map