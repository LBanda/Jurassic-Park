let incidentes = [
    {id: "1", fecha: "28/05/99", lugar: "Laboratorios", tipo: "Robo de ADN" },
    {id: "2", fecha: "8/08/02", lugar: "Triceratops", tipo: " Fuga de herbívoro" },
    {id: "3", fecha: "16/12/18", lugar:"Centro turístico", tipo: " Falla eléctrica" }
];

module.exports = class Incidente {

    constructor(mi_id, mi_fecha, mi_lugar, mi_tipo) {
        this.id = mi_id;
        this.fecha = mi_fecha;
        this.lugar = mi_lugar;
        this.tipo = mi_tipo;

    }

    save() {
        incidentes.push(this);
    }

    static fetchAll() {
        return incidentes;
        
    }

}