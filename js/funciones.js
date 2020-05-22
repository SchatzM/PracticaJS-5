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

// Función principal que genera vehículos con diferentes instancias de 'vehiculo'
// Admite especificar el número de vehículos a generar (10 por defecto)
function generarCoches (cantidad) {
	let marcasDisponibles = ['Mazda', 'Toyota', 'Nissan', 'Peugeot', 'Audi', 'BMW', 'Ford'], // Marcas de las que se elegirá aleatoriamente
		coloresDisponibles = ['Rojo', 'Verde', 'Azul', 'Negro', 'Gris', 'Blanco'], // Colores de los que se elegirá aleatoriamente
		estadosPosibles = ['Nuevo', 'Segunda mano', 'No disponible'], // Estados a elegir aleatoriamente
		cochesAConstruir = cantidad || 10; // Cantidad de vehículos a generar. 10 por defecto

	for (let i = 0; i < cochesAConstruir; i++) { // Bucle que instanciará los diferentes vehículos
		// Añadimos las diferentes instancias al objeto global coches
		coches[i] = new vehiculo (
					i+1, // Asigna un número de ID en orden ascendente empezando por 1
					marcasDisponibles[Math.floor(Math.random() * marcasDisponibles.length)], // Asigna una marca aleatoria de entre las disponibles
					coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)], // Asigna un color aleatoriamente de entre los disponibles
					estadosPosibles[Math.floor(Math.random() * estadosPosibles.length)]
					); // Por ultimo asigna uno de los posibles estados

		console.info (coches[i]); // Muestra en consola las instancias una a una
	}
}

generarCoches (); // Llamamos a la función principal

console.info ('Primer coche', coches[0]); // Muestra en consola los datos del primer coche generado
console.info ('Último coche', coches[Object.keys(coches).length-1]); // Muestra en consola los datos del último coche generado
