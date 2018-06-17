(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _contents_album_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contents/album/album.component */ "./src/app/contents/album/album.component.ts");
/* harmony import */ var _contents_track_track_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents/track/track.component */ "./src/app/contents/track/track.component.ts");
/* harmony import */ var _contents_artist_artist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contents/artist/artist.component */ "./src/app/contents/artist/artist.component.ts");
/* harmony import */ var _layout_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/login/login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _contents_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contents/apresentacao/apresentacao.component */ "./src/app/contents/apresentacao/apresentacao.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: _layout_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'login', component: _layout_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    {
        path: 'home', component: _layout_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        children: [
            { path: 'tracks', component: _contents_track_track_component__WEBPACK_IMPORTED_MODULE_4__["TrackComponent"] },
            { path: 'artists', component: _contents_artist_artist_component__WEBPACK_IMPORTED_MODULE_5__["ArtistComponent"] },
            { path: 'albums', component: _contents_album_album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"] },
            { path: 'apresentacao', component: _contents_apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_7__["ApresentacaoComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _contents_contents_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contents/contents.module */ "./src/app/contents/contents.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _contents_contents_module__WEBPACK_IMPORTED_MODULE_6__["ContentsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_9__["Angular2FontawesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contents/album/album.component.css":
/*!****************************************************!*\
  !*** ./src/app/contents/album/album.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.posicionamento{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n.conteudo{\r\n    background-color: rgb(250, 253, 247);\r\n    min-height: 100vh;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 120px;\r\n}\r\n\r\n.font{\r\n    font-size: 30px;\r\n    font-family: monospace;\r\n    padding-top: 25px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n\r\n}\r\n\r\n:host /deep/ td.mat-cell:first-child, td.mat-footer-cell:first-child, th.mat-header-cell:first-child{\r\n    padding-left: 5px;\r\n}\r\n\r\n:host /deep/ td.mat-cell:last-child, td.mat-footer-cell:last-child, th.mat-header-cell:last-child{\r\n    padding-right: 5px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .posicionamento{\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/contents/album/album.component.html":
/*!*****************************************************!*\
  !*** ./src/app/contents/album/album.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal-fotos *ngIf=\"habilitarModalFoto\" [imagemModal]=\"imagemModal\"></app-modal-fotos>\n<app-modal-tracks *ngIf=\"habilitarModalTracks\" [tracks]=\"tracks\"></app-modal-tracks>\n<div class=\"conteudo\">\n  <i class=\"pi pi-check\"></i>\n  <h3 class=\"font\">Busca por Álbum</h3>\n  <div class=\"mat-elevation-z8 posicionamento\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Imagem Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef> Imagem </th>\n        <td mat-cell *matCellDef=\"let album\"> \n          <img style=\"cursor: pointer;\" (click)=\"habilitarModal(album.images)\" alt=\"Imagem Album\" width=\"50\" height=\"50\" src=\"{{verificarLength(album.images)}}\"/> \n        </td>\n      </ng-container>\n\n      <!-- Nome Álbum Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Nome do Álbum</th>\n        <td mat-cell style=\"cursor: pointer;\" (click)=\"habilitarModalTrack(album.id)\" *matCellDef=\"let album\"> {{album.name}} </td>\n      </ng-container>\n\n      <!-- Artista Column -->\n      <ng-container matColumnDef=\"artists\">\n        <th mat-header-cell *matHeaderCellDef> Artista </th>\n        <td mat-cell *matCellDef=\"let album\"> {{album.artist}} </td>\n      </ng-container>\n\n      <!-- Icone Favorito Column -->\n      <ng-container matColumnDef=\"icon\">\n        <th mat-header-cell *matHeaderCellDef> Favorito </th>\n        <td mat-cell *matCellDef=\"let album\"><fa (click)=\"favoritar(album.id)\" style=\"cursor: pointer;\" [name]=\"retornarImagem(album.id)\" [size]=\"2\"></fa></td>\n      </ng-container>\n\n      \n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/album/album.component.ts":
/*!***************************************************!*\
  !*** ./src/app/contents/album/album.component.ts ***!
  \***************************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _album_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.service */ "./src/app/contents/album/album.service.ts");
/* harmony import */ var _tracks_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracks.model */ "./src/app/contents/album/tracks.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumComponent = /** @class */ (function () {
    function AlbumComponent(albumService, router) {
        this.albumService = albumService;
        this.router = router;
        // Referencia de colunas
        this.displayedColumns = ['image', 'name', 'artists', 'icon'];
        // Model de Álbum
        this.albums = [];
        // Model de músicas
        this.tracks = [];
    }
    AlbumComponent.prototype.ngOnInit = function () {
        this.verificarRota();
        this.armazenarJsonMeusAlbuns();
    };
    AlbumComponent.prototype.chamarService = function () {
        var _this = this;
        this.albumService.getAlbums().subscribe(function (res) {
            _this.albums = res.albums.items;
            _this.verificarQuantidadeArtistas();
            _this.popularTable();
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    AlbumComponent.prototype.verificarRota = function () {
        if (this.albumService.tipoSelecionado !== 'album') {
            this.router.navigate(['/home/apresentacao']);
        }
        else {
            this.chamarService();
        }
    };
    AlbumComponent.prototype.armazenarJsonMeusAlbuns = function () {
        var _this = this;
        this.albumService.getJsonMeusAlbuns().subscribe(function (res) {
            _this.meusAlbuns = res.items;
        });
    };
    AlbumComponent.prototype.verificarQuantidadeArtistas = function () {
        for (var _i = 0, _a = this.albums; _i < _a.length; _i++) {
            var album = _a[_i];
            if (album.artists.length > 1) {
                album.artist = 'Various Artists';
            }
            else {
                album.artist = album.artists[0]['name'];
            }
        }
    };
    AlbumComponent.prototype.verificarLength = function (images) {
        if (images.length >= 1) {
            return images[0].url;
        }
        return '../../../assets/foto-indisponivel.png';
    };
    AlbumComponent.prototype.popularTable = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.albums);
    };
    AlbumComponent.prototype.habilitarModal = function (images) {
        if (images.length >= 1) {
            this.imagemModal = images[0].url;
        }
        else {
            this.imagemModal = '../../../assets/foto-indisponivel.png';
        }
        this.habilitarModalFoto = false;
        this.habilitarModalFoto = true;
    };
    AlbumComponent.prototype.habilitarModalTrack = function (albumId) {
        var _this = this;
        this.habilitarModalTracks = false;
        this.albumService.getTracks(albumId).subscribe(function (res) {
            _this.habilitarModalTracks = true;
            _this.tracks = [];
            for (var _i = 0, _a = res.items; _i < _a.length; _i++) {
                var track = _a[_i];
                var trackAux = new _tracks_model__WEBPACK_IMPORTED_MODULE_3__["Track"]();
                trackAux.artist = track.artists[0].name;
                trackAux.name = track.name;
                trackAux.preview_url = track.preview_url;
                _this.tracks.push(trackAux);
            }
        });
    };
    AlbumComponent.prototype.retornarImagem = function (idAlbum) {
        this.meusAlbuns.map(function (album) {
            if (idAlbum === album.album.id) {
                return 'star';
            }
        });
        return 'thumbs-up';
    };
    AlbumComponent.prototype.favoritar = function (idAlbum) {
        var _this = this;
        this.meusAlbuns.map(function (album) {
            if (idAlbum === album.album.id) {
                _this.albumService.deleteAlbum(idAlbum).subscribe(function (res) {
                    _this.router.navigate(['/home/apresentacao']);
                    _this.router.navigate(['/home/albums']);
                });
            }
        });
        this.albumService.putAlbum(idAlbum).subscribe(function (res) {
            _this.router.navigate(['/home/apresentacao']);
            _this.router.navigate(['/home/albums']);
        });
    };
    AlbumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-album',
            template: __webpack_require__(/*! ./album.component.html */ "./src/app/contents/album/album.component.html"),
            styles: [__webpack_require__(/*! ./album.component.css */ "./src/app/contents/album/album.component.css")]
        }),
        __metadata("design:paramtypes", [_album_service__WEBPACK_IMPORTED_MODULE_2__["AlbumService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AlbumComponent);
    return AlbumComponent;
}());



/***/ }),

/***/ "./src/app/contents/album/album.service.ts":
/*!*************************************************!*\
  !*** ./src/app/contents/album/album.service.ts ***!
  \*************************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/login/login.service */ "./src/app/layout/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = /** @class */ (function () {
    function AlbumService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.uriGetAlbuns = 'https://api.spotify.com/v1/search?';
        this.uriGetTracks = 'https://api.spotify.com/v1/albums';
        this.uriGetMeusAlbuns = 'https://api.spotify.com/v1/me/albums?limit=50';
    }
    AlbumService.prototype.getAlbums = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetAlbuns + "q=" + this.pesquisaInput + "&type=" + this.tipoSelecionado, { headers: headers });
    };
    AlbumService.prototype.getTracks = function (albumId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetTracks + "/" + albumId + "/tracks", { headers: headers });
    };
    AlbumService.prototype.getJsonMeusAlbuns = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetMeusAlbuns, { headers: headers });
    };
    AlbumService.prototype.deleteAlbum = function (idAlbum) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetTracks + "?ids=" + idAlbum, { headers: headers });
    };
    AlbumService.prototype.putAlbum = function (idAlbum) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetTracks + "?ids=" + idAlbum, { headers: headers });
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/contents/album/tracks.model.ts":
/*!************************************************!*\
  !*** ./src/app/contents/album/tracks.model.ts ***!
  \************************************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());



/***/ }),

