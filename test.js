"use strict";
exports.__esModule = true;
exports.Buscador = exports.Articulo = void 0;
var edad = 10;
var edad1 = 10;
var edad2;
edad2 = 25;
// ------------------
/**
 * comentarios multilinea
 */
var nombre = 'carlos';
var nombre1 = 'carlos';
var nombre3;
nombre3 = 'carlos';
//-----------------------
var flag;
flag = true;
flag = false;
flag = true;
//--------------------------
var altura = 10.5;
//objetos dinamicos
var alumno;
//asignar valores a los atributos
// this.MediaElementAudioSourceNode.nombre;
// alumno -> nombre
// alumno.nombre('carlos') //NO ES METODO
var unAlumno = {
    nombre: 'carlos',
    apellido: 'pe',
    dni: '1245'
};
unAlumno.nombre = 'ejemplo'; // VALIDA
//CONSTANTES
var apellidoModificable = 'lopez';
//SI
apellidoModificable = 'perez';
var apellidoConstante = 'lopez';
//apellidoConstante = 'PEPE';
//objeto dinamico constante
var objConstante = {
    atr1: 10,
    atr2: 'lopez'
};
var obj2 = {
    atr1: 20,
    atr2: 'pepe'
};
//objConstante = obj2;
objConstante.atr1 = 30;
/*objConstante = {
    atr1=20,
    atr2='vacio'
}*/
//objConstante.atr1 = 'casa';
objConstante.atr2 = 'perez';
// ----------------------------------
var Articulo = /** @class */ (function () {
    //constructor
    function Articulo(titulo, precio, autor) {
        this.titulo = titulo;
        this.pecio = precio;
        if (autor != undefined) {
            this.autor = autor;
        }
    }
    Articulo.prototype.detalle = function () {
        console.log("titulo:" + this.titulo);
        console.log("autor:" + this.autor);
        console.log("precio:" + this.pecio);
    };
    //get/set
    Articulo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Articulo.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    return Articulo;
}());
exports.Articulo = Articulo;
var Buscador = /** @class */ (function () {
    //constructor
    function Buscador(clave) {
        this.claveBusqueda = clave;
        this.articulos = [];
    }
    Buscador.prototype.buscar = function () {
        console.log('select * from algo');
        //creacion de los articulos
        var articulo1 = new Articulo('TONY STAR IRON MAN 01: UN...', 830, 'SCOT DAN');
        var articulo2 = new Articulo('TONY STAR IRON MAN 02: UN...', 840, 'SCOT DAN');
        var articulo3 = new Articulo('TONY STAR IRON MAN 03: UN...', 850, 'SCOT DAN');
        var articulo4 = new Articulo('TONY STAR IRON MAN 04: UN...', 860, 'SCOT DAN');
        var articulo5 = new Articulo('TONY STAR IRON MAN 05: UN...', 870, 'SCOT DAN');
        var articulo6 = new Articulo('TONY STAR IRON MAN 06: UN...', 880, 'SCOT DAN');
        this.articulos.push(articulo1);
        this.articulos.push(articulo2);
        this.articulos.push(articulo3);
        this.articulos.push(articulo4);
        this.articulos.push(articulo5);
        this.articulos.push(articulo6);
        this.cantidad = this.articulos.length;
    };
    Buscador.prototype.informar = function () {
        console.log("clave:" + this.claveBusqueda);
        for (var _i = 0, _a = this.articulos; _i < _a.length; _i++) {
            var art = _a[_i];
            art.detalle();
        }
    };
    return Buscador;
}());
exports.Buscador = Buscador;
//crear el buscador
var miBuscador = new Buscador('iron man');
//ejecutar el metodo buscar el objeto miBuscador
miBuscador.buscar();
miBuscador.informar();
