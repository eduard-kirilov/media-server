const path = require('path');
const sharp = require('sharp');

exports.getImages = async (req, res) => {
  try {
    if (req.params.id && req.query.w && req.query.h) {
      const dir = path.join(__dirname, 'images/media')
      const image = path.join(dir, req.params.id)
      const resizeImage = await sharp(image)
        .resize(Number(req.query.w), Number(req.query.h))
        .png()
        .toBuffer();
      return res.end(resizeImage);
    }
    return res.status(401).send('Bad request!');
  }
  catch (err) {
    throw err;
  }
}