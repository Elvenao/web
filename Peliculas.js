const Cartele = new Array("img/el-club-de-los-vandalos.jpeg", "img/Club-Zero-cartel.jpg", "img/inmaculada.jpeg","img/intensamente2cartel.jpg","img/Los extraños cartel.png", "img/mi-nombre-era-eileen.jpeg", "img/mi-villano-favorito-4.jpeg", "img/observados.jpg","img/un-lugar-en-silencio-dia-uno.jpeg", "img/bad-boys-hasta-la-muerte.png", "img/el-ultimo-conjuro.jpeg","img/hachiko-una-historia-verdadera.jpeg","img/herencia-siniestra.jpeg","img/la-favorita-del-rey.jpeg","img/exhuma-la-tumba-del-diablo.jpeg","img/el-ultimo-escape.jpeg", "img/tuesday-abrazando-la-vida.jpeg", "img/complices-del-engano.jpeg")

const direccion = new Array("peliculas/ElClubdelosVandalos.html","peliculas/ClubCero.html","peliculas/Inmaculada.html","peliculas/Intensamente2.html", "peliculas/LosExtraños.html", "peliculas/MiNombreEraEileen.html","peliculas/MiVillanoFavorito.html", "peliculas/Observados.html", "peliculas/UnLugarEnSilencio.html", "peliculas/BadBoys.html", "peliculas/ElUltimoConjuro.html","peliculas/Hachiko.html", "peliculas/HerenciaSiniestra.html", "peliculas/LaFavoritadelRey.html", "peliculas/Exhuma.html","peliculas/ElUltimoEscape.html", "peliculas/Tuesday.html", "peliculas/ComplicesDelEngaño.html")
const contenedorPeliculas = document.querySelector("#Contenedor-Peliculas")