/***/ "./src/app/contents/apresentacao/apresentacao.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contents/apresentacao/apresentacao.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    background-color: rgb(250, 253, 247);\r\n    min-height: 100vh;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 120px;\r\n}\r\n\r\n.posicao-button{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n}\r\n\r\n.mudar-linguagem{\r\n    margin-top: 30px;\r\n    padding: 10px 30px 10px 30px;\r\n    font-size: 16px;\r\n    border-radius: 40px;\r\n    outline-style: none;\r\n    border: none;\r\n    background: #1db954;\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n    font-family: monospace;\r\n}\r\n\r\n.mudar-linguagem:hover{\r\n    background: #0ffa62;\r\n}\r\n\r\n.font {\r\n    font-family: monospace;\r\n}\r\n\r\n.portugues{\r\n    padding: 20px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.ingles{\r\n    padding: 20px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.recuo{\r\n    text-indent: 4em;\r\n}\r\n\r\np{\r\n    font-size: 1.5em;\r\n}"

/***/ }),

/***/ "./src/app/contents/apresentacao/apresentacao.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contents/apresentacao/apresentacao.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"posicao-button\">\n    <button class=\"mudar-linguagem\" type=\"button\" (click)=\"mudarTraducao()\">\n      <span *ngIf=\"!traduzir\">Translate for English</span>\n      <span *ngIf=\"traduzir\">Traduzir para Português</span>\n    </button>\n  </div>\n  <div *ngIf=\"!traduzir\" class=\"portugues font\">\n    <h1 style=\"font-size: 3em\">Spotify Busca e Favorito</h1>\n    <br>\n    <p class=\"recuo\">\n      Esse WebSite foi criado com a finalidade de otimizar a \n      busca de artistas, albuns e músicas, facilitando e \n      divertindo a busca com estilo e bem intuitivo.\n    </p>\n<fa [name]=\"'thumbs-up'\"></fa>\n<i fa [name]=\"'check'\" [size]=1 style=\"color: red\"></i>\n    <p>\n\n    </p>\n\n    <br>\n\n    <p>\n      Divirtam-se!!!\n    </p>\n  </div>  \n  <div *ngIf=\"traduzir\" class=\"ingles font\">\n    <h1 style=\"font-size: 3em\">Spotify Search and Favorite</h1>\n    <br>\n    <p class=\"recuo\">\n      This WebSite was created with the purpose of optimizing\n      the search of artists, albums and songs, facilitating and \n      entertaining the search with style and good intuition.\n    </p>\n    \n    <p>\n    \n    </p>\n    \n    <br>\n    \n    <p>\n      Have fun!!!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/apresentacao/apresentacao.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contents/apresentacao/apresentacao.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApresentacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApresentacaoComponent", function() { return ApresentacaoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApresentacaoComponent = /** @class */ (function () {
    function ApresentacaoComponent(router) {
        this.router = router;
        this.traduzir = false;
    }
    ApresentacaoComponent.prototype.ngOnInit = function () {
        this.verificarToken();
    };
    ApresentacaoComponent.prototype.verificarToken = function () {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['']);
        }
    };
    ApresentacaoComponent.prototype.mudarTraducao = function () {
        this.traduzir = !this.traduzir;
    };
    ApresentacaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apresentacao',
            template: __webpack_require__(/*! ./apresentacao.component.html */ "./src/app/contents/apresentacao/apresentacao.component.html"),
            styles: [__webpack_require__(/*! ./apresentacao.component.css */ "./src/app/contents/apresentacao/apresentacao.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ApresentacaoComponent);
    return ApresentacaoComponent;
}());



/***/ }),

