import { Application, Request, Response, Router } from 'express';
import { FileController } from '../controllers';


export const router = Router({
  strict: true,
});

router.post('/uploadFile', FileController.uploadFile);