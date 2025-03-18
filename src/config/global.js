export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Principios pedagógicos y didácticos de la educación inicial',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Principios pedagógicos y curriculares de la educación inicial y preescolar',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Definición y propósito de los principios pedagógicos en la educación inicial y preescolar',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Relación entre pedagogía y desarrollo infantil',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Educación basada en el desarrollo integral',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Principios curriculares en la educación inicial',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Relación entre desarrollo infantil y currículo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Principios didácticos de la educación preescolar (actividades rectoras)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Hirsh-Pasek, K., Golinkoff, R. M., Berk, L. E., & Singer, D. G. (2009). A Mandate for Playful Learning in Preschool: Presenting the Evidence. Oxford University Press. ',
      link: 'https://psycnet.apa.org/record/2008-14352-000 ',
    },
    {
      referencia:
        'Bowlby, J. (1988). A secure base: Parent-child attachment and healthy human development. Basic Books',
      link: 'https://psycnet.apa.org/record/1988-98501-000 ',
    },
    {
      referencia:
        'Piaget, J. (1971). La formación del símbolo en el niño. Fondo de Cultura Económica.',
      link:
        ' http://bloguamx.byethost10.com/wp-content/uploads/2015/04/formacic2a6n-del-simbolo-piaget.pdf ',
    },
    {
      referencia: 'UNESCO. (2019). Marco de acción Educación 2030. ',
      link: ' https://unesdoc.unesco.org/ark:/48223/pf0000384992 ',
    },
    {
      referencia:
        'Vygotsky, L. S. (1978). Mind in Society: The Development of Higher Psychological Processes. Harvard University Press. ',
      link:
        'https://books.google.com.co/books?id=RxjjUefze_oC&lpg=PA1&dq=Vygotsky%2C%20L.%20S.%20(1978).%20Mind%20in%20Society%3A%20The%20Development%20of%20Higher%20Psychological%20Processes.%20Harvard%20University%20Press.&lr&hl=es&pg=PA1#v=onepage&q=Vygotsky,%20L.%20S.%20(1978).%20Mind%20in%20Society:%20The%20Development%20of%20Higher%20Psychological%20Processes.%20Harvard%20University%20Press.&f=false ',
    },
    {
      referencia:
        'Zabalza, M. A. (2020). Diseño y desarrollo curricular. Narcea. ',
      link:
        ' https://books.google.com.co/books?id=4M572pSUNXMC&lpg=PA9&dq=Zabalza%2C%20M.%20A.%20(2020).%20Dise%C3%B1o%20y%20desarrollo%20curricular.%20Narcea.&lr&hl=es&pg=PP1#v=onepage&q&f=false  ',
    },
    {
      referencia:
        'Kolb, D. A. (1984). Experiential Learning: Experience as the Source of Learning and Development. Prentice Hall. ',
      link:
        'https://books.google.com.co/books?id=jpbeBQAAQBAJ&lpg=PR7&dq=Kolb%2C%20D.%20A.%20(1984).%20Experiential%20Learning%3A%20Experience%20as%20the%20Source%20of%20Learning%20and%20Development.%20Prentice%20Hall.&lr&hl=es&pg=PR7#v=onepage&q&f=false  ',
    },
    {
      referencia:
        'Ausubel, D. (2000). La adquisición y retención del conocimiento: una visión cognitiva. Springer. ',
      link:
        'https://archive.org/details/ausubel-d.-adquisicion-y-retencion-del-conocimiento.-una-perspectiva-cognitiva ',
    },
    {
      referencia:
        'Malaguzzi, L. (1998). Los cien lenguajes de los niños: El enfoque Reggio Emilia en la educación infantil. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5207311  ',
    },
    {
      referencia:
        'Gardner, H. (1983). La Teoría de las Inteligencias Múltiples de Gardner. ',
      link: ' https://dialnet.unirioja.es/servlet/articulo?codigo=4844690 ',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia [MEN]. (2014). Lineamientos Curriculares para la Educación Inicial. ',
      link:
        'https://www.mineducacion.gov.co/portal/micrositios-preescolar-basica-y-media/Direccion-de-Calidad/Referentes-de-Calidad/339975:Lineamientos-curriculares ',
    },
    {
      referencia:
        'Tobón, S. (2010). Formación basada en competencias: pensamiento complejo, diseño curricular y didáctica. Ecoe Ediciones.      ',
      link:
        'https://cmapspublic3.ihmc.us/rid=1LVT9TXFX-1VKC0TM-16YT/Formaci%C3%B3n%20basada%20en%20competencias%20(Sergio%20Tob%C3%B3n).pdf ',
    },
    {
      referencia:
        'UNESCO. (2016). Educación y desarrollo en la primera infancia: una base sólida para el aprendizaje y el bienestar. ',
      link: 'https://www.unesco.org/es/early-childhood-education  ',
    },
    {
      referencia:
        'Bruner, J. (1986). El habla del niño: aprendiendo a usar el lenguaje. ',
      link: 'https://www.villaeducacion.mx/?mod=categorias&idtema=1519  ',
    },
    {
      referencia:
        'Piaget, J. (1952). The origins of intelligence in children. W. W. Norton & Company. ',
      link:
        'https://indaga.ual.es/discovery/fulldisplay?docid=alma991001773237204991&context=L&vid=34CBUA_UAL:VU1&lang=es&search_scope=MyInstitution&adaptor=Local%20Search%20Engine&tab=LibraryCatalog&query=sub,exact,Child%20psychotherapy,AND&mode=advanced&offset=0  ',
    },
    {
      referencia:
        'Amar Amar, J. J. (2016). Desarrollo infantil y prácticas de cuidado: ( ed.). Universidad del Norte. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/69971 ',
    },
    {
      referencia:
        'Osorio Villegas, M. D. S. & Puentes Ospino, D. M. (2023). Aprender a aprender: la V heurística como herramienta en el desarrollo de competencias infantiles: (1 ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/230522  ',
    },
    {
      referencia:
        'Rodríguez Vega, D. Hadad Larios, I. & Rodríguez Vega, D. (2013). Ideas pedagógicas: análisis de la normatividad sobre Educación Preescolar en Colombia: ( ed.). Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69916  ',
    },
    {
      referencia:
        'Osorio Villegas, M. & Herrera Púa, M. (2013). Educación Preescolar en Colombia: estructura del currículo y modelo pedagógico-didáctico: ( ed.). Universidad del Norte. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/69915',
    },
    {
      referencia:
        'Bruner, J. (1960). El proceso de la educación. Harvard University Press. ',
      link:
        'https://es.scribd.com/document/359544036/BRUNER-Jerome-El-Proceso-de-La-Educacion  ',
    },
    {
      referencia: 'Dewey, J. (1938). Experiencia y educación. ',
      link:
        'https://books.google.com.co/books/about/Experiencia_y_educaci%C3%B3n.html?id=NhfRAQAACAAJ&redir_esc=y  ',
    },
    {
      referencia:
        'Katz, L., & Chard, S. (2000). Engaging children´s minds: The project approach. Ablex.',
      link:
        'https://books.google.com.co/books?id=qOvEEAAAQBAJ&lpg=PP1&dq=Katz%2C%20L.%2C%20%26%20Chard%2C%20S.%20(2000).%20Engaging%20children´s%20minds%3A%20The%20project%20approach.%20Ablex.&lr&hl=es&pg=PR4#v=onepage&q=Katz,%20L.,%20&%20Chard,%20S.%20(2000).%20Engaging%20children´s%20minds:%20The%20project%20approach.%20Ablex.&f=false  ',
    },
    {
      referencia:
        'Litwin, E. (2008). El oficio de enseñar: condiciones y contextos. Paidós. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8602217  ',
    },
    {
      referencia: 'Montessori, M. (1912). Más que un método. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8769371 ',
    },
    {
      referencia:
        'Vigotsky, L. S. (1978). La mente en la sociedad: El desarrollo de los procesos psicológicos superiores. Harvard University Press. ',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=47861 ',
    },
    {
      referencia: 'Zabalza, M. A. (2020). La Didáctica Universitaria. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=2553099 ',
    },
    {
      referencia:
        'Piaget, J. (1971). The theory of stages in cognitive development. McGraw-Hill. ',
      link:
        'https://www.scirp.org/reference/referencespapers?referenceid=2277292 ',
    },
    {
      referencia:
        'Ley de Infancia y Adolescencia. (s.f.). Portal ICBF - Instituto Colombiano de Bienestar Familiar ICBF. ',
      link: 'https://www.icbf.gov.co/bienestar/ley-infancia-adolescencia  ',
    },
    {
      referencia: 'LEY 1804 DE 2016. (s.f.). SUIN-Juriscol MinJusticia. ',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30021778  ',
    },
    {
      referencia:
        'Flórez Romero, R. Castro Martínez, J. & Camelo C. I. R. (2019). El juego: un asunto serio en la formación de los niños y las niñas: ( ed.). Editorial Politécnico Grancolombiano. ',
      link: ' https://elibro.net/es/lc/tecnologicadeloriente/titulos/127366 ',
    },
    {
      referencia:
        'Monfort, M. (2016). El niño que habla: el lenguaje oral en preescolar: ( ed.). Editorial CEPE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153576  ',
    },
  ],
  glosario: [
    {
      termino: 'Actividades rectoras',
      significado:
        'Estrategias fundamentales en la educación inicial, como el juego, el arte, la literatura y la exploración del medio, que promueven el aprendizaje significativo.',
    },
    {
      termino: 'Aprendizaje significativo',
      significado:
        'Proceso mediante el cual los niños construyen conocimientos nuevos a partir de sus experiencias previas, facilitando la comprensión y aplicación de los saberes.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de principios, objetivos, contenidos y metodologías que guían la enseñanza y el aprendizaje en un nivel educativo específico.',
    },
    {
      termino: 'Desarrollo infantil',
      significado:
        'Proceso de cambios físicos, cognitivos, emocionales y sociales que experimentan los niños desde el nacimiento hasta la niñez.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia los métodos, estrategias y recursos para facilitar el proceso de enseñanza y aprendizaje.',
    },
    {
      termino: 'Educación inicial',
      significado:
        'Etapa educativa dirigida a la atención y formación integral de niños desde los primeros años de vida hasta los seis o siete años.',
    },
    {
      termino: 'Enfoque pedagógico',
      significado:
        'Conjunto de principios y teorías que orientan la enseñanza y el aprendizaje en función de un modelo educativo.',
    },
    {
      termino: 'Evaluación formativa',
      significado:
        'Proceso continuo de observación y análisis del aprendizaje, con el propósito de mejorar las estrategias pedagógicas y fortalecer el desarrollo del niño.',
    },
    {
      termino: 'Juego',
      significado:
        'Es una actividad espontánea y esencial en la infancia que permite el desarrollo de habilidades cognitivas, emocionales y sociales.',
    },
    {
      termino: 'Método pedagógico',
      significado:
        'Conjunto de estrategias y técnicas utilizadas para guiar el proceso de enseñanza y aprendizaje de manera efectiva.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'Ciencia que estudia la educación y los procesos de enseñanza-aprendizaje en distintos contextos.',
    },
    {
      termino: 'Planeación didáctica',
      significado:
        'Organización estructurada de objetivos, estrategias, recursos y evaluaciones para garantizar un proceso de enseñanza efectivo.',
    },
    {
      termino: 'Proyecto pedagógico',
      significado:
        'Estrategia de enseñanza que integra diversas áreas del conocimiento, promoviendo la exploración y el aprendizaje activo en los niños.',
    },
    {
      termino: 'Psicomotricidad',
      significado:
        'Relación entre el desarrollo del movimiento corporal y los procesos cognitivos y emocionales en la infancia.',
    },
    {
      termino: 'Rol del docente',
      significado:
        'Función del educador como facilitador del aprendizaje, orientador del desarrollo infantil y mediador de experiencias significativas.',
    },
    {
      termino: 'Socialización',
      significado:
        'Proceso mediante el cual los niños adquieren normas, valores y habilidades para interactuar en su entorno social y cultural.',
    },
    {
      termino: 'Zona de desarrollo próximo',
      significado:
        'Concepto de Vygotsky que define la distancia entre lo que un niño puede hacer por sí solo y lo que puede lograr con apoyo.',
    },
  ],
}