/***/ "./src/app/contents/artist/album.model.ts":
/*!************************************************!*\
  !*** ./src/app/contents/artist/album.model.ts ***!
  \************************************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
var Album = /** @class */ (function () {
    function Album() {
    }
    return Album;
}());



/***/ }),

/***/ "./src/app/contents/artist/artist.component.css":
/*!******************************************************!*\
  !*** ./src/app/contents/artist/artist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.posicionamento{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n.conteudo{\r\n    background-color: rgb(250, 253, 247);\r\n    min-height: 100vh;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 120px;\r\n}\r\n\r\n.font{\r\n    font-size: 30px;\r\n    font-family: monospace;\r\n    padding-top: 25px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n\r\n}\r\n\r\n:host /deep/ td.mat-cell:first-child, td.mat-footer-cell:first-child, th.mat-header-cell:first-child{\r\n    padding-left: 5px;\r\n}\r\n\r\n:host /deep/ td.mat-cell:last-child, td.mat-footer-cell:last-child, th.mat-header-cell:last-child{\r\n    padding-right: 5px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .posicionamento{\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/contents/artist/artist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/contents/artist/artist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal-fotos *ngIf=\"habilitarModalFoto\" [imagemModal]=\"imagemModal\"></app-modal-fotos>\n<app-modal-artista *ngIf=\"habilitarModalArtista\" [albuns]=\"albuns\"></app-modal-artista>\n<div class=\"conteudo\">\n  <h3 class=\"font\">Busca por Artista</h3>\n  <div class=\"mat-elevation-z8 posicionamento\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Imagem Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef> Imagem </th>\n        <td mat-cell *matCellDef=\"let artists\"> \n          <img style=\"cursor: pointer;\" (click)=\"habilitarModal(artists.images)\" height=\"50\" width=\"50\" src=\"{{verificarLength(artists.images)}}\">\n        </td>\n      </ng-container>\n      \n      <!-- Nome do Artista Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Nome </th>\n        <td mat-cell style=\"cursor: pointer\" (click)=\"mostrarAlbuns(artists.id)\" *matCellDef=\"let artists\"> {{artists.name}} </td>\n      </ng-container>\n\n      <!-- Gênero Column -->\n      <ng-container matColumnDef=\"genres\">\n        <th mat-header-cell *matHeaderCellDef> Gênero </th>\n        <td mat-cell *matCellDef=\"let artists\"> {{artists.genres}} </td>\n      </ng-container>\n      \n      <!-- Popularidade Column -->\n      <ng-container matColumnDef=\"popularity\">\n        <th mat-header-cell *matHeaderCellDef> Popularidade </th>\n        <td mat-cell *matCellDef=\"let artists\"> {{artists.popularityString}} </td>\n      </ng-container>\n      \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/artist/artist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/contents/artist/artist.component.ts ***!
  \*****************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./artist.service */ "./src/app/contents/artist/artist.service.ts");
/* harmony import */ var _album_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.model */ "./src/app/contents/artist/album.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(artistService, router) {
        this.artistService = artistService;
        this.router = router;
        this.displayedColumns = ['image', 'name', 'genres', 'popularity'];
        // Lista de artistas
        this.artistas = [];
        this.albuns = [];
    }
    ArtistComponent.prototype.ngOnInit = function () {
        this.verificarRota();
    };
    ArtistComponent.prototype.chamarService = function () {
        var _this = this;
        this.artistService.getArtists().subscribe(function (res) {
            _this.artistas = res.artists.items;
            _this.converterPopularity();
            _this.popularTable();
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    ArtistComponent.prototype.verificarRota = function () {
        if (this.artistService.tipoSelecionado !== 'artist') {
            this.router.navigate(['/home/apresentacao']);
        }
        else {
            this.chamarService();
        }
    };
    ArtistComponent.prototype.popularTable = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.artistas);
    };
    ArtistComponent.prototype.verificarLength = function (images) {
        if (images.length >= 1) {
            return images[0].url;
        }
        return '../../../assets/foto-indisponivel.png';
    };
    ArtistComponent.prototype.habilitarModal = function (images) {
        if (images.length >= 1) {
            this.imagemModal = images[0].url;
        }
        else {
            this.imagemModal = '../../../assets/foto-indisponivel.png';
        }
        this.habilitarModalFoto = false;
        this.habilitarModalFoto = true;
    };
    ArtistComponent.prototype.converterPopularity = function () {
        this.artistas.map(function (artista) {
            if (artista.popularity < 30) {
                artista.popularityString = 'Underground';
            }
            else if (artista.popularity >= 30
                && artista.popularity <= 59) {
                artista.popularityString = 'Regular';
            }
            else if (artista.popularity >= 60
                && artista.popularity <= 79) {
                artista.popularityString = 'Cool';
            }
            else if (artista.popularity >= 80) {
                artista.popularityString = 'Hot';
            }
        });
    };
    ArtistComponent.prototype.mostrarAlbuns = function (artistaId) {
        var _this = this;
        this.habilitarModalArtista = false;
        this.artistService.getAlbumsArtist(artistaId).subscribe(function (res) {
            _this.albuns = [];
            for (var _i = 0, _a = res.items; _i < _a.length; _i++) {
                var album = _a[_i];
                var albumAux = new _album_model__WEBPACK_IMPORTED_MODULE_3__["Album"]();
                albumAux.images = album.images;
                albumAux.name = album.name;
                _this.albuns.push(albumAux);
            }
            _this.habilitarModalArtista = true;
        });
    };
    ArtistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__(/*! ./artist.component.html */ "./src/app/contents/artist/artist.component.html"),
            styles: [__webpack_require__(/*! ./artist.component.css */ "./src/app/contents/artist/artist.component.css")]
        }),
        __metadata("design:paramtypes", [_artist_service__WEBPACK_IMPORTED_MODULE_2__["ArtistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/contents/artist/artist.service.ts":
/*!***************************************************!*\
  !*** ./src/app/contents/artist/artist.service.ts ***!
  \***************************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/login/login.service */ "./src/app/layout/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistService = /** @class */ (function () {
    function ArtistService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.uriGetArtists = 'https://api.spotify.com/v1/search?';
        this.uriGetAlbumsArtists = 'https://api.spotify.com/v1/artists';
    }
    ArtistService.prototype.getArtists = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.getToken());
        return this.http.get(this.uriGetArtists + "q=" + this.pesquisaInput + "&type=" + this.tipoSelecionado, { headers: headers });
    };
    ArtistService.prototype.getAlbumsArtist = function (artistaId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.getToken());
        return this.http.get(this.uriGetAlbumsArtists + "/" + artistaId + "/albums?limit=5", { headers: headers });
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/contents/contents.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contents/contents.module.ts ***!
  \*********************************************/
