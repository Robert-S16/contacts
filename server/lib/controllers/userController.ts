import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserDBController {
    public getUsers(req: Request, res: Response) {
        User.find({}, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user);
        })
    }

    public registerUser(req: Request, res: Response) {
        let newUser = new User(req.body);

        newUser.save((err, rUser) => {
            if (err) {
                res.send(err);
            } else {
                let payload = { subject: rUser._id };
                let token = jwt.sign(payload, 'secretKey');
                res.status(200).send({ token });
            }
        })
    }

    public loginUser(req: Request, res: Response) {
        let userData = req.body;
        User.findOne({ email: userData.email }, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                if (!user) {
                    res.status(401).send('Invalid Email');
                } else
                    if (user.password !== userData.password) {
                        res.status(401).send('Invalid Password');
                    } else {
                        let payload = { subject: user._id, name: user.name };
                        let token = jwt.sign(payload, 'secretKey');
                        res.status(200).send({ token });
                    }

            }
        })
    }

    public updateUser(req: Request, res: Response) {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err)
            }
            res.json(user);
        })
    }

    public deleteUser(req: Request, res: Response) {
        User.remove({ _id: req.params.userId }, (err) => {
            if (err) {
                res.send(err)
            }
            res.json({
                message: 'Successfully deleted user!'
            })
        })
    }

    public verifyToken(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized request: no req');
        }
        
        let token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unauthorized request: no token');
        }
        let payload = jwt.verify(token, 'secretKey');
        if (!payload) {
            return res.status(401).send('Unauthorized request: no payload');
        }
        req.userId = payload.subject
        next();
    }


}