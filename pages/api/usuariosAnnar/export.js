import mongoose from 'mongoose';
import FormularioAnnar from '../../../models/usuariosAnnar/formulario';
import ExcelJS from 'exceljs';

const exportData = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await mongoose.connect(process.env.MONGODB_URI_ANNAR);

      const data = await FormularioAnnar.find({});

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Data');

      worksheet.columns = [
        { header: 'Razón Social', key: 'razonSocial', width: 20 },
        { header: 'Dirección', key: 'direccion', width: 20 },
        { header: 'Ciudad', key: 'ciudad', width: 15 },
        { header: 'Teléfono', key: 'telefono', width: 15 },
        { header: 'Nombre', key: 'nombre', width: 15 },
        { header: 'Cargo', key: 'cargo', width: 15 },
        { header: 'Celular', key: 'celular', width: 15 },
        { header: 'Email', key: 'email', width: 20 },
        {
          header: ' Por favor comentemos su medio de contacto preferido.',
          key: 'medioDeContacto',
          width: 20,
        },
        { header: 'Modelo', key: 'modelo', width: 15 },
        { header: 'Serial', key: 'serial', width: 20 },
        { header: 'Diseño', key: 'diseño', width: 15 },
        { header: 'Tamaño', key: 'tamaño', width: 10 },
        { header: 'Facilidad de Uso', key: 'facilidadDeUso', width: 20 },
        { header: 'Calidad de Agua', key: 'calidadDeAgua', width: 15 },
        { header: 'Color', key: 'color', width: 10 },
        { header: 'Nivel de Ruido', key: 'nivelDeRuido', width: 15 },
        {
          header: '¿Qué le agregaría Usted a esa unidad de agua?',
          key: 'agregariaAlgo',
          width: 20,
        },
        {
          header: '¿Qué le suprimiría Usted a esa unidad de agua?',
          key: 'suprimiriaAlgo',
          width: 20,
        },
        {
          header: '¿Conoce Usted otra marca de sistemas de agua?',
          key: 'conosOtraMarca',
          width: 20,
        },
        {
          header:
            'En caso afirmativo, como califica usted la unidad de agua Moraequipos, con respecto a la otra marca que conoce:',
          key: 'comparacionConOtraMarca',
          width: 20,
        },
        {
          header:
            'Si su respuesta fue: Mejor, o muy similar. Qué destaca Usted de la unidad de agua Moraequipos.',
          key: 'siMejorQue',
          width: 20,
        },
        {
          header:
            ' Si su respuesta fue: Inferior calidad. Le agradecemos nos amplíe su apreciación:',
          key: 'siMenorQue',
          width: 20,
        },
        {
          header: 'Presentación personal SAT',
          key: 'presentacionPersonalSAT',
          width: 20,
        },
        { header: 'Amabilidad SAT', key: 'amabilidadSAT', width: 20 },
        { header: 'Conocimiento SAT', key: 'conocimientoSAT', width: 20 },
        { header: 'Asesoría SAT', key: 'asesoriaSAT', width: 20 },
        { header: 'Tiempo SAT', key: 'tiempoSAT', width: 20 },

        {
          header:
            'Si hay algún técnico a quien especialmente quiera hacerle alguna observación, utilice el siguiente espacio para hacerlo.',
          key: 'observacionATecnico',
          width: 20,
        },
        {
          header: 'Nombre del técnico',
          key: 'observacionATecnicoNombre',
          width: 20,
        },
        {
          header:
            'En general ¿Qué le recomendaría a Moraequipos SAS para mejorar el servicio técnico que ofrece?',
          key: 'recomendacionSAT',
          width: 20,
        },
        {
          header:
            '¿Ha utilizado Usted o el personal de su laboratorio, el servicio de asistencia a través de nuestro WhatsApp en algún momento?',
          key: 'haUtilizadoWp',
          width: 15,
        },
        {
          header:
            'En caso afirmativo, ¿Qué es lo que más le ha gustado de el servicio a través del WhatsApp?',
          key: 'queLeHaGustado',
          width: 20,
        },
        {
          header:
            ' ¿Qué nos recomendaría para mejorar el servicio a través del WhatsApp?',
          key: 'recomendacionWp',
          width: 20,
        },
        {
          header: 'No usa WP por: Unidad sin inconvenientes',
          key: 'unidadSinInconvenientes',
          width: 20,
        },
        {
          header: 'No usa WP por: No había necesidad',
          key: 'noHabiaNecesidad',
          width: 20,
        },
        {
          header: 'No usa WP por: Resolvió solo',
          key: 'resolvioSolo',
          width: 20,
        },
        { header: 'No usa WP por: No le gusta', key: 'noLeGusta', width: 20 },
        {
          header: 'No usa WP por: Usa SAT Annar',
          key: 'usaSATAnnar',
          width: 20,
        },
        {
          header: 'Tiempo de respuesta WP',
          key: 'tiempoDeRespuestaWp',
          width: 20,
        },
        { header: 'Amabilidad WP', key: 'amabilidadWp', width: 20 },
        { header: 'Empatía WP', key: 'empatiaWp', width: 20 },
        { header: 'Conocimiento WP', key: 'conocimientoWp', width: 20 },
        { header: 'Asesoría WP', key: 'asesoriaWp', width: 20 },
        { header: 'Solución WP', key: 'solucionWp', width: 20 },
        { header: 'Disponibilidad WP', key: 'disponibilidadWp', width: 20 },
        {
          header:
            'Está de acuerdo con solicitud de envío de un video para poder contextualizar la situación',
          key: 'deAcuerdoConVideo',
          width: 20,
        },
        {
          header:
            'Está de acuerdo con solicitud de envío de fotos para poder contextualizar la solución posible',
          key: 'deAcuerdoConFotos',
          width: 20,
        },
        {
          header:
            'Está de acuerdo con solicitud de su apoyo para resolver la situación (por ejemplo reemplazo de filtros previos)',
          key: 'deAcuerdoConBrindarApoyo',
          width: 20,
        },
        {
          header:
            'Está de acuerdo con monitoreo por video llamada para resolver la situación',
          key: 'deAcuerdoConMonitoreo',
          width: 20,
        },
        {
          header:
            '¿Considera que la existencia de un WhatsApp disponible 24 horas, ayuda a agilizar la posible solución de lo que está sucediendo con la unidad de agua?',
          key: 'wpAyudaAAgilizar',
          width: 20,
        },
        {
          header:
            '¿Considera que el servicio de WhatsApp podría reemplazarse por otro tipo de servicio más ágil?',
          key: 'wpReemplazable',
          width: 20,
        },
        {
          header:
            'En caso afirmativo, por favor haga su recomendación al respecto:',
          key: 'siReemplazableQue',
          width: 20,
        },
        {
          header:
            ' ¿Conocía Ud. a Moraequipos desde antes de tener esta unidad de Agua?',
          key: 'conociaMoraequipos',
          width: 20,
        },
        {
          header: '¿Considera Usted a Moraequipos como una empresa seria?',
          key: 'moraequiposEsSerio',
          width: 20,
        },
        {
          header: ' ¿Es Moraequipos una empresa digna de su confianza?',
          key: 'moraequiposDaConfianza',
          width: 20,
        },
        {
          header:
            'Moraequipos como proveedor, ha respondido a sus expectativas?',
          key: 'morequiposCumpleComoProveedor',
          width: 20,
        },
        {
          header:
            '¿Sabía Usted que Moraequipos tiene equipos en todo el territorio Colombiano?',
          key: 'sabiaEquiposEnTodoColombia',
          width: 20,
        },
        {
          header: 'Tiempo de respuesta a sus solicitudes',
          key: 'tiempoRespuestaMq',
          width: 20,
        },
        {
          header: 'Equipo de trabajo disponible',
          key: 'equipoDisponibleMq',
          width: 20,
        },
        {
          header: 'Diseño de las unidades de agua que produce',
          key: 'diseñoUnidadesMq',
          width: 20,
        },
        {
          header: 'Calidad de las unidades de agua que produce',
          key: 'calidadUnidadesMq',
          width: 20,
        },
        {
          header: 'Ubicación geográfica (Bogotá)',
          key: 'ubicacionMq',
          width: 20,
        },
        {
          header: 'Atención a nivel nacional',
          key: 'atencionNivelNacionalMq',
          width: 20,
        },
        {
          header: 'Infraestructura disponible para atenderle',
          key: 'infraestructuraMq',
          width: 20,
        },
        {
          header:
            'En caso de estar interesado en aceptar nuestra propuesta de quedarse con la unidad de agua que Annar Diagnóstica le instaló, por favor indíquenos cual sería para Usted la mejor opción de negociación, forma de pago, y términos generales que le ayudarían a tomar la decisión.',
          key: 'opcionNegociaciónQuedarse',
          width: 20,
        },
      ];

      data.forEach((item) => {
        worksheet.addRow(item.toObject());
      });

      const buffer = await workbook.xlsx.writeBuffer();

      res.setHeader(
        'Content-Disposition',
        'attachment; filename="formulario_annar_data.xlsx"'
      );
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );

      res.end(buffer);
    } catch (error) {
      console.error('Error exporting data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default exportData;