/*! exports provided: ContentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsModule", function() { return ContentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/contents/artist/artist.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/album.component */ "./src/app/contents/album/album.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track/track.component */ "./src/app/contents/track/track.component.ts");
/* harmony import */ var _album_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./album/album.service */ "./src/app/contents/album/album.service.ts");
/* harmony import */ var _artist_artist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./artist/artist.service */ "./src/app/contents/artist/artist.service.ts");
/* harmony import */ var _track_track_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./track/track.service */ "./src/app/contents/track/track.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _modal_modal_fotos_modal_fotos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal/modal-fotos/modal-fotos.component */ "./src/app/contents/modal/modal-fotos/modal-fotos.component.ts");
/* harmony import */ var _modal_modal_artista_modal_artista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal-artista/modal-artista.component */ "./src/app/contents/modal/modal-artista/modal-artista.component.ts");
/* harmony import */ var _modal_modal_tracks_modal_tracks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal-tracks/modal-tracks.component */ "./src/app/contents/modal/modal-tracks/modal-tracks.component.ts");
/* harmony import */ var _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./apresentacao/apresentacao.component */ "./src/app/contents/apresentacao/apresentacao.component.ts");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ContentsModule = /** @class */ (function () {
    function ContentsModule() {
    }
    ContentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_16__["Angular2FontawesomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"]
            ],
            declarations: [
                _artist_artist_component__WEBPACK_IMPORTED_MODULE_3__["ArtistComponent"],
                _album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"],
                _track_track_component__WEBPACK_IMPORTED_MODULE_5__["TrackComponent"],
                _modal_modal_fotos_modal_fotos_component__WEBPACK_IMPORTED_MODULE_12__["ModalFotosComponent"],
                _modal_modal_artista_modal_artista_component__WEBPACK_IMPORTED_MODULE_13__["ModalArtistaComponent"],
                _modal_modal_tracks_modal_tracks_component__WEBPACK_IMPORTED_MODULE_14__["ModalTracksComponent"],
                _apresentacao_apresentacao_component__WEBPACK_IMPORTED_MODULE_15__["ApresentacaoComponent"]
            ],
            providers: [
                _album_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"],
                _artist_artist_service__WEBPACK_IMPORTED_MODULE_7__["ArtistService"],
                _track_track_service__WEBPACK_IMPORTED_MODULE_8__["TrackService"],
                _modal_modal_fotos_modal_fotos_component__WEBPACK_IMPORTED_MODULE_12__["ModalFotosComponent"],
                _modal_modal_artista_modal_artista_component__WEBPACK_IMPORTED_MODULE_13__["ModalArtistaComponent"],
                _modal_modal_tracks_modal_tracks_component__WEBPACK_IMPORTED_MODULE_14__["ModalTracksComponent"]
            ]
        })
    ], ContentsModule);
    return ContentsModule;
}());



/***/ }),

/***/ "./src/app/contents/modal/modal-artista/modal-artista.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/contents/modal/modal-artista/modal-artista.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n  width: 100%;\r\n}\r\n\r\n.modal{\r\n    height: 680;\r\n    border-radius: 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: 25%;\r\n    margin-top: 20px;\r\n    box-shadow: 0 0 1em black;\r\n    position: absolute;\r\n    z-index: 999;\r\n}\r\n\r\n.imagemModal{\r\n    height: 640px;\r\n    width: 640px;\r\n    border-radius: 0px 0px 15px 15px;\r\n}\r\n\r\n.header{\r\n  background: #222326;\r\n  border-radius: 15px 15px 0px 0px;\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #1db954\r\n}\r\n\r\n.header:hover{\r\n  color: red;\r\n}\r\n\r\n.close{\r\n  cursor: pointer;\r\n  font-family: cursive;\r\n}"

/***/ }),

