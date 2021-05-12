import avatar from '../img/avatar_cube.png';
import vactor from '../img/vector.png';

const defaultStudie = 'https://preview.pixlr.com/images/800wm/24302/1/24302100953.jpg';
const defaultExperience = 'https://images.template.net/wp-content/uploads/2017/01/27051344/Company-Vectors.jpg';

const data = {
    greetings: `- Yo soy`,
    name: `Elkin Chaverra Portocarrero`,
    occupation: `- UI, UX & Web Developer`,
    description: `Me catalogo como un aprendiz durante todos los procesos que he tomado en mi vida,
    esto ha permitido pulir mis habilidades en el diseño y desarrollo de aplicaciones web, por eso creo que todo producto debe satisfacer la necesidad por la cual asido creado sin dejar atrás su
    funcionalidad, propósito y estética visual.`,
    socials: [
        {
            src: '',
            name: 'Facebook'
        },
        {
            src: '',
            name: 'Instagram'
        },
        {
            src: '',
            name: 'Twitter'
        },
        {
            src: '',
            name: 'Youtobe'
        },
        {
            src: '',
            name: 'Linkedin'
        },
    ],
    Studies: [
        {
            src: defaultStudie,
            type: 'Curso',
            title: 'Tecnólogo En Análisis Y Desarrollo De Sistema',
            modality: 'Presencial',
            entity: 'Sena',
        },
        {
            src: defaultStudie,
            type: 'Curso',
            title: 'Mern Stack',
            modality: 'Online',
            entity: 'Udemy',
        },
        {
            src: defaultStudie,
            type: 'Curso',
            title: 'Mean Stack',
            modality: 'Online',
            entity: 'Udemy',
        },
    ],
    Experiences: [
        {
            src: defaultExperience,
            name: 'ePayco',
            tecnology: 'ReactJs',
            url: 'https://epayco.co/',
            position: 'Front end developer',
            dateStart: '',
            dateEnd: '',
        },
        {
            src: defaultExperience,
            name: 'ServApp',
            tecnology: 'AngularJs, NodeJs, MongoDB',
            url: 'https://www.serv.com.co/',
            position: 'CTO & Lider de desarrollo',
            dateStart: '',
            dateEnd: '',
        },
    ],
    avatar: avatar,
    vactor: vactor,
    backgroundColor: 'rgba(89, 19, 52, 1)',
    backgroundImage: 'radial-gradient(circle at 138.56% 165.92%, #781C41 0, #490E2E 100%)',
};

export default data;