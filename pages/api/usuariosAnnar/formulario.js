import FormularioAnnar from '../../../models/usuariosAnnar/formulario';
import dbAnnar from '../../../utils/db/dbAnnar';

const handler = async (req, res) => {
  try {
    await dbAnnar.connect();

    const newFormularioAnnar = new FormularioAnnar({
      ...req.body,
    });

    const formularioAnnar = await newFormularioAnnar.save();
    res.status(201).send(formularioAnnar);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error guardando nuevo formulario.' });
  }
};
export default handler;