/***/ "./src/app/contents/modal/modal-artista/modal-artista.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/contents/modal/modal-artista/modal-artista.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"modal\" id=\"modal\" *ngIf=\"habilitarModal\">\n    <div class=\"header\">\n      <span class=\"close\" (click)=\"emitirClose()\">Close</span>\n    </div>\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Imagem Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Imagem </th>\n        <td mat-cell *matCellDef=\"let album\">\n          <img height=\"50\" width=\"50\" src=\"{{verificarLength(album.images)}}\">\n        </td>\n      </ng-container>\n    \n      <!-- Nome do Álbum Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Nome do Álbum</th>\n        <td mat-cell *matCellDef=\"let album\"> {{album.name}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/modal/modal-artista/modal-artista.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/contents/modal/modal-artista/modal-artista.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModalArtistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalArtistaComponent", function() { return ModalArtistaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalArtistaComponent = /** @class */ (function () {
    function ModalArtistaComponent() {
        this.displayedColumns = ['image', 'name'];
        this.habilitarModal = true;
        this.albuns = [];
    }
    ModalArtistaComponent.prototype.ngOnInit = function () {
        this.popularTable();
    };
    ModalArtistaComponent.prototype.emitirClose = function () {
        this.habilitarModal = false;
    };
    ModalArtistaComponent.prototype.popularTable = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.albuns);
    };
    ModalArtistaComponent.prototype.verificarLength = function (images) {
        if (images.length >= 1) {
            return images[0].url;
        }
        return '../../../assets/foto-indisponivel.png';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ModalArtistaComponent.prototype, "albuns", void 0);
    ModalArtistaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-artista',
            template: __webpack_require__(/*! ./modal-artista.component.html */ "./src/app/contents/modal/modal-artista/modal-artista.component.html"),
            styles: [__webpack_require__(/*! ./modal-artista.component.css */ "./src/app/contents/modal/modal-artista/modal-artista.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalArtistaComponent);
    return ModalArtistaComponent;
}());



/***/ }),

/***/ "./src/app/contents/modal/modal-fotos/modal-fotos.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contents/modal/modal-fotos/modal-fotos.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n  width: 100%;\r\n}\r\n\r\n.modal{\r\n    height: 683px;\r\n    border-radius: 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: 5%;\r\n    margin-top: 20px;\r\n    box-shadow: 0 0 1em black;\r\n    position: absolute;\r\n    z-index: 999;\r\n}\r\n\r\n.imagemModal{\r\n    height: 640px;\r\n    width: 640px;\r\n    border-radius: 0px 0px 15px 15px;\r\n}\r\n\r\n.header{\r\n  background: #222326;\r\n  border-radius: 15px 15px 0px 0px;\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #1db954\r\n}\r\n\r\n.header:hover{\r\n  color: red;\r\n}\r\n\r\n.close{\r\n  cursor: pointer;\r\n  font-family: cursive;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .modal{\r\n      width: 90%;\r\n      margin-left: 5%;\r\n      height: 80%;\r\n    }\r\n\r\n    .imagemModal{\r\n      width: 100%;\r\n      height: 300px;\r\n    }\r\n\r\n    .header{\r\n      width: 95%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/contents/modal/modal-fotos/modal-fotos.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contents/modal/modal-fotos/modal-fotos.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"modal\" id=\"modal\" *ngIf=\"habilitarModal\">\n    <div class=\"header\">\n      <span class=\"close\" (click)=\"emitirClose()\">Close</span>\n    </div>\n    <img class=\"imagemModal\" id=\"imagemModal\" alt=\"Imagem Modal\" src=\"{{imagemModal}}\"/>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/modal/modal-fotos/modal-fotos.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contents/modal/modal-fotos/modal-fotos.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalFotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFotosComponent", function() { return ModalFotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalFotosComponent = /** @class */ (function () {
    function ModalFotosComponent() {
        this.habilitarModal = true;
    }
    ModalFotosComponent.prototype.ngOnInit = function () {
        this.habilitarModal = true;
    };
    ModalFotosComponent.prototype.ngOnChanges = function () {
        this.habilitarModal = true;
    };
    ModalFotosComponent.prototype.emitirClose = function () {
        this.habilitarModal = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalFotosComponent.prototype, "imagemModal", void 0);
    ModalFotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-fotos',
            template: __webpack_require__(/*! ./modal-fotos.component.html */ "./src/app/contents/modal/modal-fotos/modal-fotos.component.html"),
            styles: [__webpack_require__(/*! ./modal-fotos.component.css */ "./src/app/contents/modal/modal-fotos/modal-fotos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalFotosComponent);
    return ModalFotosComponent;
}());



/***/ }),

/***/ "./src/app/contents/modal/modal-tracks/modal-tracks.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contents/modal/modal-tracks/modal-tracks.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n  width: 100%;\r\n}\r\n\r\n.modal{\r\n    height: 680;\r\n    border-radius: 15px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin-left: 25%;\r\n    margin-top: 20px;\r\n    box-shadow: 0 0 1em black;\r\n    position: absolute;\r\n    z-index: 999;\r\n}\r\n\r\n.header{\r\n  background: #222326;\r\n  border-radius: 15px 15px 0px 0px;\r\n  text-align: center;\r\n  padding: 10px;\r\n  color: #1db954\r\n}\r\n\r\n.header:hover{\r\n  color: red;\r\n}\r\n\r\n.close{\r\n  cursor: pointer;\r\n  font-family: cursive;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n  .modal{\r\n    margin-left: 5%;\r\n    width: 90%;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/contents/modal/modal-tracks/modal-tracks.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contents/modal/modal-tracks/modal-tracks.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"modal\" id=\"modal\" *ngIf=\"habilitarModal\">\n    <div class=\"header\">\n      <span class=\"close\" (click)=\"emitirClose()\">Close</span>\n    </div>\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Nome Track Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Nome da Música </th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.name}} </td>\n      </ng-container>\n    \n      <!-- Nome Artista Column -->\n      <ng-container matColumnDef=\"artist\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Nome do Artista</th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.artist}} </td>\n      </ng-container>\n\n      <!-- Preview Column -->\n      <ng-container matColumnDef=\"preview\">\n        <th mat-header-cell *matHeaderCellDef style=\"text-align: center;\"> Prévia </th>\n        <td mat-cell *matCellDef=\"let track\">\n          <audio controls>\n            <source src=\"{{track.preview_url}}\">\n            Your browser does not support the audio tag.\n          </audio>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/modal/modal-tracks/modal-tracks.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contents/modal/modal-tracks/modal-tracks.component.ts ***!
  \***********************************************************************/
/*! exports provided: ModalTracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTracksComponent", function() { return ModalTracksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalTracksComponent = /** @class */ (function () {
    function ModalTracksComponent() {
        this.displayedColumns = ['name', 'artist', 'preview'];
        this.habilitarModal = true;
        this.tracks = [];
    }
    ModalTracksComponent.prototype.ngOnInit = function () {
        this.popularTable();
    };
    ModalTracksComponent.prototype.emitirClose = function () {
        this.habilitarModal = false;
    };
    ModalTracksComponent.prototype.popularTable = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.tracks);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ModalTracksComponent.prototype, "tracks", void 0);
    ModalTracksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-tracks',
            template: __webpack_require__(/*! ./modal-tracks.component.html */ "./src/app/contents/modal/modal-tracks/modal-tracks.component.html"),
            styles: [__webpack_require__(/*! ./modal-tracks.component.css */ "./src/app/contents/modal/modal-tracks/modal-tracks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalTracksComponent);
    return ModalTracksComponent;
}());



/***/ }),

