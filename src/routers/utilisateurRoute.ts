import express  from 'express'; 
import { userController } from '../controllers/userController';
const router = express.Router(); 

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router
 
