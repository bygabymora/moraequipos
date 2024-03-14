import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { getError } from '../../utils/error.js';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const form = useRef();
  const router = useRouter();
  const [modelo, setModelo] = useState('');
  const [serial, setSerial] = useState('');
  const [diseño, setDiseño] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [facilidadDeUso, setFacilidadDeUso] = useState('');
  const [calidadDeAgua, setCalidadDeAgua] = useState('');
  const [color, setColor] = useState('');
  const [nivelDeRuido, setNivelDeRuido] = useState('');
  const [agregariaAlgo, setAgregariaAlgo] = useState('');
  const [suprimiriaAlgo, setSuprimiriaAlgo] = useState('');
  const [conosOtraMarca, setConosOtraMarca] = useState('');
  const [comparacionConOtraMarca, setComparacionConOtraMarca] = useState('');
  const [siMejorQue, setSiMejorQue] = useState('');
  const [siMenorQue, setSiMenorQue] = useState('');
  const [presentacionPersonalSAT, setPresentacionPersonalSAT] = useState('');
  const [amabilidadSAT, setAmabilidadSAT] = useState('');
  const [conocimientoSAT, setConocimientoSAT] = useState('');
  const [asesoriaSAT, setAsesoriaSAT] = useState('');
  const [tiempoSAT, setTiempoSAT] = useState('');
  const [observacionATecnicoNombre, setObservacionATecnicoNombre] =
    useState('');
  const [observacionATecnico, setObservacionATecnico] = useState('');
  const [recomendacionSAT, setRecomendacionSAT] = useState('');
  const [haUtilizadoWp, setHaUtilizadoWp] = useState('');
  const [queLeHaGustado, setQueLeHaGustado] = useState('');
  const [recomendacionWp, setRecomendacionWp] = useState('');
  const [unidadSinInconvenientes, setUnidadSinInconvenientes] = useState('');
  const [noHabiaNecesidad, setNoHabiaNecesidad] = useState('');
  const [resolvioSolo, setResolvioSolo] = useState('');
  const [noLeGusta, setNoLeGusta] = useState('');
  const [usaSATAnnar, setUsaSATAnnar] = useState('');
  const [tiempoDeRespuestaWp, setTiempoDeRespuestaWp] = useState('');
  const [amabilidadWp, setAmabilidadWp] = useState('');
  const [empatiaWp, setEmpatiaWp] = useState('');
  const [conocimientoWp, setConocimientoWp] = useState('');
  const [asesoriaWp, setAsesoriaWp] = useState('');
  const [solucionWp, setSolucionWp] = useState('');
  const [disponibilidadWp, setDisponibilidadWp] = useState('');
  const [deAcuerdoConVideo, setDeAcuerdoConVideo] = useState('');
  const [deAcuerdoConFotos, setDeAcuerdoConFotos] = useState('');
  const [deAcuerdoConBrindarApoyo, setDeAcuerdoConBrindarApoyo] = useState('');
  const [deAcuerdoConMonitoreo, setDeAcuerdoConMonitoreo] = useState('');
  const [wpAyudaAAgilizar, setWpAyudaAAgilizar] = useState('');
  const [wpReemplazable, setWpReemplazable] = useState('');
  const [siReemplazableQue, setSiReemplazableQue] = useState('');
  const [conociaMoraequipos, setConociaMoraequipos] = useState('');
  const [moraequiposEsSerio, setMoraequiposEsSerio] = useState('');
  const [moraequiposDaConfianza, setMoraequiposDaConfianza] = useState('');
  const [morequiposCumpleComoProveedor, setMorequiposCumpleComoProveedor] =
    useState('');
  const [sabiaEquiposEnTodoColombia, setSabiaEquiposEnTodoColombia] =
    useState('');
  const [tiempoRespuestaMq, setTiempoRespuestaMq] = useState('');
  const [equipoDisponibleMq, setEquipoDisponibleMq] = useState('');
  const [diseñoUnidadesMq, setDiseñoUnidadesMq] = useState('');
  const [calidadUnidadesMq, setCalidadUnidadesMq] = useState('');
  const [ubicacionMq, setUbicacionMq] = useState('');
  const [atencionNivelNacionalMq, setAtencionNivelNacionalMq] = useState('');
  const [infraestructuraMq, setInfraestructuraMq] = useState('');
  const [opcionNegociaciónQuedarse, setOpcionNegociaciónQuedarse] =
    useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [medioDeContacto, setMedioDeContacto] = useState('');
  const [numeroRifa, setNumeroRifa] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/usuariosAnnar/formulario', {
        modelo,
        serial,
        diseño,
        tamaño,
        facilidadDeUso,
        calidadDeAgua,
        color,
        nivelDeRuido,
        agregariaAlgo,
        suprimiriaAlgo,
        conosOtraMarca,
        comparacionConOtraMarca,
        siMejorQue,
        siMenorQue,
        presentacionPersonalSAT,
        amabilidadSAT,
        conocimientoSAT,
        asesoriaSAT,
        tiempoSAT,
        observacionATecnicoNombre,
        observacionATecnico,
        recomendacionSAT,
        haUtilizadoWp,
        queLeHaGustado,
        recomendacionWp,
        unidadSinInconvenientes,
        noHabiaNecesidad,
        resolvioSolo,
        noLeGusta,
        usaSATAnnar,
        tiempoDeRespuestaWp,
        amabilidadWp,
        empatiaWp,
        conocimientoWp,
        asesoriaWp,
        solucionWp,
        disponibilidadWp,
        deAcuerdoConVideo,
        deAcuerdoConFotos,
        deAcuerdoConBrindarApoyo,
        deAcuerdoConMonitoreo,
        wpAyudaAAgilizar,
        wpReemplazable,
        siReemplazableQue,
        conociaMoraequipos,
        moraequiposEsSerio,
        moraequiposDaConfianza,
        morequiposCumpleComoProveedor,
        sabiaEquiposEnTodoColombia,
        tiempoRespuestaMq,
        equipoDisponibleMq,
        diseñoUnidadesMq,
        calidadUnidadesMq,
        ubicacionMq,
        atencionNivelNacionalMq,
        infraestructuraMq,
        opcionNegociaciónQuedarse,
        razonSocial,
        direccion,
        ciudad,
        telefono,
        nombre,
        cargo,
        celular,
        email,
        medioDeContacto,
        numeroRifa,
      });
      sendEmail;

      form.current.reset();
      toast.success('Formulario enviado con éxito');
      setModelo('');
      setSerial('');
      setDiseño('');
      setTamaño('');
      setFacilidadDeUso('');
      setCalidadDeAgua('');
      setColor('');
      setNivelDeRuido('');
      setAgregariaAlgo('');
      setSuprimiriaAlgo('');
      setConosOtraMarca('');
      setComparacionConOtraMarca('');
      setSiMejorQue('');
      setSiMenorQue('');
      setPresentacionPersonalSAT('');
      setAmabilidadSAT('');
      setConocimientoSAT('');
      setAsesoriaSAT('');
      setTiempoSAT('');
      setObservacionATecnicoNombre('');
      setObservacionATecnico('');
      setRecomendacionSAT('');
      setHaUtilizadoWp('');
      setQueLeHaGustado('');
      setRecomendacionWp('');
      setUnidadSinInconvenientes('');
      setNoHabiaNecesidad('');
      setResolvioSolo('');
      setNoLeGusta('');
      setUsaSATAnnar('');
      setTiempoDeRespuestaWp('');
      setAmabilidadWp('');
      setEmpatiaWp('');
      setConocimientoWp('');
      setAsesoriaWp('');
      setSolucionWp('');
      setDisponibilidadWp('');
      setDeAcuerdoConVideo('');
      setDeAcuerdoConFotos('');
      setDeAcuerdoConBrindarApoyo('');
      setDeAcuerdoConMonitoreo('');
      setWpAyudaAAgilizar('');
      setWpReemplazable('');
      setSiReemplazableQue('');
      setConociaMoraequipos('');
      setMoraequiposEsSerio('');
      setMorequiposCumpleComoProveedor('');
      setMoraequiposDaConfianza('');
      setSabiaEquiposEnTodoColombia('');
      setTiempoRespuestaMq('');
      setEquipoDisponibleMq('');
      setDiseñoUnidadesMq('');
      setCalidadUnidadesMq('');
      setUbicacionMq('');
      setAtencionNivelNacionalMq('');
      setInfraestructuraMq('');
      setOpcionNegociaciónQuedarse('');
      setRazonSocial('');
      setDireccion('');
      setCiudad('');
      setTelefono('');
      setNombre('');
      setCargo('');
      setCelular('');
      setEmail('');
      setMedioDeContacto('');

      setTimeout(() => {
        router.push('/usuariosAnnar/gracias');
      }, 2000);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const sendEmail = () => {
    const formData = new FormData();
    formData.append('numeroRifa', numeroRifa);
    formData.append('user_company', razonSocial);
    formData.append('user_model', modelo);
    formData.append('user_serial', serial);
    formData.append('user_design', diseño);
    formData.append('user_size', tamaño);
    formData.append('user_ease_of_use', facilidadDeUso);
    formData.append('user_water_quality', calidadDeAgua);
    formData.append('user_color', color);
    formData.append('user_noise_level', nivelDeRuido);
    formData.append('user_would_add', agregariaAlgo);
    formData.append('user_would_remove', suprimiriaAlgo);
    formData.append('user_knows_other_brand', conosOtraMarca);
    formData.append(
      'user_comparison_with_other_brand',
      comparacionConOtraMarca
    );
    formData.append('user_better_than', siMejorQue);
    formData.append('user_worse_than', siMenorQue);
    formData.append('user_presentation', presentacionPersonalSAT);
    formData.append('user_kindness', amabilidadSAT);
    formData.append('user_knowledge', conocimientoSAT);
    formData.append('user_advice', asesoriaSAT);
    formData.append('user_time', tiempoSAT);
    formData.append(
      'user_technician_observation_name',
      observacionATecnicoNombre
    );
    formData.append('user_technician_observation', observacionATecnico);
    formData.append('user_recommendation', recomendacionSAT);
    formData.append('user_used_wp', haUtilizadoWp);
    formData.append('user_liked_wp', queLeHaGustado);
    formData.append('user_wp_recommendation', recomendacionWp);
    formData.append('user_unit_without_inconvenience', unidadSinInconvenientes);
    formData.append('user_no_need', noHabiaNecesidad);
    formData.append('user_resolved_alone', resolvioSolo);
    formData.append('user_does_not_like', noLeGusta);
    formData.append('user_uses_annar_sat', usaSATAnnar);
    formData.append('user_wp_response_time', tiempoDeRespuestaWp);
    formData.append('user_wp_kindness', amabilidadWp);
    formData.append('user_wp_empathy', empatiaWp);
    formData.append('user_wp_knowledge', conocimientoWp);
    formData.append('user_wp_advice', asesoriaWp);
    formData.append('user_wp_solution', solucionWp);
    formData.append('user_wp_availability', disponibilidadWp);
    formData.append('user_agree_with_video', deAcuerdoConVideo);
    formData.append('user_agree_with_photos', deAcuerdoConFotos);
    formData.append('user_agree_with_support', deAcuerdoConBrindarApoyo);
    formData.append('user_agree_with_monitoring', deAcuerdoConMonitoreo);
    formData.append('user_wp_helps_agilize', wpAyudaAAgilizar);
    formData.append('user_wp_replacement', wpReemplazable);
    formData.append('user_wp_replacement_what', siReemplazableQue);
    formData.append('user_knew_moraequipos', conociaMoraequipos);
    formData.append('user_moraequipos_is_serious', moraequiposEsSerio);
    formData.append(
      'user_moraequipos_gives_confidence',
      moraequiposDaConfianza
    );
    formData.append(
      'user_moraequipos_fulfills_as_provider',
      morequiposCumpleComoProveedor
    );
    formData.append(
      'user_knew_moraequipos_in_colombia',
      sabiaEquiposEnTodoColombia
    );
    formData.append('user_moraequipos_response_time', tiempoRespuestaMq);
    formData.append('user_moraequipos_equipment_available', equipoDisponibleMq);
    formData.append('user_moraequipos_design_units', diseñoUnidadesMq);
    formData.append('user_moraequipos_quality_units', calidadUnidadesMq);
    formData.append('user_moraequipos_location', ubicacionMq);
    formData.append(
      'user_moraequipos_national_attention',
      atencionNivelNacionalMq
    );
    formData.append('user_moraequipos_infrastructure', infraestructuraMq);
    formData.append('user_negotiation_option_stay', opcionNegociaciónQuedarse);
    formData.append('user_company', razonSocial);
    formData.append('user_address', direccion);
    formData.append('user_city', ciudad);
    formData.append('user_phone', telefono);
    formData.append('user_name', nombre);
    formData.append('user_position', cargo);
    formData.append('user_cellphone', celular);
    formData.append('user_email', email);
    formData.append('user_contact_method', medioDeContacto);

    emailjs
      .sendForm(
        'service_3a8jikd',
        'template_3yrp9q8',
        form.current,
        'wG2TINcQVhRY21xT-'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const generarNumeroRifa = () => {
      const numero = Math.floor(1000 + Math.random() * 9000);
      setNumeroRifa(numero.toString());
    };
    generarNumeroRifa();
  }, []);

  return (
    <div className=" m-x2 text-center  bg-gray-50 p-4">
      <div className="flex justify-center items-center w-full pt-5 pb-2 leading-tight ">
        <Image
          src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706038754/Banner_j0ufni.jpg"
          alt="Moraequipos"
          className="rounded-lg w-[90%] md:w-[90%]"
          width={1200}
          height={240}
        />
      </div>
      <div className="mb-4 text-left">
        <h1 className="text-2xl font-bold my-4">Encuesta de satisfacción</h1>
        <div>
          Agradecemos de antemano el tiempo que Usted nos obsequia, en responder
          esta encuesta. Su opinión es muy valiosa para nuestra organización.
          <br /> <br />
          <span className="font-bold text-xl">
            Está a 8 minutos de un premio fabuloso.
          </span>
          <br />
          <span className="font-bold">
            Entre los participantes, vamos a rifar 3 sistemas de potabilización
            de agua para uso en el hogar o la finca.
          </span>{' '}
          <br />
          <br />
          Por favor diligencie completamente la información solicitada al
          finalizar la encuesta, y a vuelta de correo le estaremos haciendo
          llegar el número asignado a usted, para garantizar así su
          participación en la rifa, así como las demás indicaciones al respecto.
          <br />
          <br />
          <span className="font-bold">
            Esta encuesta ha sido dividida en tres aspectos relevantes:
          </span>
          <br />
          <br /> <span className="font-bold">1. </span>Sobre nuestros equipos
          <br /> <span className="font-bold">2. </span>Sobre nuestro servicio
          <br /> <span className="font-bold">3. </span>Sobre Moraequipos como
          empresa proveedora.
        </div>
      </div>

      <form
        className=""
        ref={form}
        onSubmit={(e) => {
          submitHandler(e);
          sendEmail();
        }}
      >
        <div className=" ">
          <h3 className="contact__title">Por favor ingrese sus datos</h3>
          <div className="w-full px-3 pt-5 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
            <div className="contact__form-div mb-3 col-span-1 md:col-span-2">
              <label className="contact__form-tag  bg-gray-50 p-4">
                Nombre*
              </label>
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                onChange={(e) => setNombre(e.target.value || '')}
                value={nombre || ''}
                required
              />
              <input type="hidden" name="numeroRifa" value={numeroRifa} />
            </div>
            <div className="contact__form-div mb-3 col-span-1 ">
              <label className="contact__form-tag  bg-gray-50">Celular*</label>
              <input
                type="text"
                name="user_cellphone"
                className="contact__form-input"
                onChange={(e) => setCelular(e.target.value)}
                value={celular}
              />
            </div>
            <div className="contact__form-div mb-3 col-span-1 md:col-span-2">
              <label className="contact__form-tag  bg-gray-50">Email*</label>
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="contact__form-div mb-3 col-span-1 ">
              <label className="contact__form-tag  bg-gray-50">Ciudad*</label>
              <input
                type="text"
                name="user_city"
                className="contact__form-input"
                onChange={(e) => setCiudad(e.target.value)}
                value={ciudad}
                required
              />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="contact__title mt-2">
            Por favor ingrese los datos de su Empresa
          </h3>
          <div className="w-full px-3 pt-5 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
            <div className="contact__form-div mb-3 col-span-1 md:col-span-2">
              <label className="contact__form-tag  bg-gray-50 ">
                Razón social*
              </label>
              <input
                type="text"
                name="user_company"
                className="contact__form-input"
                onChange={(e) => setRazonSocial(e.target.value)}
                value={razonSocial}
              />
            </div>
            <div className="contact__form-div mb-3 col-span-1 ">
              <label className="contact__form-tag  bg-gray-50">Cargo*</label>
              <input
                type="text"
                name="user_position"
                className="contact__form-input"
                onChange={(e) => setCargo(e.target.value)}
                value={cargo}
              />
            </div>
            <div className="contact__form-div mb-3 col-span-1 ">
              <label className="contact__form-tag  bg-gray-50">Teléfono*</label>
              <input
                type="text"
                name="user_phone"
                className="contact__form-input"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                required
              />
            </div>
            <div className="contact__form-div mb-3 col-span-1 md:col-span-2">
              <label className="contact__form-tag  bg-gray-50">
                Dirección*
              </label>
              <input
                type="text"
                name="user_address"
                className="contact__form-input"
                onChange={(e) => setDireccion(e.target.value)}
                value={direccion}
              />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="contact__title mt-2">1. Sobre nuestros equipos</h3>
          <div className="w-full px-3 pt-3 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
            <div className="col-span-6 text-left">
              <p className="my-2 py-2 text-lg">
                Por favor relacione el modelo de sistema de agua que posee en su
                laboratorio, incluyendo el serial (esta información la encuentra
                en el costado posterior de la unidad de agua, al lado del
                interruptor de encendido, e identificada con el logotipo de
                Moraequipos).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 col-span-1 ">
                  <label className="contact__form-tag  bg-gray-50 ">
                    modelo*
                  </label>
                  <input
                    type="text"
                    name="modelo"
                    className="contact__form-input"
                    onChange={(e) => setModelo(e.target.value)}
                    value={modelo}
                  />
                </div>
                <div className="contact__form-div mb-3 col-span-1 ">
                  <label className="contact__form-tag  bg-gray-50">
                    serial*
                  </label>
                  <input
                    type="text"
                    name="serial"
                    className="contact__form-input"
                    onChange={(e) => setSerial(e.target.value)}
                    value={serial}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 text-left  border border-gray-200 p-2">
              <p className="my-2 py-2 ">
                <span className="font-semibold">1. </span>
                Califique en una escala de 1 a 5, donde 5 es la mejor
                calificación posible, los siguientes aspectos del sistema de
                agua:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Diseño</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_design"
                          id={`diseño-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setDiseño(`${i + 1}`)}
                          checked={diseño === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_design-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Tamaño</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_size"
                          id={`tamaño-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setTamaño(`${i + 1}`)}
                          checked={tamaño === `${i + 1}`}
                          value={i + 1}
                        />
                        <label htmlFor={`user_size-${i + 1}`} className="ml-2">
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Facilidad de manejo</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_ease_of_use"
                          id={`facilidadDeUso-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setFacilidadDeUso(`${i + 1}`)}
                          checked={facilidadDeUso === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_ease_of_use-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Calidad de agua que suministra</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_water_quality"
                          id={`calidadDeAgua-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setCalidadDeAgua(`${i + 1}`)}
                          checked={calidadDeAgua === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_water_quality-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Color</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_color"
                          id={`color-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setColor(`${i + 1}`)}
                          checked={color === `${i + 1}`}
                          value={i + 1}
                        />
                        <label htmlFor={`user_color-${i + 1}`} className="ml-2">
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Nivel de ruido</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_noise_level"
                          id={`nivelDeRuido-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setNivelDeRuido(`${i + 1}`)}
                          checked={nivelDeRuido === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_noise_level-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">2. </span>
                ¿Qué le agregaría Usted a esa unidad de agua?
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_would_add"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setAgregariaAlgo(e.target.value)}
                  value={agregariaAlgo}
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">3. </span>
                ¿Qué le suprimiría Usted a esa unidad de agua?
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_would_remove"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setSuprimiriaAlgo(e.target.value)}
                  value={suprimiriaAlgo}
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">4. </span>
                ¿Conoce Usted otra marca de sistemas de agua?
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_knows_other_brand_yes"
                    name="user_knows_other_brand"
                    className="contact__form-radio-input"
                    onChange={() => setConosOtraMarca(true)}
                    checked={conosOtraMarca === true}
                  />
                  <label htmlFor="user_knows_other_brand_yes" className="ml-2">
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_knows_other_brand_no"
                    name="user_knows_other_brand"
                    className="contact__form-radio-input"
                    onChange={() => setConosOtraMarca(false)}
                    checked={conosOtraMarca === false}
                  />
                  <label htmlFor="user_knows_other_brand_no" className="ml-2">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">5. </span>
                En caso afirmativo, como califica usted la unidad de agua
                Moraequipos, con respecto a la otra marca que conoce:
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="comparison_better"
                    name="user_comparison_with_other_brand"
                    className="contact__form-radio-input"
                    onChange={() => setComparacionConOtraMarca('Mejor')}
                    checked={comparacionConOtraMarca === 'Mejor'}
                  />
                  <label htmlFor="comparison_better" className="ml-2">
                    Mejor
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="comparison_similar"
                    name="user_comparison_with_other_brand"
                    className="contact__form-radio-input"
                    onChange={() => setComparacionConOtraMarca('Muy Similar')}
                    checked={comparacionConOtraMarca === 'Muy Similar'}
                  />
                  <label htmlFor="comparison_similar" className="ml-2">
                    Muy Similar
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="comparison_inferior"
                    name="user_comparison_with_other_brand"
                    className="contact__form-radio-input"
                    onChange={() =>
                      setComparacionConOtraMarca('Inferior Calidad')
                    }
                    checked={comparacionConOtraMarca === 'Inferior Calidad'}
                  />
                  <label htmlFor="comparison_inferior" className="ml-2">
                    Inferior Calidad
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">6. </span>
                Si su respuesta fue:{' '}
                <span className="font-semibold">Mejor</span>, o{' '}
                <span className="font-semibold">muy similar.</span>
                <br /> Qué destaca Usted de la unidad de agua Moraequipos.
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_better_than"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setSiMejorQue(e.target.value)}
                  value={siMejorQue}
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">7. </span>
                Si su respuesta fue:{' '}
                <span className="font-semibold">Inferior calidad</span>. <br />
                Le agradecemos nos amplíe su apreciación:
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_worse_than"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setSiMenorQue(e.target.value)}
                  value={siMenorQue}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="contact__title mt-2">2. Sobre nuestro servicio</h3>
          <div className="w-full px-3 pt-3 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
            <div className="col-span-6 text-left">
              <p className="my-2 py-2 text-lg">
                Aquí nos referimos al servicio que Usted o su laboratorio, ha
                recibido por parte del{' '}
                <span className="font-font-semibold">S</span>
                ervicio de <span className="font-semibold">
                  A
                </span>sistencia <span className="font-semibold">T</span>écnica{' '}
                <span className="font-semibold"> (SAT)</span> de Moraequipos, de
                manera presencial.
              </p>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 ">
                <span className="font-semibold">1. </span>
                Califique en una escala de 1 a 5, donde 5 es la mejor
                calificación posible, los siguientes aspectos del personal de
                servicio (en general, a pesar de haber sido atendido por varios
                técnicos):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Presentación Personal</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_presentation"
                          id={`presentacionPersonalSAT-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() =>
                            setPresentacionPersonalSAT(`${i + 1}`)
                          }
                          checked={presentacionPersonalSAT === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_presentation-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="contact__form-div mb-3 col-span-1 font-semibold">
                    <label className="">Amabilidad</label>
                    <div className="flex justify-start items-center space-x-4 mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="flex items-center">
                          <input
                            type="radio"
                            name="user_kindness"
                            id={`amabilidadSAT-${i + 1}`}
                            className="contact__form-radio-input"
                            onChange={() => setAmabilidadSAT(`${i + 1}`)}
                            checked={amabilidadSAT === `${i + 1}`}
                            value={i + 1}
                          />
                          <label
                            htmlFor={`user_kindness-${i + 1}`}
                            className="ml-2"
                          >
                            {i + 1}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact__form-div mb-3 col-span-1 font-semibold">
                    <label className="">
                      Conocimientos sobre la unidad de agua
                    </label>
                    <div className="flex justify-start items-center space-x-4 mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="flex items-center">
                          <input
                            type="radio"
                            name="user_knowledge"
                            id={`conocimientoSAT-${i + 1}`}
                            className="contact__form-radio-input"
                            onChange={() => setConocimientoSAT(`${i + 1}`)}
                            checked={conocimientoSAT === `${i + 1}`}
                            value={i + 1}
                          />
                          <label
                            htmlFor={`user_knowledge-${i + 1}`}
                            className="ml-2"
                          >
                            {i + 1}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact__form-div mb-3 col-span-1 font-semibold">
                    <label className="">
                      Asesoría y suministro de información
                    </label>
                    <div className="flex justify-start items-center space-x-4 mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="flex items-center">
                          <input
                            type="radio"
                            name="user_advice"
                            id={`asesoriaSAT-${i + 1}`}
                            className="contact__form-radio-input"
                            onChange={() => setAsesoriaSAT(`${i + 1}`)}
                            checked={asesoriaSAT === `${i + 1}`}
                            value={i + 1}
                          />
                          <label
                            htmlFor={`user_advice-${i + 1}`}
                            className="ml-2"
                          >
                            {i + 1}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="contact__form-div mb-3 col-span-1 font-semibold">
                    <label className="">
                      Tiempo demandado en los servicios recibidos
                    </label>
                    <div className="flex justify-start items-center space-x-4 mt-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className="flex items-center">
                          <input
                            type="radio"
                            name="user_time"
                            id={`tiempoSAT-${i + 1}`}
                            className="contact__form-radio-input"
                            onChange={() => setTiempoSAT(`${i + 1}`)}
                            checked={tiempoSAT === `${i + 1}`}
                            value={i + 1}
                          />
                          <label
                            htmlFor={`user_time-${i + 1}`}
                            className="ml-2"
                          >
                            {i + 1}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">2. </span>
                Si hay algún técnico a quien especialmente quiera hacerle alguna
                observación, utilice el siguiente espacio para hacerlo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 ">
                  <label className="contact__form-tag  bg-gray-50">
                    Nombre del técnico
                  </label>
                  <input
                    type="text"
                    name="user_technician_observation_name"
                    className="contact__form-input"
                    onChange={(e) =>
                      setObservacionATecnicoNombre(e.target.value)
                    }
                    value={observacionATecnicoNombre}
                  />
                </div>
                <div className="contact__form-div mb-3 ">
                  <label className="contact__form-tag  bg-gray-50">
                    Observación
                  </label>
                  <textarea
                    name="user_technician_observation"
                    className="w-full h-20 p-2 border rounded"
                    onChange={(e) => setObservacionATecnico(e.target.value)}
                    value={observacionATecnico}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">3.</span>
                En general ¿Qué le recomendaría a Moraequipos SAS para mejorar
                el servicio técnico que ofrece?
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_recommendation"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setRecomendacionSAT(e.target.value)}
                  value={recomendacionSAT}
                />
              </div>
            </div>
            <div className="col-span-6 text-left ">
              <p className="my-2 py-2 text-lg">
                A continuación, nos vamos a referir al servicio virtual recibido
                a través de nuestro WhatsApp corporativo{' '}
                <span className="font-semibold">320 219 3192</span>.
              </p>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">1. </span>
                ¿Ha utilizado Usted o el personal de su laboratorio, el servicio
                de asistencia a través de nuestro WhatsApp en algún momento?
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_used_wp_yes"
                    name="user_used_wp"
                    className="contact__form-radio-input"
                    onChange={() => setHaUtilizadoWp(true)}
                    checked={haUtilizadoWp === true}
                  />
                  <label htmlFor="user_used_wp_yes" className="ml-2">
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_used_wp_no"
                    name="user_used_wp"
                    className="contact__form-radio-input"
                    onChange={() => setHaUtilizadoWp(false)}
                    checked={haUtilizadoWp === false}
                  />
                  <label htmlFor="user_used_wp_no" className="ml-2">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">2. </span>
                En caso afirmativo, ¿Qué es lo que más le ha gustado de el
                servicio a través del WhatsApp?
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_liked_wp"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setQueLeHaGustado(e.target.value)}
                  value={queLeHaGustado}
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">3. </span>
                ¿Qué nos recomendaría para mejorar el servicio a través del
                WhatsApp?
              </p>
              <div className="contact__form-div mb-3 ">
                <textarea
                  name="user_wp_recommendation"
                  className="w-full h-20 p-2 border rounded"
                  onChange={(e) => setRecomendacionWp(e.target.value)}
                  value={recomendacionWp}
                />
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2">
                <span className="font-semibold">4. </span>
                En caso negativo, ¿Cuál es la razón por la que no ha utilizado
                el servicio de WhatsApp ?(Marque la(s) casilla(s) que considere)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="user_unit_without_inconvenience"
                    name="user_unit_without_inconvenience"
                    className="contact__form-radio-input"
                    onChange={() =>
                      setUnidadSinInconvenientes(!unidadSinInconvenientes)
                    }
                    checked={unidadSinInconvenientes === true}
                  />
                  <label
                    htmlFor="user_unit_without_inconvenience"
                    className="ml-2"
                  >
                    La unidad de agua nunca ha presentado inconvenientes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="user_no_need"
                    name="user_no_need"
                    className="contact__form-radio-input"
                    onChange={() => setNoHabiaNecesidad(!noHabiaNecesidad)}
                    checked={noHabiaNecesidad === true}
                  />
                  <label htmlFor="user_no_need" className="ml-2">
                    No he tenido necesidad de contactarles
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="user_resolved_alone"
                    name="user_resolved_alone"
                    className="contact__form-radio-input"
                    onChange={() => setResolvioSolo(!resolvioSolo)}
                    checked={resolvioSolo === true}
                  />
                  <label htmlFor="user_resolved_alone" className="ml-2">
                    He resuelto directamente la situación
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="user_does_not_like"
                    name="user_does_not_like"
                    className="contact__form-radio-input"
                    onChange={() => setNoLeGusta(!noLeGusta)}
                    checked={noLeGusta === true}
                  />
                  <label htmlFor="user_does_not_like" className="ml-2">
                    No me gusta ese medio de atención
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="user_uses_annar_sat"
                    name="user_uses_annar_sat"
                    className="contact__form-radio-input"
                    onChange={() => setUsaSATAnnar(!usaSATAnnar)}
                    checked={usaSATAnnar === true}
                  />
                  <label htmlFor="user_uses_annar_sat" className="ml-2">
                    Siempre he utilizado el servicio técnico de Annar
                    Diagnóstica
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">5. </span>
                En caso de haber empleado el servicio, por favor califique en
                una escala de 1 a 5, donde 5 es la mejor calificación posible,
                los siguientes aspectos de la atención recibida a través del
                WhatsApp corporativo de Moraequipos SAS.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Tiempo de respuesta</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_response_time"
                          id={`tiempoDeRespuestaWp-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setTiempoDeRespuestaWp(`${i + 1}`)}
                          checked={tiempoDeRespuestaWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_response_time-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Amabilidad</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_kindness"
                          id={`amabilidadWP-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setAmabilidadWp(`${i + 1}`)}
                          checked={amabilidadWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_kindness-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Conocimientos sobre la unidad de agua
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_knowledge"
                          id={`conocimientoWP-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setConocimientoWp(`${i + 1}`)}
                          checked={conocimientoWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_knowledge-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Asesoría y suministro de información
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_advice"
                          id={`asesoriaWP-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setAsesoriaWp(`${i + 1}`)}
                          checked={asesoriaWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_advice-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Solución al tema objeto de la consulta
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_solution"
                          id={`solucionWP-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setSolucionWp(`${i + 1}`)}
                          checked={solucionWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_solution-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Disponibilidad 24/7</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_wp_availability"
                          id={`disponibilidadWP-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setDisponibilidadWp(`${i + 1}`)}
                          checked={disponibilidadWp === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_wp_availability-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">6. </span>
                ¿Está de acuerdo con los siguientes lineamientos empleados por
                el personal que le atiende, para la adecuada resolución de su
                requerimiento a través del WhatsApp?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-between items-center space-x-4 mt-4">
                  <label htmlFor="user_agree_with_video" className="ml-2">
                    <span className="font-semibold">a. </span>Solicitud de envío
                    de un video para poder contextualizar la situación
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_video_yes"
                        name="user_agree_with_video"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConVideo(true)}
                        checked={deAcuerdoConVideo === true}
                      />
                      <label
                        htmlFor="user_agree_with_video_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_video_no"
                        name="user_agree_with_video"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConVideo(false)}
                        checked={deAcuerdoConVideo === false}
                      />
                      <label
                        htmlFor="user_agree_with_video_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-4">
                  <label htmlFor="user_agree_with_photo" className="ml-2">
                    <span className="font-semibold">b. </span>Solicitud de envío
                    de fotos para poder contextualizar la solución posible
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_photo_yes"
                        name="user_agree_with_photo"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConFotos(true)}
                        checked={deAcuerdoConFotos === true}
                      />
                      <label
                        htmlFor="user_agree_with_photo_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_photo_no"
                        name="user_agree_with_photo"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConFotos(false)}
                        checked={deAcuerdoConFotos === false}
                      />
                      <label
                        htmlFor="user_agree_with_photo_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-4">
                  <label htmlFor="user_agree_with_support" className="ml-2">
                    <span className="font-semibold">c. </span>Solicitud de su
                    apoyo para resolver la situación (por ejemplo reemplazo de
                    filtros previos)
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_support_yes"
                        name="user_agree_with_support"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConBrindarApoyo(true)}
                        checked={deAcuerdoConBrindarApoyo === true}
                      />
                      <label
                        htmlFor="user_agree_with_support_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_support_no"
                        name="user_agree_with_support"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConBrindarApoyo(false)}
                        checked={deAcuerdoConBrindarApoyo === false}
                      />
                      <label
                        htmlFor="user_agree_with_support_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-4">
                  <label htmlFor="user_agree_with_monitoring" className="ml-2">
                    <span className="font-semibold">d. </span>Monitoreo por
                    video llamada para resolver la situación
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_monitoring_yes"
                        name="user_agree_with_monitoring"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConMonitoreo(true)}
                        checked={deAcuerdoConMonitoreo === true}
                      />
                      <label
                        htmlFor="user_agree_with_monitoring_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_agree_with_monitoring_no"
                        name="user_agree_with_monitoring"
                        className="contact__form-radio-input"
                        onChange={() => setDeAcuerdoConMonitoreo(false)}
                        checked={deAcuerdoConMonitoreo === false}
                      />
                      <label
                        htmlFor="user_agree_with_monitoring_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">7.</span>
                ¿Considera que la existencia de un WhatsApp disponible 24 horas,
                ayuda a agilizar la posible solución de lo que está sucediendo
                con la unidad de agua?
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_wp_helps_agilize_yes"
                    name="user_wp_helps_agilize"
                    className="contact__form-radio-input"
                    onChange={() => setWpAyudaAAgilizar(true)}
                    checked={wpAyudaAAgilizar === true}
                  />
                  <label htmlFor="user_wp_helps_agilize_yes" className="ml-2">
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_wp_helps_agilize_no"
                    name="user_wp_helps_agilize"
                    className="contact__form-radio-input"
                    onChange={() => setWpAyudaAAgilizar(false)}
                    checked={wpAyudaAAgilizar === false}
                  />
                  <label htmlFor="user_wp_helps_agilize_no" className="ml-2">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">8.</span>
                ¿Considera que el servicio de WhatsApp podría reemplazarse por
                otro tipo de servicio más ágil?
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_wp_replacement_yes"
                    name="user_wp_replacement"
                    className="contact__form-radio-input"
                    onChange={() => setWpReemplazable(true)}
                    checked={wpReemplazable === true}
                  />
                  <label htmlFor="user_wp_replacement_yes" className="ml-2">
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_wp_replacement_no"
                    name="user_wp_replacement"
                    className="contact__form-radio-input"
                    onChange={() => setWpReemplazable(false)}
                    checked={wpReemplazable === false}
                  />
                  <label htmlFor="user_wp_replacement_no" className="ml-2">
                    No
                  </label>
                </div>
              </div>
              <p className="mt-2">
                En caso afirmativo, por favor haga su recomendación al respecto:
              </p>
              <textarea
                name="user_wp_replacement_what"
                className="w-full h-20 p-2 border rounded"
                onChange={(e) => setSiReemplazableQue(e.target.value)}
                value={siReemplazableQue}
              />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="contact__title mt-2">
            3. Sobre Moraequipos como empresa proveedora
          </h3>
          <div className="w-full px-3 pt-3 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
            <div className="col-span-6 text-left">
              <p className="my-2 py-2 text-lg">
                Aquí nos referimos al servicio que Usted o su laboratorio ha
                recibido directamente de la empresa Moraequipos y el
                conocimiento y concepto que tiene de nosotros.
              </p>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="col-span-2 text-center font-semibold mb-2">
                Porfavor responda a cada concepto
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-between items-center space-x-4 mt-2">
                  <label htmlFor="user_knew_moraequipos" className="ml-2">
                    <span className="font-semibold">a. </span>
                    ¿Conocía Ud. a Moraequipos desde antes de tener esta unidad
                    de Agua?
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_knew_moraequipos_yes"
                        name="user_knew_moraequipos"
                        className="contact__form-radio-input"
                        onChange={() => setConociaMoraequipos(true)}
                        checked={conociaMoraequipos === true}
                      />
                      <label
                        htmlFor="user_knew_moraequipos_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_knew_moraequipos_no"
                        name="user_knew_moraequipos"
                        className="contact__form-radio-input"
                        onChange={() => setConociaMoraequipos(false)}
                        checked={conociaMoraequipos === false}
                      />
                      <label
                        htmlFor="user_knew_moraequipos_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-2">
                  <label htmlFor="user_moraequipos_is_serious" className="ml-2">
                    <span className="font-semibold">b. </span>
                    ¿Considera Usted a Moraequipos como una empresa seria?
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_is_serious_yes"
                        name="user_moraequipos_is_serious"
                        className="contact__form-radio-input"
                        onChange={() => setMoraequiposEsSerio(true)}
                        checked={moraequiposEsSerio === true}
                      />
                      <label
                        htmlFor="user_moraequipos_is_serious_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_is_serious_no"
                        name="user_moraequipos_is_serious"
                        className="contact__form-radio-input"
                        onChange={() => setMoraequiposEsSerio(false)}
                        checked={moraequiposEsSerio === false}
                      />
                      <label
                        htmlFor="user_moraequipos_is_serious_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-2">
                  <label
                    htmlFor="user_moraequipos_gives_confidence"
                    className="ml-2"
                  >
                    <span className="font-semibold">c. </span>
                    ¿Es Moraequipos una empresa digna de su confianza?
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_gives_confidence_yes"
                        name="user_moraequipos_gives_confidence"
                        className="contact__form-radio-input"
                        onChange={() => setMoraequiposDaConfianza(true)}
                        checked={moraequiposDaConfianza === true}
                      />
                      <label
                        htmlFor="user_moraequipos_gives_confidence_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_gives_confidence_no"
                        name="user_moraequipos_gives_confidence"
                        className="contact__form-radio-input"
                        onChange={() => setMoraequiposDaConfianza(false)}
                        checked={moraequiposDaConfianza === false}
                      />
                      <label
                        htmlFor="user_moraequipos_gives_confidence_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-2">
                  <label
                    htmlFor="user_moraequipos_fulfills_as_provider"
                    className="ml-2"
                  >
                    <span className="font-semibold">d. </span>
                    ¿Moraequipos como proveedor, ha respondido a sus
                    expectativas?
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_fulfills_as_provider_yes"
                        name="user_moraequipos_fulfills_as_provider"
                        className="contact__form-radio-input"
                        onChange={() => setMorequiposCumpleComoProveedor(true)}
                        checked={morequiposCumpleComoProveedor === true}
                      />
                      <label
                        htmlFor="user_moraequipos_fulfills_as_provider_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_moraequipos_fulfills_as_provider_no"
                        name="user_moraequipos_fulfills_as_provider"
                        className="contact__form-radio-input"
                        onChange={() => setMorequiposCumpleComoProveedor(false)}
                        checked={morequiposCumpleComoProveedor === false}
                      />
                      <label
                        htmlFor="user_moraequipos_fulfills_as_provider_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-4 mt-2">
                  <label
                    htmlFor="user_knew_moraequipos_in_colombia"
                    className="ml-2"
                  >
                    <span className="font-semibold">e. </span>
                    ¿Sabía Usted que Moraequipos tiene equipos en todo el
                    territorio Colombiano?
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_knew_moraequipos_in_colombia_yes"
                        name="user_knew_moraequipos_in_colombia"
                        className="contact__form-radio-input"
                        onChange={() => setSabiaEquiposEnTodoColombia(true)}
                        checked={sabiaEquiposEnTodoColombia === true}
                      />
                      <label
                        htmlFor="user_knew_moraequipos_in_colombia_yes"
                        className="ml-2"
                      >
                        Sí
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="user_knew_moraequipos_in_colombia_no"
                        name="user_knew_moraequipos_in_colombia"
                        className="contact__form-radio-input"
                        onChange={() => setSabiaEquiposEnTodoColombia(false)}
                        checked={sabiaEquiposEnTodoColombia === false}
                      />
                      <label
                        htmlFor="user_knew_moraequipos_in_colombia_no"
                        className="ml-2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">2. </span>
                Por favor califique en una escala de 1 a 5, donde 5 es la mejor
                calificación posible, los siguientes aspectos de Moraequipos
                SAS.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Tiempo de respuesta a sus solicitudes
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_response_time"
                          id={`tiempoRespuestaMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setTiempoRespuestaMq(`${i + 1}`)}
                          checked={tiempoRespuestaMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_response_time-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Equipo de trabajo disponible </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_team_available"
                          id={`equipoDisponibleMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setEquipoDisponibleMq(`${i + 1}`)}
                          checked={equipoDisponibleMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_team_available-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Diseño de las unidades de agua que produce{' '}
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_design_units"
                          id={`disenoMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setDiseñoUnidadesMq(`${i + 1}`)}
                          checked={diseñoUnidadesMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_design_units-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Calidad de las unidades de agua que produce
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_quality_units"
                          id={`calidadMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setCalidadUnidadesMq(`${i + 1}`)}
                          checked={calidadUnidadesMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_quality_units-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Ubicación geográfica (Bogotá)</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_geographic_location"
                          id={`ubicacionMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setUbicacionMq(`${i + 1}`)}
                          checked={ubicacionMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_geographic_location-${
                            i + 1
                          }`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">Atención a nivel nacional</label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_national_attention"
                          id={`atencionNivelNacionalMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() =>
                            setAtencionNivelNacionalMq(`${i + 1}`)
                          }
                          checked={atencionNivelNacionalMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_national_attention-${
                            i + 1
                          }`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact__form-div mb-3 col-span-1 font-semibold">
                  <label className="">
                    Infraestructura disponible para atenderle
                  </label>
                  <div className="flex justify-start items-center space-x-4 mt-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name="user_moraequipos_infrastructure"
                          id={`infraestructuraMq-${i + 1}`}
                          className="contact__form-radio-input"
                          onChange={() => setInfraestructuraMq(`${i + 1}`)}
                          checked={infraestructuraMq === `${i + 1}`}
                          value={i + 1}
                        />
                        <label
                          htmlFor={`user_moraequipos_infrastructure-${i + 1}`}
                          className="ml-2"
                        >
                          {i + 1}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">3. </span>
                En caso de estar interesado en aceptar nuestra propuesta de
                quedarse con la unidad de agua que Annar Diagnóstica le instaló,
                por favor indíquenos cual sería para Usted la mejor opción de
                negociación, forma de pago, y términos generales que le
                ayudarían a tomar la decisión.
              </p>
              <textarea
                name="user_negotiation_option_stay"
                className="w-full h-20 p-2 border rounded"
                onChange={(e) => setOpcionNegociaciónQuedarse(e.target.value)}
                value={opcionNegociaciónQuedarse}
              />
            </div>
            <div className="col-span-6 text-left border border-gray-200 p-2">
              <p className="my-2 py-2 text-lg">
                <span className="font-semibold">4. </span>
                Por favor comentemos su medio de contacto preferido.
              </p>
              <div className="flex justify-start items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_contact_method_email"
                    name="user_contact_method"
                    className="contact__form-radio-input"
                    onChange={() => setMedioDeContacto('Email')}
                    checked={medioDeContacto === 'Email'}
                  />
                  <label htmlFor="user_contact_method_email" className="ml-2">
                    Email
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_contact_method_whatsapp"
                    name="user_contact_method"
                    className="contact__form-radio-input"
                    onChange={() => setMedioDeContacto('WhatsApp')}
                    checked={medioDeContacto === 'WhatsApp'}
                  />
                  <label
                    htmlFor="user_contact_method_whatsapp"
                    className="ml-2"
                  >
                    WhatsApp
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="user_contact_method_call"
                    name="user_contact_method"
                    className="contact__form-radio-input"
                    onChange={() => setMedioDeContacto('Llamada')}
                    checked={medioDeContacto === 'Llamada'}
                  />
                  <label htmlFor="user_contact_method_call" className="ml-2">
                    Llamada
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <p className="font-bold text-xl my-2">
            Agradecemos el haber diligenciado esta encuesta. Su opinión es muy
            valiosa para nuestra organización.
          </p>
        </div>
        <button className="button button--flex btn-contact mt-3" type="submit">
          <span className="text-white">Enviar</span>
        </button>
      </form>
    </div>
  );
};

export default Formulario;