/***/ "./src/app/contents/track/track.component.css":
/*!****************************************************!*\
  !*** ./src/app/contents/track/track.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.posicionamento{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n.conteudo{\r\n    background-color: rgb(250, 253, 247);\r\n    min-height: 100vh;\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 120px;\r\n}\r\n\r\n.font{\r\n    font-size: 30px;\r\n    font-family: monospace;\r\n    padding-top: 25px;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n\r\n}\r\n\r\n:host /deep/ td.mat-cell:first-child, td.mat-footer-cell:first-child, th.mat-header-cell:first-child{\r\n    padding-left: 5px;\r\n}\r\n\r\n:host /deep/ td.mat-cell:last-child, td.mat-footer-cell:last-child, th.mat-header-cell:last-child{\r\n    padding-right: 5px;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .posicionamento{\r\n        width: 90%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/contents/track/track.component.html":
/*!*****************************************************!*\
  !*** ./src/app/contents/track/track.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal-fotos *ngIf=\"habilitarModalFoto\" [imagemModal]=\"imagemModal\"></app-modal-fotos>\n<div class=\"conteudo\">\n  <h3 class=\"font\">Busca por Música</h3>\n  <div class=\"mat-elevation-z8 posicionamento\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <!-- Álbum imagem Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef> Imagem do Álbum</th>\n        <td mat-cell *matCellDef=\"let track\"> \n          <img style=\"cursor: pointer;\" height=\"50\" width=\"50\" (click)=\"habilitarModal(track.album.images)\" src=\"{{verificarLength(track.album.images)}}\" alt=\"Imagem do Album\">\n        </td>\n      </ng-container>\n\n      <!-- Nome Música Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Música </th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.name}} </td>\n      </ng-container>\n\n      <!-- Nome dos Artistas Column -->\n      <ng-container matColumnDef=\"artists\">\n        <th mat-header-cell *matHeaderCellDef> Artistas </th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.artistName}} </td>\n      </ng-container>\n\n      <!-- Nome do Album Column -->\n      <ng-container matColumnDef=\"album\">\n        <th mat-header-cell *matHeaderCellDef> Álbum </th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.album.name}} </td>\n      </ng-container>\n\n      <!-- Duração da Música Column -->\n      <ng-container matColumnDef=\"duration\">\n        <th mat-header-cell *matHeaderCellDef> Duração </th>\n        <td mat-cell *matCellDef=\"let track\"> {{track.duration_ms|date:'mm:ss'}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contents/track/track.component.ts":
/*!***************************************************!*\
  !*** ./src/app/contents/track/track.component.ts ***!
  \***************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track.service */ "./src/app/contents/track/track.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrackComponent = /** @class */ (function () {
    function TrackComponent(trackService, router) {
        this.trackService = trackService;
        this.router = router;
        this.displayedColumns = ['image', 'name', 'artists', 'album', 'duration'];
        this.tracks = [];
    }
    TrackComponent.prototype.ngOnInit = function () {
        this.verificarRota();
    };
    TrackComponent.prototype.chamarService = function () {
        var _this = this;
        this.trackService.getTracks().subscribe(function (res) {
            console.log(res);
            _this.tracks = res.tracks.items;
            for (var _i = 0, _a = _this.tracks; _i < _a.length; _i++) {
                var track = _a[_i];
                track.artistName = '';
                for (var _b = 0, _c = track['artists']; _b < _c.length; _b++) {
                    var artist = _c[_b];
                    track.artistName += artist.name + ', ';
                }
                track.artistName.slice((track.artistName.length - 2), track.artistName.length);
            }
            _this.popularTable();
        }, function (err) {
            _this.router.navigate(['']);
        });
    };
    TrackComponent.prototype.verificarRota = function () {
        if (this.trackService.tipoSelecionado !== 'track') {
            this.router.navigate(['/home/apresentacao']);
        }
        else {
            this.chamarService();
        }
    };
    TrackComponent.prototype.verificarLength = function (images) {
        if (images.length >= 1) {
            return images[0].url;
        }
        return '../../../assets/foto-indisponivel.png';
    };
    TrackComponent.prototype.habilitarModal = function (images) {
        if (images.length >= 1) {
            this.imagemModal = images[0].url;
        }
        else {
            this.imagemModal = '../../../assets/foto-indisponivel.png';
        }
        this.habilitarModalFoto = false;
        this.habilitarModalFoto = true;
    };
    TrackComponent.prototype.popularTable = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.tracks);
    };
    TrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/contents/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.css */ "./src/app/contents/track/track.component.css")]
        }),
        __metadata("design:paramtypes", [_track_service__WEBPACK_IMPORTED_MODULE_1__["TrackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/contents/track/track.service.ts":
/*!*************************************************!*\
  !*** ./src/app/contents/track/track.service.ts ***!
  \*************************************************/
/*! exports provided: TrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackService", function() { return TrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/login/login.service */ "./src/app/layout/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackService = /** @class */ (function () {
    function TrackService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.uriGetTracks = 'https://api.spotify.com/v1/search?';
    }
    TrackService.prototype.getTracks = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.getToken());
        return this.http.get(this.uriGetTracks + "q=" + this.pesquisaInput + "&type=" + this.tipoSelecionado, { headers: headers });
    };
    TrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _layout_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "./src/app/layout/contents/contents.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/contents/contents.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/contents/contents.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/contents/contents.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/contents/contents.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/contents/contents.component.ts ***!
  \*******************************************************/
