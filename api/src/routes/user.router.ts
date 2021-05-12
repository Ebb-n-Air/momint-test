import { Application, Request, Response, Router } from 'express';
import { UserController } from '../controllers';


export const router = Router({
  strict: true,
});

//Example post request
router.post('/', UserController.exampleUserMethod);
router.post('/getFollowers', UserController.findFollowers);

