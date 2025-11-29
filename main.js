let names = [
    {
        gender: "male",
        names: ["Jan", "Miroslav", "Petr", "Michal", "Milan", "Antonio", "Tobiáš", "Josef", "Tim", "Vítek", "Vít", "Richard", "Dalibor", "Libor", "Jevhen", "Daniel", "Dan", "Oleg", "Tomáš", "Miro", "Jiří", "Pavel", "Pavol", "Beno", "Roman", "Jakub", "Václav", "Makar", "Ivan", "Marek", "Martin", "Matěj", "Marcel", "Adam", "Mikuláš", "Zdeněk", "Přemysl", "Jonáš", "David", "Rudolf", "Kryštof", "Michael", "Ondřej", "Vladimír", "Antonín", "Vilém", "Luděk", "Lukáš", "Albert", "Vladislav"],
        surnames: ["Moravec", "Samek", "Briscein", "Hliněnský", "Lehotský", "Horák", "Šokalo", "Hájek", "Tolaš", "Kořínek", "Bartoš", "Sulženko", "Hoza", "Bruckler", "Kubáň", "Markvart", "Blachut", "Matoušek", "Nekoranec", "Veber", "Král", "Nový", "Novotný", "Novák", "Zima", "Skočdopole", "Lenčéš", "Votrubec", "Černý", "Červený", "Zeman", "Zikmund", "Velebný", "Patera", "Čada", "Houška", "Hrachovec", "Cihlář", "Vaník", "Krystl", "Makovec", "Sloup", "Kalaš", "Panc", "Friesl", "Marek", "Boháč", "Bozděch", "Válek", "Staněk"]
    },

    {
        gender: "female",
        names: ["Ivana", "Radka", "Pavla", "Iveta", "Miroslava", "Petra", "Milena", "Jarmila", "Jaroslava", "Marcela", "Johana", "Jasmína", "Barbora", "Natálie", "Amélie", "Simona", "Michaela", "Sofie", "Jitka", "Leona", "Jana", "Lenka", "Kristýna", "Adriana", "Dana", "Karolína", "Irena", "Vanessa", "Jindřiška", "Alina", "Eliška", "Lucie", "Magdaléna", "Olga", "Anežka", "Dominika", "Aneta", "Hedvika", "Marie", "Alžběta", "Gabriela", "Antonie", "Milada", "Vilma", "Veronika"],
        surnames: ["Vachovcová", "Veberová", "Nováková", "Novotná", "Nová", "Sehnoutková", "Hájková", "Urbanová", "Milá", "Černá", "Jíránková", "Poláčková", "Kopřivová", "Smetana", "Jalovcová", "Bařáková", "Limberská", "Vavrochová", "Šavelová", "Nerudová", "Zapletalová", "Zahradníková", "Palacká", "Votrubcová", "Lopatová", "Radová", "Gebertová", "Kroupová", "Kinjo", "Šrejmová", "Zavadilová", "Janečková", "Janáčková", "Zlámalová", "Drápelová", "Donutilová", "Čermáková", "Patejdlová", "Boháčová", "Pohsoltová"]
    }
];

let workloads = [10, 20, 30, 40];


function generateBirthday(minAge, maxAge) {
    console.log("Typ: " + typeof(maxAge));
    let generatedDate = new Date(); // Generate current time

    generatedDate.setFullYear(generatedDate.getFullYear() - maxAge); // Set time to max age
    generatedDate.setFullYear(generatedDate.getFullYear() + Math.floor(Math.random() * (maxAge - minAge))); // Set year to random number in range
    generatedDate.setMonth(Math.floor(Math.random() * 12));
    generatedDate.setDate(Math.floor(Math.random() * 31));
    return generatedDate;
}

function generatePerson(dataset, minAge, maxAge) {
    console.log("Age je " + maxAge);
    return {
            gender: dataset.gender,
            //birthday: /*generateBirthday(minAge, maxAge).toISOString()*/null,
            birthday: generateBirthday(minAge, maxAge).toISOString(),
            name: dataset.names[Math.floor(Math.random() * dataset.names.length)],
            surname: dataset.surnames[Math.floor(Math.random() * dataset.surnames.length)],
            workload: workloads[Math.floor(Math.random() * workloads.length)]
           };
}

/**
 * The main function which calls the application.
 * Please, add specific description here for the application purpose.
 * @param {object} dtoIn contains count of employees, age limit of employees {min, max}
 * @returns {Array} of employees
 */
export function main(dtoIn) {
    let dtoOut = [];

    for (let i = 0; i < dtoIn.count; i++) {
        let selectedDataset = names[Math.floor(Math.random() * names.length)];
        dtoOut.push(generatePerson(selectedDataset, dtoIn.age.min, dtoIn.age.max));

    }

    return dtoOut;
}
