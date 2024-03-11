const radiologias = [
    {
        hora: "11:00",
        especialista: "Ignacio Schulz",
        paciente: "Francisca Rojas",
        rut: "9878782-1",
        prevision: "Fonasa",
    },

    {
        hora: "11:30",
        especialista: "Federico Subercaseaux",
        paciente: "Pamela Estrada",
        rut: "15345241-3",
        prevision: "Isapre",
    },
    {
        hora: "15:00",
        especialista: "Fernando Wurthz",
        paciente: "Armando Luna",
        rut: "16445345-9",
        prevision: "Isapre",
    },
    {
        hora: "15:30",
        especialista: " Ana Maria Godoy",
        paciente: "Manuel Godoy",
        rut: "17666419-0",
        prevision: "Fonasa",
    },
    {
        hora: "16:00",
        especialista: "Patricia Suazo",
        paciente: "Ramon Ulloa",
        rut: "14989389-K",
        prevision: "Fonasa",
    }

];

const traumatologias = [
    {
        hora: "08:00",
        especialista: "Maria Paz Altuzarra",
        paciente: "Paula Sanchez",
        rut: "15554774-5",
        prevision: "Fonasa",
    },
    {
        hora: "10:00",
        especialista: "Raul Araya",
        paciente: "Angelica Navas",
        rut: "15444147-9",
        prevision: "Isapre",
    },
    {
        hora: "10:30",
        especialista: "Maria Arriagada",
        paciente: "Ana Klapp",
        rut: "17879423-9",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "Alejandro Badilla",
        paciente: "Fleipe Mardones",
        rut: "1547423-6",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Cecilia Budnik",
        paciente: "Diego Marre",
        rut: "16554741-K",
        prevision: "Fonasa",
    },
    {
        hora: "12:00",
        especialista: "Arturo Cavagnaro",
        paciente: "Cecilia Mendez",
        rut: "9747535-8",
        prevision: "Isapre",
    },
    {
        hora: "12:30",
        especialista: "Andres Kaacri",
        paciente: "Marcia Suazo",
        rut: "11254785-5",
        prevision: "Isapre",
    }
];

const dentales = [

    {
        hora: "08:30",
        especialista: "Andrea Zuñiga",
        paciente: "Marcela Retamal",
        rut: "11123425-6",
        prevision: "Isapre",
    },
    {
        hora: "11:00",
        especialista: "Maria Paz Zañartu",
        paciente: "Angel Muñoz",
        rut: "9878789-2",
        prevision: "Isapre",
    },
    {
        hora: "11:30",
        especialista: "Scarlett Witting",
        paciente: "Mario kast",
        rut: "7998789-5",
        prevision: "Fonasa",
    },
    {
        hora: "13:00",
        especialista: "Francisco Von Teuber",
        paciente: "Karin Fernandez",
        rut: "18887662-K",
        prevision: "Fonasa",
    },
    {
        hora: "13:30",
        especialista: "Eduardo Viñuela",
        paciente: "Hugo sanchez",
        rut: "17665461-4",
        prevision: "Fonasa",
    },
    {
        hora: "14:00",
        especialista: "Raquel Villaseca",
        paciente: "Ana Sepulveda",
        rut: "14441281-0",
        prevision: "Isapre",
    }


];

//primer y ultimo paciente, nombre del paciente y prevision:

const radiologia = document.querySelector("#radiologia")
const traumatologia = document.querySelector("#traumatologia")
const dental = document.querySelector("#dental")

radiologia.textContent = `Primera atencion: ${radiologias[0].paciente}, prevision: ${radiologias[0].prevision} `
radiologia.textContent += ` || Ultima atención: ${radiologias[radiologias.length - 1].paciente}, prevision: ${radiologias[radiologias.length - 1].prevision}`


traumatologia.textContent = `primera atencion: ${traumatologias[0].paciente}, prevision: ${traumatologias[0].prevision}`
traumatologia.textContent += ` || Ultima atención: ${traumatologias[traumatologias.length - 1].paciente}, previsión: ${traumatologias[radiologias.length - 1].prevision}`


dental.textContent = `primera atencion: ${dentales[0].paciente}, previsión: ${dentales[0].prevision} `
dental.textContent += ` || Ultima atencion: ${dentales[dentales.length - 1].paciente}, previsión: ${dentales[dentales.length - 1].prevision}`

//tablas 

const tablaRadio = document.querySelector("#tablaRadiologia")
const tablaTrauma = document.querySelector("#tablaTraumatologia")
const tablaDent = document.querySelector("#tablaDental")

// for, forof y foreach: para recorrer un array :



for (const items of radiologias) {
    tablaRadio.innerHTML += ` 
    <tr>

        <td>${items.hora}</td>
        <td>${items.paciente}</td>
        <td>${items.especialista}</td>
        <td>${items.rut}</td>
        <td>${items.prevision}</td>

    </tr>
`
}

for (const items of traumatologias) {
    tablaTrauma.innerHTML += `
    <tr>

        <td>${items.hora}</td>
        <td>${items.paciente}</td>
        <td>${items.especialista}</td>
        <td>${items.rut}</td>
        <td>${items.prevision}</td>

    </tr>
    `
}

for (const items of dentales) {
    tablaDent.innerHTML += `
    <tr>

        <td>${items.hora}</td>
        <td>${items.paciente}</td>
        <td>${items.especialista}</td>
        <td>${items.rut}</td>
        <td>${items.prevision}</td>

    </tr>
    `

}