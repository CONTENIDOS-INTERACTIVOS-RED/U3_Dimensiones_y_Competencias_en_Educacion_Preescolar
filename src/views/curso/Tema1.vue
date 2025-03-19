<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Principios pedagógicos y curriculares de la educación inicial y preescolar'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p La educación en la primera infancia es la base para el desarrollo integral de los niños y niñas. Comprender los principios pedagógicos y curriculares permite diseñar ambientes de aprendizaje enriquecedores, inclusivos y adaptados a sus necesidades. 
        p Esto implica conocer los enfoques pedagógicos, la flexibilidad curricular y las normativas vigentes, asegurando experiencias significativas que potencien el desarrollo cognitivo, emocional y social.
        p <b>¿Cómo aprendemos nuestras primeras palabras, a reconocer colores o a contar hasta diez?</b> Esto ocurre a través del juego, la interacción con la familia y la exploración del entorno. En la educación inicial, el aprendizaje se construye a partir de la experiencia, la curiosidad y la participación activa del niño.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para garantizar un proceso significativo y favorecer el desarrollo integral, es fundamental comprender los principios pedagógicos que orientan la enseñanza en esta etapa. Estos principios están estrechamente ligados al desarrollo infantil y son esenciales para construir una educación de calidad.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y propósito de los principios pedagógicos en la educación inicial y preescolar

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p Los principios pedagógicos son fundamentos que guían las prácticas educativas, asegurando que el aprendizaje sea pertinente y acorde con el desarrollo infantil. Su propósito es estructurar estrategias que fomenten la construcción activa del conocimiento, promoviendo el pensamiento crítico, la creatividad y la interacción con el entorno.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Desde una perspectiva constructivista, el aprendizaje infantil se entiende como un proceso en el que el niño es un agente activo en la construcción de su conocimiento. Piaget señala que el desarrollo cognitivo ocurre en etapas sucesivas mediante la interacción con el entorno, mientras que Vygotsky destaca el papel del juego y la relación social en la formación de funciones cognitivas superiores.
        p(data-aos="fade-left") En el siguiente podcast se explorarán los principios esenciales de la educación inicial y preescolar, destacando su impacto en el desarrollo infantil y la importancia de un aprendizaje adaptado a las necesidades de cada niño.
    
    .bg-full-width.bg-color-4.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p Aplicar estos principios implica un cambio en el rol del docente, quien debe ser mediador y facilitador, promoviendo experiencias de aprendizaje autónomas. La planificación curricular debe ser flexible para atender la diversidad y fomentar competencias clave para la vida.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Reflexión
              p.mb-0 Al diseñar una actividad para niños en edad preescolar, ¿se considera su manera natural de aprender?

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Relación entre pedagogía y desarrollo infantil
    
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El aprendizaje en los primeros años no ocurre de manera aislada, sino dentro de un contexto dinámico donde interactúan factores cognitivos, socioemocionales, motrices y lingüísticos. Vygotsky (1978) enfatiza que la construcción del conocimiento es un proceso social mediado por el lenguaje y la interacción con otros. En este sentido, la Zona de Desarrollo Próximo (ZDP) destaca la importancia del apoyo pedagógico ajustado a las necesidades y capacidades del niño.
        p(data-aos="fade-left") El diseño de experiencias educativas debe considerar las características de cada etapa del desarrollo infantil:

    .bg-full-width-2.bg-fondo-1.mb-5
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center Cognitivo
              p.mb-0.text-center Se fortalece el pensamiento, memoria, atención y resolución de problemas. Piaget señala que los niños construyen su conocimiento a partir de la interacción con su entorno.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/8.svg" alt="" style="width: 90px")
              h5.text-center Socioemocional
              p.mb-0.text-center Involucra la construcción de relaciones interpersonales y la autorregulación emocional. Bowlby destaca que la seguridad emocional influye en la capacidad de aprendizaje.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Motriz
              p.mb-0.text-center Se desarrolla el control del cuerpo, la coordinación y la interacción con el entorno. La motricidad gruesa y fina son esenciales para la autonomía infantil.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center Lingüístico
              p.mb-0.text-center Implica la adquisición y uso del lenguaje. Vygotsky subraya el papel del lenguaje como herramienta de pensamiento y aprendizaje.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p Asimismo, la teoría de las inteligencias múltiples de Gardner (1983) resalta la importancia de ofrecer estrategias variadas que respondan a los diferentes estilos de aprendizaje. Esto implica que la pedagogía en la educación inicial debe ser flexible y adaptativa, integrando experiencias multisensoriales y promoviendo la exploración activa del entorno.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Punto clave
              p.mb-0 La educación inicial no solo enseña contenidos, sino que propicia experiencias que estimulan la curiosidad, el pensamiento y la interacción social.

    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Educación basada en el desarrollo integral
    
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Amar (2016) enfatiza que una educación integral considera al niño en todas sus dimensiones: física, cognitiva, emocional y social. No se trata solo de aprendizaje académico, sino también del desarrollo de habilidades sociales, la gestión de emociones y la promoción de la salud física.
        p(data-aos="fade-left") Desde esta perspectiva, una educación integral en la primera infancia debe proporcionar experiencias significativas que favorezcan el crecimiento armonioso de los niños en diversos ámbitos:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/13.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="6%" y="10%" numero="+")
                h5 Cognitivo
                p Fomenta habilidades de pensamiento, memoria y resolución de problemas. La exploración y el juego son esenciales en este proceso.
    
              .bg-color-white.box-shadow.p-3(x="6%" y="56.5%" numero="+")
                h5 Socioemocional
                p Impulsa el autoconocimiento, la empatía y la construcción de relaciones interpersonales. La seguridad emocional es clave en el aprendizaje.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="10%" numero="+")
                h5 Motriz
                p Desarrolla la coordinación y el control corporal a través de actividades físicas y manipulativas.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="56.5%" numero="+")
                h5 Lingüístico
                p Estimula la comunicación y comprensión del lenguaje mediante la interacción social, el juego y la narración de historias.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        p La UNESCO (2019) destaca que una educación de calidad en la primera infancia debe garantizar el bienestar físico y emocional de los niños, promoviendo su autonomía y preparándolos para el aprendizaje a lo largo de la vida. Esto implica la creación de entornos seguros y afectivos que potencien cada dimensión del desarrollo infantil.
    
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Reflexión
              p.mb-0 ¿Cómo se pueden aplicar estos principios en la práctica educativa para potenciar el aprendizaje en la primera infancia?  
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5  Un dato importante
              p.mb-0 La familia desempeña un papel clave en este proceso. La educación inicial se extiende más allá del aula, incluyendo todos los espacios donde el niño interactúa.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Enfoques pedagógicos en la educación inicial
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Enfoques pedagógicos en la educación inicial</b>, un análisis sobre cómo diferentes teorías del aprendizaje han transformado la enseñanza en la primera infancia. Este documento explora el constructivismo, el socioconstructivismo, el aprendizaje basado en la experiencia y la educación personalizada, destacando su impacto en el desarrollo infantil.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Enfoques pedagógicos en la educación inicial.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')   

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Principios curriculares en la educación inicial
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Imagina a un niño explorando su entorno con curiosidad, haciendo preguntas y aprendiendo a través del juego. ¿Cómo diseñar un currículo que respalde su proceso de aprendizaje y desarrollo integral? En la educación inicial, el currículo no solo debe transmitir conocimientos, sino también favorecer experiencias que permitan a los niños construir habilidades esenciales para la vida.
        p(data-aos="fade-left") El currículo en esta etapa se basa en principios que garantizan su pertinencia, flexibilidad y enfoque integral. A continuación, se analizan tres aspectos clave: la integralidad y flexibilidad curricular, el enfoque basado en competencias y la importancia del ambiente de aprendizaje.
    
    .bg_img.mb-5
      h2(data-aos="fade-left") Integralidad y flexibilidad curricular
      p.mb-5 Un currículo integral y flexible en la educación inicial reconoce la complejidad del desarrollo infantil y la necesidad de abordar todas sus dimensiones de manera articulada. No se limita a la enseñanza de conocimientos académicos, sino que busca ofrecer experiencias significativas que potencien el desarrollo cognitivo, emocional, social y físico de los niños, respetando sus ritmos e intereses individuales.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
          h5.text-center Cognitiva
          p.mb-0.text-center Pensamiento lógico, creatividad y resolución de problemas.
    
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/18.svg" alt="" style="width: 90px")
          h5.text-center Emocional	
          p.mb-0.text-center Autoestima, seguridad y gestión de emociones.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/19.svg" alt="" style="width: 90px")
          h5.text-center Social	
          p.mb-0.text-center Comunicación, cooperación y construcción de relaciones.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/20.svg" alt="" style="width: 90px")
          h5.text-center Física
          p.mb-0.text-center Coordinación motriz, hábitos saludables y expresión corporal.

    p Según el Ministerio de Educación Nacional de Colombia (2014), la educación inicial debe garantizar experiencias de aprendizaje integrales, evitando enfoques fragmentados. Para ello, las actividades deben integrar diversas áreas del desarrollo y permitir el aprendizaje en contextos reales y significativos. Por otro lado, la flexibilidad curricular permite ajustar los contenidos, metodologías y estrategias pedagógicas a las necesidades individuales de los niños y al contexto social y cultural en el que se desenvuelven. Algunas estrategias clave incluyen:

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 Integración de actividades basadas en los intereses de los niños.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 Uso de metodologías activas como el aprendizaje basado en proyectos y el juego.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 Implementación de evaluación formativa para adaptar la enseñanza al ritmo de cada niño.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 Diversificación de materiales didácticos accesibles y adecuados.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/21.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p Osorio y Herrera (2013) sostienen que un currículo integral y flexible es esencial para garantizar un aprendizaje equilibrado y adaptado a las necesidades de cada niño.
    
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ejemplo en el aula
              p.mb-0 Algunos niños pueden interesarse más por la música y el arte, mientras que otros prefieren actividades al aire libre. Un currículo flexible permite integrar estrategias diversas, como usar canciones para reforzar conceptos matemáticos o explorar la naturaleza para desarrollar habilidades científicas. 
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5  Puntos clave
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Un currículo integral aborda todas las dimensiones del desarrollo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La flexibilidad permite ajustar la enseñanza a las necesidades individuales y contextuales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La educación inicial debe ser adaptativa y significativa.

    h2(data-aos="fade-left") Enfoque basado en competencias en la educación inicial
    p.mb-5 ¿Por qué es importante trabajar por competencias en esta etapa? El enfoque basado en competencias busca que los niños no solo adquieran conocimientos, sino que los apliquen en situaciones cotidianas. Según Tobón (2010), una competencia integra conocimientos, habilidades y actitudes que permiten a una persona desenvolverse en distintos contextos.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Comunicación efectiva.</b> Favorece la expresión de ideas y emociones.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Pensamiento crítico.</b> Impulsa la curiosidad y la resolución de problemas.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Autonomía.</b> Desarrolla confianza y toma de decisiones.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Trabajo en equipo.</b> Promueve la cooperación, empatía y resolución de conflictos.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema1/23.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p Osorio y Puentes (2023) destacan la importancia de fomentar habilidades que permitan a los niños <b>aprender a aprender</b>, promoviendo la autonomía y la metacognición. Este enfoque también impulsa el uso de estrategias como la V heurística, que ayuda a estructurar el conocimiento de manera integral.
    
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ejemplo en el aula
              p.mb-0 Algunos niños pueden interesarse más por la música y el arte, mientras que otros prefieren actividades al aire libre. Un currículo flexible permite integrar estrategias diversas, como usar canciones para reforzar conceptos matemáticos o explorar la naturaleza para desarrollar habilidades científicas. 
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5  Puntos clave
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Un currículo integral aborda todas las dimensiones del desarrollo.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La flexibilidad permite ajustar la enseñanza a las necesidades individuales y contextuales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 La educación inicial debe ser adaptativa y significativa.

    .bg_img.mb-5
      h2(data-aos="fade-left") Importancia del ambiente de aprendizaje
      p.mb-5 El entorno educativo no es solo un espacio físico, sino un elemento activo en la construcción del conocimiento. Loris Malaguzzi (1998), creador del enfoque Reggio Emilia, lo denomina "el tercer maestro", junto con la familia y el docente.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/25.svg" alt="" style="width: 90px")
          h5.text-center Seguridad
          p.mb-0.text-center Proporciona confianza para explorar.
    
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/26.svg" alt="" style="width: 90px")
          h5.text-center Estimulación	
          p.mb-0.text-center Despierta la curiosidad y el descubrimiento.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/27.svg" alt="" style="width: 90px")
          h5.text-center Organización	
          p.mb-0.text-center Facilita la autonomía de los niños.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/28.svg" alt="" style="width: 90px")
          h5.text-center Inclusión
          p.mb-0.text-center Responde a la diversidad de necesidades.
    
    p.mb-4 <b>El ambiente como tercer educador:</b> Un aula organizada en rincones de aprendizaje (lectura, arte, juego simbólico) permite que los niños tomen decisiones sobre su proceso de aprendizaje.

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                h5 Estimulación sensorial y cognitiva:
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Exploración sensorial:</b> texturas, sonidos y colores favorecen la percepción y el razonamiento.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Experimentación:</b> La manipulación de materiales fortalece el pensamiento lógico.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Lenguaje y comunicación:</b> narración de historias y juegos de roles amplían el vocabulario.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/29.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Un dato importante
              p.mb-0 La diversidad en el aula fomenta la inclusión y el respeto por las diferencias.
        .bg-color-8.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5  Puntos clave
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 El ambiente influye en la motivación y la interacción social.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Un espacio bien diseñado promueve la exploración y el aprendizaje autónomo. 
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 Los materiales deben ser accesibles y adecuados a la edad de los niños.

    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Relación entre desarrollo infantil y currículo
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p Desde los primeros años, cada experiencia, interacción y juego contribuye al desarrollo de habilidades fundamentales. Un currículo efectivo debe equilibrar estructura y flexibilidad, considerando las etapas del desarrollo infantil, el papel del juego y la interacción social, así como el rol del docente como mediador.
        h2(data-aos="fade-left") Etapas del desarrollo y su impacto en el aprendizaje
        p.mb-5 Jean Piaget (1972) identifica dos etapas clave en la educación inicial:
    
    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/32.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Sensoriomotora (0-2 años)	
                p.mb-0 Exploración sensorial, manipulación de objetos, desarrollo de la permanencia del objeto.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/33.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Preoperacional (2-7 años)	
                p.mb-0 Pensamiento simbólico, uso del lenguaje, egocentrismo, dificultad para comprender conceptos abstractos.
    
    p.mb-4 Lev Vygotsky (1978) enfatiza que el aprendizaje ocurre en un contexto social y cultural, donde la mediación de adultos y pares es clave para el desarrollo.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                h5 Puntos clave:
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 Un currículo debe adaptarse a cada etapa del desarrollo.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 La construcción del conocimiento es progresiva, de lo concreto a lo abstracto.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 La interacción social potencia el aprendizaje.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/34.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg_img.mb-5
      h2(data-aos="fade-left") El juego, la exploración y la interacción social
      p.mb-5 El juego es la principal herramienta de aprendizaje en la infancia. Según la UNESCO (2019), favorece habilidades cognitivas, socioemocionales y motoras.

    div.row.justify-content-center.align-items-stretch.mb-5
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/35.svg" alt="" style="width: 90px")
          h5.text-center Libre
          p.mb-0.text-center Estimula la creatividad y la autonomía.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/36.svg" alt="" style="width: 90px")
          h5.text-center Simbólico	
          p.mb-0.text-center Desarrolla el lenguaje y la socialización.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/37.svg" alt="" style="width: 90px")
          h5.text-center Construcción	
          p.mb-0.text-center Fortalece la coordinación motriz y el pensamiento lógico.
      div.col-lg-3.mb-4(data-aos="zoom-in-up")
        div.bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/38.svg" alt="" style="width: 90px")
          h5.text-center De reglas
          p.mb-0.text-center Promueve el autocontrol y la cooperación.


    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2
                h5 Puntos clave:
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 El juego es una estrategia fundamental en la educación inicial.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 La exploración y la interacción social enriquecen el aprendizaje.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0  Un currículo debe integrar experiencias significativas.
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/39.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Esta versión optimiza la estructura del contenido, facilitando su comprensión sin perder profundidad en la información.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Normatividad vigente en Colombia
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Normatividad vigente en Colombia</b>, donde se explica cómo la educación inicial ha evolucionado en el país, consolidándose como una etapa clave en el desarrollo integral de la infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Normatividad vigente en Colombia.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')   



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/portal/men/Publicaciones/Documentos/341835:Documento-N-22-El-juego-en-la-educacion-inicial " target="_blank" rel="noopener noreferrer") Documento N° 22: El juego en la educación inicial | Ministerio de Educación Nacional. (s.f.). Inicio | Ministerio de Educación Nacional. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50663 " target="_blank" rel="noopener noreferrer") CEP, E. (2013). Manual técnico especialista en jardín de infancia: ( ed.). Editorial CEP, S.L. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blogs.usil.edu.pe/facultad-educacion/educacion-inicial/principios-educacion-inicial " target="_blank" rel="noopener noreferrer") Blog: Los 7 principios de la Educación Inicial que todo futuro educador debe conocer | Blog USIL. (s.f.). Blog USIL. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.innovaschools.edu.co/desarrollo-integral-del-nino-en-la-educacion-inicial " target="_blank" rel="noopener noreferrer") Blog: Desarrollo integral del niño en la educación inicial. (s.f.). Blog Innova Schools. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://blog.innovaschools.edu.co/desarrollo-integral-del-nino-en-la-educacion-inicial " target="_blank" rel="noopener noreferrer") Blog: Desarrollo integral del niño en la educación inicial. (s.f.-b). Blog Innova Schools. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.its.edu.pe/blog/10-aspectos-importantes-del-juego-y-aprendizaje-en-la-educacion-inicial " target="_blank" rel="noopener noreferrer") 10 aspectos importantes del juego y aprendizaje en la educación inicial. (s.f.). Empieza tu formación Superior en Pedagogía Educativa - Innova Teaching School. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2lzvgdv8eyk " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2013, 7 de octubre). Educación Inicial, El Mejor Comienzo [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zvMY_DQuTNU " target="_blank" rel="noopener noreferrer") ILCEtv. (2016, 3 de noviembre). ¿Qué es educación inicial? [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=EQcpe8Rg6x8 " target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia. (2016, 7 de noviembre). Conferencias: El Aprendizaje Basado en Juegos [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4vKHA31lZIk " target="_blank" rel="noopener noreferrer") Facultad de Psicología Universidad de la República. (2019, 10 de octubre). Desarrollo, aprendizajes, y educación en la Primera Infancia [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=t8aRz0_XEZs " target="_blank" rel="noopener noreferrer") videoconferencias. (2013, 18 de abril). UTPL FACTORES Y ELEMENTOS DE UN CURRÍCULO PARVULARIO [(CCEE) (MÉTODOS DE EDUCACIÓN PREESCOLAR)] [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yYFhPO5pArc " target="_blank" rel="noopener noreferrer") Sprouts Español. (2020, 8 de octubre). La Teoría del Desarrollo Cognitivo de Piaget [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
