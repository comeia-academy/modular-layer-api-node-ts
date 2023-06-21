import { Router } from 'express';

import crud1Router from '@/modules/cruds-example/crud-example1/api/routes/crud1.routes';
import crud2Router from '@/modules/cruds-example/crud-example2/api/routes/crud2.routes';

const router = Router();

router.use('/crud-example1', crud1Router);
router.use('/crud-example2', crud2Router);

export default router;