const etiquetaId = document.querySelector(".Inyeccion")
const peliculas = [
    {
        Nombre: "El Club de los Vándalos",
        Sinopsis: "El Club de los Vándalos sigue el ascenso de un club de motociclistas del medio oeste, los Vándalos. Visto desde el punto de vista de los integrantes, el club pasa, en el transcurso de una década, de ser un lugar de reunión para forasteros locales a convertirse en una banda más siniestra, que amenaza el modo de vida único del grupo original.",
        Cartel: Cartele[0],
        Duracion: "116 min",
        Clasificacion: "S/C",
        Genero: "Drama",
        Direccion: direccion[0],
        id:"ElClubdelosVándalos"
    },
    {
        Nombre: "Club Cero",
        Sinopsis:"Miss Novak es una maestra que ingresa a una escuela de élite para dar clases de nutrición a jóvenes. En poco tiempo, la maestra establece un estrecho y perturbador vínculo con cinco de sus alumnos, sin que el resto de profesores se de cuenta.",
        Cartel:Cartele[1],
        Duracion:"110 min",
        Clasificacion:"B",
        Genero:"Drama",
        Direccion: direccion[1],
        id:"ClubCero"
    },
    {
        Nombre: "Inmaculada",
        Sinopsis:"Cecilia (Sydney Sweeney), una monja fervientemente devota, se aventura hacia un remoto convento en la campiña italiana en busca de la consagración espiritual. Sin embargo, lo que inicialmente prometía ser un encuentro espiritual se transforma en una oscura y aterradora pesadilla. A medida que explora los pasillos  y los rincones ocultos del convento, Cecilia descubre secretos siniestros y horrores indescriptibles que desafían toda lógica y razón. Pronto, se verá atrapada en una red de fuerzas malignas que acechan en las sombras, amenazando con desgarrar su alma y poner en duda su fe en la Iglesia. Cada giro del destino desentrañará más terror, sumergiendo a Cecilia en un abismo de angustia y desesperación.",
        Cartel:Cartele[2],
        Duracion:"89 min",
        Clasificacion:"C",
        Genero:"Terror",
        Direccion: direccion[2],
        id:"Inmaculada"
    },
    {
        Nombre: "Intensamente 2",
        Sinopsis:"La película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan mucho tiempo llevando a cabo una operación exitosa, no están seguros de cómo sentirse cuando aparece Ansiedad. Y parece que no está sola. ",
        Cartel:Cartele[3],
        Duracion:"96 min",
        Clasificacion:"A",
        Genero:"Familiar, Animación",
        Direccion: direccion[3],
        id:"Intensamente2"
    },
    {
        Nombre: "Los Extraños: Capítulo 1",
        Sinopsis:"El conocido director Renny Harlin (riesgo total, Duro de mater 2, Exorcista; El comienzo) nos entrega una nueva trilogía de terror. En LOS EXTRAÑOS: CAPÍTULO 1, Maya (Madelaine Petsch en Riverdale) es una joven mujer que inicia una nueva vida con su prometido. Durante un viaje en auto deben de hospedarse en una cabaña en renta en lo profundo de un bosque; es ahí donde se vuelven presa de unos extraños enmascarados que los atacan sin advertencia y sin razón. Lo que parecería una lucha por sobrevivir los llevará a conocer su valor y su astucia.",
        Cartel:Cartele[4],
        Duracion:"91 min",
        Clasificacion:"B15",
        Genero:"Suspenso, Terror",
        Direccion: direccion[4],
        id:"LosExtraños-Capítulo1"
    },
    {
        Nombre: "Mi Nombre Era Eileen",
        Sinopsis:"Eileen es una chica atrapada entre un hogar lúgubre con un padre alcohólico y su empleo en una prisión. Cuando una guapa y engimatica mujer (Anne Hathaway) se une al personal donde trabaja, Eileen es incapaz de resistirse a su magnestismo. Pero esa amistad la involucrará en un crimen que alterará todo.",
        Cartel:Cartele[5],
        Duracion:"96 min",
        Clasificacion:" S/C",
        Genero:"Thriller",
        Direccion: direccion[5],
        id:"MiNombreEraEileen"
    },
    {
        Nombre: "Mi Villano Favorito",
        Sinopsis:"Gru, Lucy, Margo, Edith y Agnes le dan la bienvenida a un nuevo miembro a la familia, Gru Jr., quien está decidido a atormentar a su papá. Gru se enfrenta a un nuevo némesis llamado Maxime Le Mal y su novia Valentina, y la familia se ve obligada a huir.",
        Cartel:Cartele[6],
        Duracion:"95 min",
        Clasificacion: "S/C",
        Genero:"Aventura, Comedia, Animación",
        Direccion: direccion[6],
        id:"MiVillanoFavorito"
    },
    {
        Nombre: "Observados",
        Sinopsis:"Del peliculasr M. Night Shyamalan llega “Observados”, escrita para la pantalla y dirigida por Ishana Night Shyamalan y basada en la novela de A.M. Shine. La película sigue a Mina, una artista de 28 años, que queda varada en un extenso bosque virgen en el oeste de Irlanda. Cuando Mina encuentra refugio, sin saberlo, queda atrapada junto a tres extraños que son observados y acechados por criaturas misteriosas cada noche. No puedes verlos, pero ellos ven todo.",
        Cartel:Cartele[7],
        Duracion:"102 min",
        Clasificacion:"B",
        Genero:"Thriller",
        Direccion: direccion[7],
        id:"Observados"
    },
    {
        Nombre: "Un Lugar en Silencio: Día Uno",
        Sinopsis:"Descubre por qué nuestro mundo quedó en silencio.",
        Cartel:Cartele[8],
        Duracion:"100 min",
        Clasificacion:"S/C",
        Genero:"Terror",
        Direccion: direccion[8],
        id:"UnLugarenSilencio-DíaUno"
    },
    {
        Nombre: "Bad Boys Hasta La Muerte",
        Sinopsis:"Este verano, los chicos malos favoritos del mundo están de regreso con su icónica mezcla de vertiginosa acción y escandalosa comedia, pero esta vez con un giro: los detectives favoritos de Miami son fugitivos.",
        Cartel:Cartele[9],
        Duracion:"115 min",
        Clasificacion:"B15",
        Genero:"Comedia, Acción",
        Direccion: direccion[9],
        id:"BadBoysHastaLaMuerte"
    },
    {
        Nombre: "El Último Conjuro",
        Sinopsis:"Hiroko, una reportera de televisión, visita la casa de su antiguo compañero Naoto con motivo del fallecimiento de su esposa. A partir de entonces, comenzarán a suceder fenómenos inexplicables que pondrán en peligro la vida de Hiroko. El director de The Ring regresa con una historia de fantasmas y maldiciones.",
        Cartel:Cartele[10],
        Duracion:"110 min",
        Clasificacion:"S/C",
        Genero:"Terror, Suspenso",
        Direccion: direccion[10],
        id:"ElÚltimoConjuro"
    },
    {
        Nombre: "Hachiko: Una Historia Verdadera",
        Sinopsis:"La vida del profesor Chen Jingxiu tiene un giro inesperado cuando en su camino se cruza con un cachorro abandonado. Desde ese momento, entre Jingxiu y Hachiko, comienza a gestarse una gran amistad. Pero esta complicidad se verá en riesgo cuándo un día, mientras Hachiko lo espera en la estación del teleférico, el profesor no regresa. Lo que pondrá a prueba la fidelidad de Hachiko, pues ahora su vida se centrará en la espera de su inseparable amo.",
        Cartel:Cartele[11],
        Duracion:"120 min",
        Clasificacion:"A",
        Genero:"Drama",
        Direccion: direccion[11],
        id:"Hachiko-UnaHistoriaVerdadera"
    },
    {
        Nombre: "Herencia Siniestra",
        Sinopsis:"Edward y su novia Riley se embarcan en un viaje al norte de Portugal para encontrarse con la familia perdida de Edward. Al llegar a la magnífica villa, Edward está encantado de conocer a su madre y a su hermano gemelo ansioso por conectarse con sus orígenes. Pero, pronto descubrirá el terrible secreto que lo une a ellos.",
        Cartel:Cartele[12],
        Duracion:"91 min",
        Clasificacion:"S/C",
        Genero:"Terror, Suspenso",
        Direccion: direccion[12],
        id:"HerenciaSiniestra"
    },
    {
        Nombre: "La Favorita del Rey",
        Sinopsis:"Una joven de clase trabajadora ávida de cultura y placer, utiliza su inteligencia y su atractivo para ascender en la escala social, convirtiendose en la favorita del rey Luis XV, contra todo pronostico se enamoran perdidamente, escandalizando a toda la corte.",
        Cartel:Cartele[13],
        Duracion:"116 min",
        Clasificacion:"S/C",
        Genero:"Drama",
        Direccion: direccion[13],
        id:"LaFavoritadelRey"
    },
    {
        Nombre: "Exhuma: La Tumba del Diablo",
        Sinopsis:"Una renombrada pareja de chamanes es contratada por una adinerada familia, para investigar la causa de una inquietante enfermedad sobrenatural que afecta sólo a los primogénitos. Con la ayuda de un experto desenterrador, encuentran el origen de la maldición hasta una tumba familiar ubicada en terreno sagrado. Al sentir un aura siniestra que rodea el lugar, el equipo opta por exhumar y reubicar los restos ancestrales. Pero cuando algo mucho más oscuro emerge, se dan cuenta que se metieron con la tumba equivocada.",
        Cartel:Cartele[14],
        Duracion:"134 min ",
        Clasificacion:"B",
        Genero:"Terror, Suspenso",
        Direccion: direccion[14],
        id:"Exhuma-LaTumbadelDiablo"
    },
    {
        Nombre: "El Último Escape",
        Sinopsis:"En el verano de 2014, Bernard Jordan, un veterano de la Segunda Guerra Mundial de 89 años, se escapa de su residencia en la que vive junto a su mujer Rene, para unirse a sus compañeros veteranos de guerra en una playa de Normandía, conmemorando a sus compañeros caídos en el 70 aniversario del Desembarco del Día D. Y. Protagonizada por los ganadores al premio Oscar Michael Cane & Glenda Jackson.",
        Cartel:Cartele[15],
        Duracion:"96 min",
        Clasificacion:"S/C",
        Genero:"Drama",
        Direccion: direccion[15],
        id:"ElÚltimoEscape"
    },
    {
        Nombre: "Tuesday: Abrazando La Vida",
        Sinopsis:"TUESDAY, ABRAZANDO LA VIDA, la nueva película de A24, es una impactante historia entre la realidad y la fantasía sobre sobre los ecos de la perdida y encontrar residencia en lo inesperado.",
        Cartel:Cartele[16],
        Duracion:"111 min",
        Clasificacion:"S/C",
        Genero:"Drama",
        Direccion: direccion[16],
        id:"Tuesday-AbrazandoLaVida"
    },
    {
        Nombre: "Cómplices del Engaño",
        Sinopsis:"Gary Johnson (Glen Powell) es el agente encubierto más buscado de Nueva Orleans. Para sus clientes, es el sicario ideal, cero errores, siempre un profesional. Esto  cambiará cuando rompa el protocolo para ayudar a una atractiva y desesperada mujer que intenta huir de su novio maltratador. Para esta misión Gary se convertirá en uno de sus falsos personajes y tendrá que decidir entre seguir con la misión o enamorarse sabiendo el peligro que los dos correrían.",
        Cartel:Cartele[17],
        Duracion:"115 min",
        Clasificacion:"S/C",
        Genero:"Acción, Comedia",
        Direccion: direccion[17],
        id:"CómplicesdelEngaño"
    }
]

function cargarPeliculas(peliculas) {
    peliculas.forEach(pelicula => {
        const div = document.createElement("div");
        div.classList.add("pelicula");
        div.innerHTML = `
        
        <a href="${pelicula.Direccion}">
        <img  class="pelicula-imagen" src="${pelicula.Cartel}" alt="${pelicula.Nombre}">
        <div class="pelicula-detalles">
            <h3 class="pelicula-titulo">${pelicula.Nombre}</h3>
            <p class="pelicula-duracion">Duración: ${pelicula.Duracion}</p>
            <p class="pelicula-genero">Género: ${pelicula.Genero}</p>
            <p class="pelicula-clasificacion">Clasificación: ${pelicula.Clasificacion}</p>
        </div>
        </a>
        `
        contenedorPeliculas.appendChild(div)
    })
}

cargarPeliculas(peliculas)

