        // Solicitar al usuario que ingrese su edad
        let edad = prompt("Ingrese su edad:");

        // Convertir la entrada de texto a un número entero con base decimal (radix 10)
        edad = parseInt(edad, 10);

        // Verificar si es menor de 18 años
        if (edad < 18) {
            alert("Eres menor de edad.");
        } else {
            alert("Eres mayor de edad.");
        }
