import dbAnnar from '../../../../utils/db/dbAnnar';
import PageView from '../../../../models/usuariosAnnar/PageView';

export default async function handler(req, res) {
  await dbAnnar.connect();

  const { page } = req.query;

  if (req.method === 'POST') {
    try {
      const pageView = await PageView.findOneAndUpdate(
        { pageName: page },
        { $inc: { views: 1 } },
        { new: true, upsert: true }
      );
      res.status(200).json({ success: true, data: pageView });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false, error: 'POST request required' });
  }
}
