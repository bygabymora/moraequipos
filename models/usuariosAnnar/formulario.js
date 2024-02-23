import mongoose from 'mongoose';

const formularioAnnarSchema = new mongoose.Schema(
  {
    modelo: { type: String, required: false },
    serial: { type: String, required: false },
    diseño: { type: String, required: false },
    tamaño: { type: String, required: false },
    facilidadDeUso: { type: String, required: false },
    calidadDeAgua: { type: String, required: false },
    color: { type: String, required: false },
    nivelDeRuido: { type: String, required: false },
    agregariaAlgo: { type: String, required: false },
    suprimiriaAlgo: { type: String, required: false },
    conosOtraMarca: { type: String, required: false },
    comparacionConOtraMarca: { type: String, required: false },
    siMejorQue: { type: String, required: false },
    siMenorQue: { type: String, required: false },
    presentacionPersonalSAT: { type: String, required: false },
    amabilidadSAT: { type: String, required: false },
    conocimientoSAT: { type: String, required: false },
    asesoriaSAT: { type: String, required: false },
    tiempoSAT: { type: String, required: false },
    observacionATecnicoNombre: { type: String, required: false },
    observacionATecnico: { type: String, required: false },
    recomendacionSAT: { type: String, required: false },
    haUtilizadoWp: { type: String, required: false },
    queLeHaGustado: { type: String, required: false },
    recomendacionWp: { type: String, required: false },
    unidadSinInconvenientes: { type: Boolean, required: false },
    noHabiaNececidad: { type: Boolean, required: false },
    resovioSolo: { type: Boolean, required: false },
    noLeGusta: { type: Boolean, required: false },
    usaSATAnnar: { type: Boolean, required: false },
    tiempoDeRespuestaWp: { type: String, required: false },
    amabilidadWp: { type: String, required: false },
    empatiaWp: { type: String, required: false },
    conocimientoWp: { type: String, required: false },
    asesoriaWp: { type: String, required: false },
    solucionWp: { type: String, required: false },
    disponibilidadWp: { type: String, required: false },
    deAcuerdoConVideo: { type: Boolean, required: false },
    deAcuerdoConFotos: { type: Boolean, required: false },
    deAcuerdoConBrindarApoyo: { type: Boolean, required: false },
    deAcuerdoConMonitoreo: { type: Boolean, required: false },
    wpAyudaAAgilizar: { type: Boolean, required: false },
    wpReemplazable: { type: Boolean, required: false },
    siReemplazableQue: { type: String, required: false },
    conociaMoraequipos: { type: Boolean, required: false },
    moraequiposEsSerio: { type: Boolean, required: false },
    morequiposCumpleComoProveedor: { type: Boolean, required: false },
    sabiaEquiposEnTodoColombia: { type: Boolean, required: false },
    tiempoRespuestaMq: { type: String, required: false },
    equipoDisponibleMq: { type: String, required: false },
    diseñoUnidadesMq: { type: String, required: false },
    calidadUnidadesMq: { type: String, required: false },
    ubicacionMq: { type: String, required: false },
    atencionNivelNacionalMq: { type: String, required: false },
    infraestructuraMq: { type: String, required: false },
    opcionNegociaciónQuedarse: { type: String, required: false },
    razonSocial: { type: String, required: false },
    direccion: { type: String, required: false },
    ciudad: { type: String, required: false },
    telefono: { type: String, required: false },
    nombre: { type: String, required: false },
    cargo: { type: String, required: false },
    celular: { type: String, required: false },
    email: { type: String, required: false, unique: true },
    medioDeContacto: { type: String, required: false },
  },

  {
    timestamps: true,
  }
);

const FormularioAnnar =
  mongoose.models.FormularioAnnar ||
  mongoose.model('FormularioAnnar', formularioAnnarSchema);
export default FormularioAnnar;
