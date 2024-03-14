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
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      console.log(`Page view updated or created:`, pageView); // Debugging log
      res.status(200).json({ success: true, data: pageView });
    } catch (error) {
      console.error(`Error updating/creating page view:`, error); // Debugging log
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(400).json({ success: false, error: 'POST request required' });
  }
}