/*! exports provided: ContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentsComponent", function() { return ContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentsComponent = /** @class */ (function () {
    function ContentsComponent() {
    }
    ContentsComponent.prototype.ngOnInit = function () {
    };
    ContentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contents',
            template: __webpack_require__(/*! ./contents.component.html */ "./src/app/layout/contents/contents.component.html"),
            styles: [__webpack_require__(/*! ./contents.component.css */ "./src/app/layout/contents/contents.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentsComponent);
    return ContentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background-color: black;\r\n    padding: 40px 0px;\r\n    width: 100%;\r\n    box-shadow: 0px 0px 10px black;\r\n    z-index: 999;\r\n    bottom: 0px;\r\n    position: fixed;\r\n}\r\n\r\nspan{\r\n    float: right;\r\n    color: #ffffff;\r\n    padding-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n     <span>© 2018 Yohanes Lopes</span>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background: black;\r\n    height: 120px;\r\n    width: 100%;\r\n}\r\n\r\n.logo-spotify{\r\n    margin-top: 20px;\r\n    margin-left: 20px; \r\n    cursor: pointer;\r\n    outline-style: none;\r\n    display: inline-block;\r\n}\r\n\r\n.font{\r\n    font-family: fantasy;\r\n    display: inline-block;\r\n    color: #ffffff;\r\n    margin-left: 20px;\r\n    top: 0px;\r\n}\r\n\r\n.souEuSpan{\r\n    float: right;\r\n    margin-top: 60px;\r\n    margin-right: 20px; \r\n}\r\n\r\n.souEu{\r\n    color: #ffffff;\r\n    font-family: monospace;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .font{\r\n        display: block;\r\n        text-align: center;\r\n    }\r\n\r\n    .header{\r\n        height: 180px;\r\n    }\r\n\r\n    .souEuSpan{\r\n        margin: 0 auto;\r\n        margin-right: 20px;\r\n    }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <img routerLink=\"/home/apresentacao\" id=\"logoSpotify\" width=\"240\" height=\"80\" class=\"logo-spotify\" src=\"../../../assets/spotify-logo.png\" alt=\"Logo Spotify\">\n    <h2 class=\"font\">Hi Platform Front-End Challenge</h2>\n    <span class=\"souEuSpan\"><h3 class=\"souEu\">Seja Bem Vindo, {{souEu}}</h3></span>\n</div>  "

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.service */ "./src/app/layout/header/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(headerService, router) {
        this.headerService = headerService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMe();
    };
    HeaderComponent.prototype.getMe = function () {
        var _this = this;
        setTimeout(function () {
            _this.headerService.getMe().subscribe(function (res) {
                _this.souEu = res['display_name'];
            }, function (err) {
                _this.router.navigate(['']);
            });
        }, 1000);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_header_service__WEBPACK_IMPORTED_MODULE_1__["HeaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.service.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/header/header.service.ts ***!
  \*************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/layout/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderService = /** @class */ (function () {
    function HeaderService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.uriGetMeUser = 'https://api.spotify.com/v1/me';
    }
    HeaderService.prototype.getMe = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', "Bearer " + this.loginService.isAuthenticated());
        return this.http.get(this.uriGetMeUser, { headers: headers });
    };
    HeaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], HeaderService);
    return HeaderService;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-nav-bar></app-nav-bar>\n<app-contents></app-contents>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var keyValuePairs = window.location.toString();
        if (keyValuePairs.includes('=')) {
            var values = keyValuePairs.split('=');
            var valorFinal = values[1].split('&');
            localStorage.setItem('token', valorFinal[0]);
        }
        setTimeout(function () {
            _this.router.navigate(['/home/apresentacao']);
        }, 2000);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/layout/nav-bar/nav-bar.component.ts");
/* harmony import */ var _contents_contents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contents/contents.component */ "./src/app/layout/contents/contents.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/layout/login/login.component.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.service */ "./src/app/layout/login/login.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.service */ "./src/app/layout/header/header.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"], _contents_contents_component__WEBPACK_IMPORTED_MODULE_4__["ContentsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
                _contents_contents_component__WEBPACK_IMPORTED_MODULE_4__["ContentsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"], _header_header_service__WEBPACK_IMPORTED_MODULE_18__["HeaderService"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/layout/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: #000000;\r\n}\r\n\r\n.buttonGrid{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    padding-top: 200px;\r\n}\r\n\r\n.button{\r\n    height: 200px;\r\n    width: 200px;\r\n    border-radius: 100px;\r\n    background: #1db954;\r\n    color: #ffffff;\r\n    outline-style: none;\r\n    font-size: 40px;\r\n    font-family: cursive;\r\n}\r\n\r\n.button:hover{\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n    transition: 5s;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .buttonGrid{\r\n        padding-top: 50px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/layout/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/layout/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <div class=\"buttonGrid\">\n    <Button class=\"button\" (click)=\"login()\" type=\"button\">\n      Login\n    </Button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/layout/login/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.loginService.fazerLogin();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/layout/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/layout/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layout/login/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/login/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(router) {
        this.router = router;
        this.CLIENT_ID = '4203e0e2756a4135b19e28860089dc44';
        this.REDIRECT_URI = 'https://desafiospotify.herokuapp.com/';
    }
    LoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    LoginService.prototype.isAuthenticated = function () {
        return this.getToken();
    };
    LoginService.prototype.fazerLogin = function () {
        var scopes = 'user-read-private user-read-email user-library-read user-library-modify';
        window.location.href = ('https://accounts.spotify.com/authorize/?'
            + 'client_id=' + this.CLIENT_ID
            + '&response_type=token'
            + '&redirect_uri=' + this.REDIRECT_URI
            + '&scope=' + scopes);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/layout/nav-bar/nav-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/nav-bar/nav-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.background {\r\n  background: #222326;\r\n}\r\n\r\n.fontButton {\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.fontButton:hover {\r\n  color: #1db954;\r\n}\r\n\r\n.styleSelect{\r\n  color: #1db954;\r\n  background: #222326;\r\n  border: none;\r\n  width: 200px;\r\n  outline-style: none;\r\n  font-size: 20px;\r\n  font-family: monospace;\r\n  margin-right: 10px;\r\n}\r\n\r\n.styleSelect:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n.styleInput{\r\n  color: #1db954;\r\n  background: #222326;\r\n  border: none;\r\n  border-bottom: solid 1px #1db954;\r\n  outline-style: none;\r\n  margin-right: 10px;\r\n  font-size: 20px;\r\n  font-family: monospace;\r\n}\r\n\r\n.styleButton{\r\n  border-radius: 20px;\r\n  padding: 10px 40px 10px 40px;\r\n  background: #ffffff;\r\n  color: #000000;\r\n  outline-style: none;\r\n  font-size: 18px;\r\n  font-family: monospace;\r\n  border: none;\r\n  cursor: no-drop;\r\n}\r\n\r\n.styleButton:hover{\r\n  background: #f81d1d;\r\n  color: #ffffff;\r\n}\r\n\r\n.styleButtonOk{\r\n  border-radius: 20px;\r\n  padding: 10px 40px 10px 40px;\r\n  background: #1db954;;\r\n  color: #ffffff;\r\n  outline-style: none;\r\n  font-size: 18px;\r\n  font-family: monospace; \r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.styleButtonOk:hover{\r\n  background: #2be66c;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n\r\n  .grid{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    display: block;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .background{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n  }\r\n\r\n  .grid-container{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    padding: 0px 0px 10px 0px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 701px) {\r\n\r\n  .grid{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    display: inline-block;\r\n  }\r\n\r\n  .grid-container{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    right: 0;\r\n    padding: 10px 0px 10px 0px;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/layout/nav-bar/nav-bar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/nav-bar/nav-bar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"background\">\n  <div class=\"grid-container\">\n    <span id=\"grid-espaco\" class=\"spacer\"></span>\n    <div class=\"grid\">\n      <select (change)=\"atribuirTipo($event.target.value)\" class=\"styleSelect\">\n        <option value=\"\">Tipo da Pesquisa</option>\n        <option *ngFor=\"let pesquisa of tipoPesquisa\" value=\"{{pesquisa.value}}\">{{pesquisa.viewValue}}</option>\n      </select>\n    </div>\n    <div class=\"grid\">\n      <input placeholder=\"Digite sua pesquisa\" class=\"styleInput\" #inputPesquisa (keyup)=\"verificarButton(inputPesquisa.value)\"/>\n    </div>\n    <div class=\"grid\">\n      <button [ngClass]=\"{'styleButton':habilitarButton === false, 'styleButtonOk':habilitarButton === true}\" class=\"styleButton\" (click)=\"buscar()\" [disabled]=\"!habilitarButton\">\n        Buscar\n      </button>\n    </div>\n  </div>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/layout/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contents_album_album_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contents/album/album.service */ "./src/app/contents/album/album.service.ts");
/* harmony import */ var _contents_track_track_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contents/track/track.service */ "./src/app/contents/track/track.service.ts");
/* harmony import */ var _contents_artist_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contents/artist/artist.service */ "./src/app/contents/artist/artist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(albumService, trackService, artistService, router) {
        this.albumService = albumService;
        this.trackService = trackService;
        this.artistService = artistService;
        this.router = router;
        this.tipoPesquisa = [];
        this.pesquisaInput = null;
        this.tipoSelecionado = null;
        this.habilitarButton = false;
        this.esconderOption = true;
        this.habilitarErro = false;
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.tipoPesquisa = [
            { value: 'track', viewValue: 'Música' },
            { value: 'artist', viewValue: 'Artista' },
            { value: 'album', viewValue: 'Albuns' }
        ];
    };
    NavBarComponent.prototype.verificarButton = function (event) {
        this.pesquisaInput = event;
        if (this.tipoSelecionado !== null
            && this.pesquisaInput !== ''
            && this.pesquisaInput !== null) {
            this.habilitarButton = true;
        }
        else {
            this.habilitarButton = false;
        }
    };
    NavBarComponent.prototype.atribuirTipo = function (event) {
        this.tipoSelecionado = event;
        this.verificarButton(this.pesquisaInput);
    };
    NavBarComponent.prototype.buscar = function () {
        var _this = this;
        if (this.habilitarButton) {
            if (this.tipoSelecionado === 'track') {
                this.trackService.pesquisaInput = this.pesquisaInput;
                this.trackService.tipoSelecionado = this.tipoSelecionado;
                setTimeout(function () {
                    _this.router.navigate(['/home/tracks']);
                }, 1000);
            }
            else if (this.tipoSelecionado === 'artist') {
                this.artistService.pesquisaInput = this.pesquisaInput;
                this.artistService.tipoSelecionado = this.tipoSelecionado;
                setTimeout(function () {
                    _this.router.navigate(['/home/artists']);
                }, 1000);
            }
            else if (this.tipoSelecionado === 'album') {
                this.albumService.pesquisaInput = this.pesquisaInput;
                this.albumService.tipoSelecionado = this.tipoSelecionado;
                setTimeout(function () {
                    _this.router.navigate(['/home/albums']);
                }, 1000);
            }
        }
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/layout/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/layout/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_contents_album_album_service__WEBPACK_IMPORTED_MODULE_1__["AlbumService"],
            _contents_track_track_service__WEBPACK_IMPORTED_MODULE_2__["TrackService"],
            _contents_artist_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuário\Desktop\GitDesafio\Spotify-Angular6-with-SpotifyAPI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map