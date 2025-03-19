<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Principios didácticos de la educación preescolar (actividades rectoras)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Pensemos por un momento cómo los niños y niñas descubren el mundo a su alrededor. ¿De qué manera aprenden sobre su entorno, se expresan y desarrollan sus habilidades? La respuesta se encuentra en el juego, el arte, la literatura y la exploración, actividades que no solo entretienen, sino que estructuran su aprendizaje y potencian su desarrollo integral.
        p(data-aos="fade-left") Posteriormente, se abordarán los principios didácticos de la educación preescolar, centrándose en las actividades rectoras, aquellas que guían el aprendizaje de los niños en esta etapa. A través del juego, la literatura y la exploración del medio, se crean experiencias significativas que fortalecen el pensamiento, la creatividad y la interacción social.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Breve recorrido de la didáctica en la educación infantil
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Breve recorrido de la didáctica en la educación infantil</b>, un análisis sobre la evolución de las estrategias pedagógicas desde la Antigüedad hasta la actualidad. Este documento presenta cómo pensadores como Platón, Rousseau, Pestalozzi, Montessori y Vygotsky han influido en la manera en que se estructura el aprendizaje en la primera infancia.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Breve recorrido de la didáctica en la educación infantil.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    

    h2.mb-5(data-aos="fade-left") Fundamentos de los principios didácticos

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1(data-aos="fade-left")
        p La educación infantil es una etapa clave en el desarrollo humano, ya que en los primeros años de vida los niños construyen las bases para su aprendizaje futuro. La didáctica desempeña un papel fundamental en este proceso, proporcionando herramientas metodológicas que generan experiencias de aprendizaje enriquecedoras, motivadoras y adaptadas a las necesidades de cada niño.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Según Zabalza (2020), la didáctica en educación infantil no se limita a la transmisión de conocimientos, sino que busca fomentar el desarrollo integral mediante estrategias que potencien la curiosidad, el pensamiento crítico, la creatividad y la interacción con el entorno. Por su parte, Litwin (2008) resalta que las prácticas didácticas en la primera infancia deben centrarse en la exploración, el descubrimiento y la construcción activa del conocimiento.
    
    h2(data-aos="fade-left") Importancia de la didáctica en la educación infantil
    p.mb-5 La didáctica orienta la enseñanza y permite estructurar el proceso de aprendizaje de manera significativa, favoreciendo:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Aprendizaje activo")
            p Según Piaget (1971), los niños construyen su conocimiento a través de la interacción con el entorno y experiencias concretas.
    
          .div(titulo="Pensamiento y creatividad")
            p Vigotsky (1978) enfatiza que el aprendizaje ocurre en un contexto social, donde la exploración y el diálogo fomentan el pensamiento divergente.
    
          .div(titulo="Autonomía y socialización")
            p Montessori (1912) destaca la importancia de permitir que los niños descubran el mundo por sí mismos, promoviendo la independencia y las relaciones interpersonales.
    
          .div(titulo="Adaptación a necesidades individuales")
            p Gardner (1983) plantea la teoría de las inteligencias múltiples, resaltando la importancia de diversificar estrategias didácticas.
    
    p.mb-4 Estos principios permiten diseñar metodologías que se ajusten a las características de cada niño, favoreciendo su aprendizaje de manera significativa.

    h2(data-aos="fade-left") Enfoques didácticos en la educación infantil
    p.mb-5 A lo largo de la historia, diversos enfoques han sido aplicados en la educación infantil con el objetivo de mejorar la calidad del aprendizaje. Entre los más relevantes se encuentran:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-2.order-lg-1
              h5 Constructivismo
              p Basado en Piaget (1971) y Vigotsky (1978), enfatiza la construcción del conocimiento mediante la interacción con el entorno y la mediación del adulto. Se implementa a través de metodologías activas donde los niños exploran y experimentan.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-2.order-lg-1
              h5 Aprendizaje basado en el juego
              p El juego es la principal vía de aprendizaje en la infancia. Mediante el juego simbólico, actividades lúdicas y dramatización, los niños desarrollan habilidades cognitivas, socioemocionales y motrices.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-2.order-lg-1
              h5 Aprendizaje experiencial
              p Inspirado en Dewey (1938), destaca la importancia de aprender a través de la acción y la exploración de situaciones reales. Se traduce en actividades prácticas y proyectos significativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-2.order-lg-1
              h5 Enfoque Reggio Emilia
              p Desarrollado por Malaguzzi (1998), se centra en la creatividad, la expresión artística y la participación en proyectos colectivos, donde el educador es un mediador del aprendizaje.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-2.order-lg-1
              h5 Modelo Montessori
              p Propuesto por Montessori (1912), enfatiza la autonomía, la autodisciplina y el aprendizaje mediante la manipulación de materiales diseñados para el desarrollo sensorial y cognitivo.

    p.mb-4 Cada enfoque aporta estrategias valiosas para la enseñanza en educación infantil, permitiendo adaptar la práctica pedagógica a las necesidades y características de los niños.

    h2(data-aos="fade-left") Estrategias didácticas para el aprendizaje significativo
    p.mb-5 Para que estos enfoques sean efectivos, es fundamental que los docentes implementen estrategias que favorezcan el aprendizaje activo y significativo. Algunas de las más relevantes incluyen:

    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Creación de ambientes de aprendizaje enriquecidos:</b> Malaguzzi (1998) describe el espacio como el "tercer maestro". Es crucial diseñar entornos que fomenten la exploración, la interacción y la creatividad.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Uso de materiales manipulativos:</b> Bruner (1960) enfatiza que los niños aprenden mejor cuando pueden manipular objetos antes de abordar conceptos abstractos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b> Desarrollo de proyectos colaborativos:</b> Integrar diferentes áreas del conocimiento y promover la resolución de problemas en equipo fortalece la socialización y el pensamiento crítico.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-9
                    p.mb-0 <b>Rutinas flexibles:</b> Katz y Chard (2000) sugieren que las rutinas deben ser flexibles y adaptadas a los niños, combinando actividades estructuradas con exploración libre.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/tema2/11.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Estas estrategias garantizan un aprendizaje más dinámico y adaptado a las necesidades de cada niño, asegurando experiencias educativas enriquecedoras y motivadoras.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La didáctica en la educación infantil no solo facilita la transmisión de conocimientos, sino que también contribuye a la formación de niños autónomos, creativos y capaces de desenvolverse en diversos contextos. Como destacan Vigotsky (1978) y Malaguzzi (1998), el aprendizaje en esta etapa debe basarse en la interacción, la exploración y la construcción activa del conocimiento.

    p.mb-4 A través de la aplicación de enfoques pedagógicos adecuados y estrategias innovadoras, los docentes pueden garantizar experiencias de aprendizaje enriquecedoras y significativas. Por ello, es fundamental que los educadores se formen y actualicen en metodologías didácticas que respondan a las necesidades de cada niño, asegurando así un desarrollo integral y una educación infantil de calidad.

    .bg-full-width.bg-color-6.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Estrategias didácticas para potenciar el aprendizaje
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>Estrategias didácticas para potenciar el aprendizaje</b>, un análisis sobre cómo el juego, la exploración y la interacción social favorecen el desarrollo infantil. Este documento presenta enfoques clave para diseñar experiencias de aprendizaje significativas, fomentar la curiosidad y creatividad en los niños, y aplicar estrategias de evaluación adaptadas a la educación inicial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estrategias didácticas para potenciar el aprendizaje.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')


    

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Subtítulo tema
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/273010" target="_blank" rel="noopener noreferrer") Pérez González, J. C. (Comp.). (2024). La educación Infantil de cara al desarrollo sostenible y la innovación: (1 ed.). Editorial Universo Sur. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1990-86442021000500427&lng=es&tlng=es. " target="_blank" rel="noopener noreferrer") Díaz López, Raquel, Alfonso Amaro, Yennis, & Marcaida Pérez, Yanitza. (2021). Reflexiones acerca de la didáctica para la educación de los niños de la primera infancia. Conrado, 17(82), 427-437. Epub 02 de octubre de 2021. Recuperado en 09 de febrero de 2025.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.aeiotu.com/blogs/la-importancia-de-la-experiencia-educativa-en-la-primera-" target="_blank" rel="noopener noreferrer") La importancia de la Experiencia Educativa en la Primera Infancia. (s.f.). aeioTU - aeioTU. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elmundodemozart.com/como-desarrollar-la-creatividad-en-los-ninos/  " target="_blank" rel="noopener noreferrer") ¿Cómo desarrollar la creatividad en niños y niñas? - El mundo de Mozart. (s.f.). El mundo de Mozart. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PoJ1C5kQj-M " target="_blank" rel="noopener noreferrer") Colegio San Pedro Pascual Valencia. (2021, 10 de febrero). #Aprenderjugando #5años #jugar #aprendizajesignificativo #Infantil #educación [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pedagogiainfantiliberoamaericana2017.blogspot.com/2017/05/la-exploracion-del-medio-en-la.html " target="_blank" rel="noopener noreferrer") LA EXPLORACIÓN DEL MEDIO EN LA EDUCACIÓN INICIAL. (s.f.). PEDAGOGÍA INFANTIL.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Ir-uq5l-plY " target="_blank" rel="noopener noreferrer") Jacq. (2014, 20 de septiembre). DIDÁCTICA DE LA EDUCACIÓN INFANTIL [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PoJ1C5kQj-M " target="_blank" rel="noopener noreferrer") Colegio San Pedro Pascual Valencia. (2021, 10 de febrero). #Aprenderjugando #5años #jugar #aprendizajesignificativo #Infantil #educación [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=u6ntXYMw0bA " target="_blank" rel="noopener noreferrer") Facultad de Psicología Universidad de la República. (2018, 17 de septiembre). El juego en la Infancia: derecho de los niños o estrategia docente. Lic Ana Malajovich [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=neHHiGDI_pg " target="_blank" rel="noopener noreferrer") UFVedu. (2018, 13 de abril). Arte, Creatividad y Expresión. Es cosa de niños [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=2os5fQOrdnk " target="_blank" rel="noopener noreferrer") videoconferencias. (2013b, 17 de mayo). UTPL EL LENGUAJE [(CCEE - EDUCACIÓN INFANTIL)(APRENDIZAJE Y DESARROLLO DEL LENGUAJE)] [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
