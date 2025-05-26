import { upload } from '../index.js';
import { Router } from 'express';

export default function(prisma) {
  const router = Router();

  // GET all approved listings with optional filters
  router.get('/', async (req, res) => {
    const { q, minPrice, maxPrice } = req.query;
    const where = { approved: true };
    if (minPrice) where.price = { gte: +minPrice };
    if (maxPrice) where.price = { ...(where.price || {}), lte: +maxPrice };
    if (q) where.OR = [
      { title: { contains: q, mode: 'insensitive' } },
      { location: { contains: q, mode: 'insensitive' } }
    ];
    const listings = await prisma.listing.findMany({ where, orderBy: { createdAt: 'desc' }});
    res.json(listings);
  });

  // POST create listing (pending)
  router.post('/', upload.array('images', 10), async (req, res) => {
    const { title, location, price } = req.body;
    const imagePaths = req.files.map(f => '/uploads/' + f.filename);
    const listing = await prisma.listing.create({
      data: { title, location, price: +price, images: imagePaths }
    });
    res.status(201).json(listing);
  });

  // PUT approve listing (admin)
  router.put('/:id/approve', async (req, res) => {
    const { id } = req.params;
    const updated = await prisma.listing.update({ where: { id: +id }, data: { approved: true } });
    res.json(updated);
  });

  return router;
}