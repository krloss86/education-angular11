let edad = 10;

let edad1: number = 10;

let edad2: number;

edad2 = 25;
// ------------------
/**
 * comentarios multilinea
 */
let nombre = 'carlos';
let nombre1: string = 'carlos';
let nombre3: string;
nombre3 = 'carlos';
//-----------------------
let flag: boolean;
flag = true;
flag = false;
flag = true;

//--------------------------
let altura: number = 10.5;

//objetos dinamicos
let alumno: {
    nombre: string,
    apellido:string,
    dni: string
}
//asignar valores a los atributos
// this.MediaElementAudioSourceNode.nombre;
// alumno -> nombre
// alumno.nombre('carlos') //NO ES METODO
let unAlumno = {
    nombre :'carlos',
    apellido: 'pe',
    dni: '1245'
};
unAlumno.nombre = 'ejemplo'; // VALIDA

//CONSTANTES
let apellidoModificable = 'lopez';
//SI
apellidoModificable = 'perez';

const apellidoConstante = 'lopez';
//apellidoConstante = 'PEPE';

//objeto dinamico constante
const objConstante = {
    atr1: 10,
    atr2: 'lopez'
}

const obj2 = {
    atr1 : 20,
    atr2 : 'pepe'
}

//objConstante = obj2;
objConstante.atr1 = 30;

/*objConstante = {
    atr1=20,
    atr2='vacio'
}*/
//objConstante.atr1 = 'casa';
objConstante.atr2 = 'perez';

// ----------------------------------

export class Articulo {
    private titulo: string;
    private pecio: number;
    private autor: string;

    //constructor
    public constructor(titulo:string, precio:number, autor: string) {
        this.titulo = titulo;
        this.pecio = precio;
        if(autor != undefined) {
            this.autor = autor;
        }
    }

    public detalle(): void{
        console.log(`titulo:${this.titulo}`);
        console.log(`autor:${this.autor}`);
        console.log(`precio:${this.pecio}`)
    }
    //get/set
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void  {
        this.titulo =  titulo;
    }
    ///con los demas atributos!!!
}

export class Buscador {

    private claveBusqueda: string;
    private cantidad: number;
    private articulos: Articulo[];//defino un array
    private cantidadResultados: number;

    //constructor
    public constructor(clave: string) {
        this.claveBusqueda = clave;
        this.articulos = [];
    }

    public buscar(): void {
        console.log('select * from algo');
        //creacion de los articulos
        
        let articulo1 = new Articulo('TONY STAR IRON MAN 01: UN...',830, 'SCOT DAN');
        let articulo2 = new Articulo('TONY STAR IRON MAN 02: UN...',840, 'SCOT DAN');
        let articulo3 = new Articulo('TONY STAR IRON MAN 03: UN...',850, 'SCOT DAN');
        let articulo4 = new Articulo('TONY STAR IRON MAN 04: UN...',860, 'SCOT DAN');
        let articulo5 = new Articulo('TONY STAR IRON MAN 05: UN...',870, 'SCOT DAN');
        let articulo6 = new Articulo('TONY STAR IRON MAN 06: UN...',880, 'SCOT DAN');

        this.articulos.push(articulo1);
        this.articulos.push(articulo2);
        this.articulos.push(articulo3);
        this.articulos.push(articulo4);
        this.articulos.push(articulo5);
        this.articulos.push(articulo6);

        this.cantidad = this.articulos.length;
    }

    public informar(): void {
        console.log(`clave:${this.claveBusqueda}`);     
        
        for(let art of this.articulos) {
            art.detalle();
        }
    }
}

//crear el buscador
let miBuscador = new Buscador('iron man');

//ejecutar el metodo buscar el objeto miBuscador
miBuscador.buscar();

miBuscador.informar();
