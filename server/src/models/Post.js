import { model, Schema } from 'mongoose';

const degreesDifficulty = ["Fácil", "Regular", "Difícil"];
const countries = ["Afganistán", "Albania", "Alemania",
    "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita",
    "Argelia", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin",
    "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania",
    "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil",
    "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután",
    "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar",
    "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano",
    "Colombia", "Comoras", "Corea del Norte", "Corea del Sur",
    "Costa de Marfil", "Costa Rica", "Croacia", "Cuba",
    "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador",
    "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia",
    "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas",
    "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia",
    "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea",
    "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras",
    "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda",
    "Islandia", "Islas Marshall", "Islas Salomón", "Israel",
    "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán",
    "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto",
    "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein",
    "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui",
    "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio",
    "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco",
    "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru",
    "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega",
    "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos",
    "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú",
    "Polonia", "Portugal", "Reino Unido", "República Centroafricana",
    "República Checa", "República de Macedonia", "República del Congo",
    "República Democrática del Congo", "República Dominicana",
    "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa",
    "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas",
    "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles",
    "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia",
    "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia",
    "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga",
    "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu",
    "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela",
    "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

const postSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            //required: true //por el momento comentado para hacer las pruebas.
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: [String]
            //required: true //en Postman: "category": ["a", "b", "c", "d"]
        },
        difficulty: {
            type: String,
            enum: degreesDifficulty,
            required: true
        },
        ingredients: {
            type: [String]
        },
        preparation: {
            type: [String]
        },
        portions: {
            type: String
        },
        country: {
            type: String,
            enum: countries,
            required: true
        },
        images: {
            type: [String]
        },
        likes: [{
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            date: {
                type: Date,
                default: Date.now
            }
        }],
        socketId: {
            type: String
        }
    },
    {
        toObject: { virtuals: true },//En true , get canal especifico devuelve el conteo de reaccciones y commetnarios
        toJSON: { virtuals: true },
        timestamps: true,
        versionKey: false,
        id: false //para que no aparezca el id (si se emilina, aparece un atributo _id y otro id, que tienen el mismo identificador)
    }
);
postSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post'
});


/*postSchema.virtual('like', {
     ref: 'reaction',
     localField: '_id',
    foreignField: 'post',
    match: { type__Reaction: "apoyar" }
});*/


/*postSchema.methods.toJSON = function idSetter() {
     const { _id, ...Post } = this.toObject();
     Post.id = _id;
     return Post;
};*/

/* Recursos para lo de la imagen:
https://stackoverflow.com/questions/47669458/upload-image-using-postman
https://stackoverflow.com/questions/60489141/strategy-for-uploading-images-to-mongodb-atlas-with-multer
https://www.postman.com/postman/workspace/postman-answers/documentation/13455110-00378d5c-5b08-4813-98da-bc47a2e6021d
*/

const Post = model('post', postSchema);

export default Post;

