'use strict';

/**
 * Práctica 08
 * Construir Objetos Automáticamente
 * Brian Passos
 */

var coches = {}; // Variable global que almacenará las instancias de vehículo

// Constructor
function vehiculo (ID, modelo, color, estado) {
	this.ID = ID;
	this.modelo = modelo;
	this.color = color;
	this.estado = estado;
}

function generarCoches (cantidad) {
	let marcasDisponibles = ['Mazda', 'Toyota', 'Nissan', 'Peugeot', 'Audi', 'BMW', 'Ford'],
		coloresDisponibles = ['Rojo', 'Verde', 'Azul', 'Negro', 'Gris', 'Blanco'],
		estadosPosibles = ['Nuevo', 'Segunda mano', 'No disponible'],
		cochesAConstruir = cantidad || 10;

	for (let i = 0; i < cochesAConstruir; i++) {
		coches = 	new vehiculo (i+1,
					marcasDisponibles[Math.floor(Math.random() * marcasDisponibles.length)],
					coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)],
					estadosPosibles[Math.floor(Math.random() * estadosPosibles.length)]);

		console.info (coches);
	}
}

generarCoches ();
