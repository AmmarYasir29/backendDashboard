import {Request, Response} from "express";
import { Student } from './../entity/Students';
import { Teacher } from './../entity/techer';
import * as validate from "validate.js";
import Validator from '../helper/validation.helper';
import {okRes,errRes,} from "../helper/tools.helper"
import * as bcrypt from 'bcrypt'
import * as jwt from "jsonwebtoken";

export default class CallbackFun {
    
    static async showSpecificStudent(req:Request,res:Response) {
    let id = req.params.id;

    try {
        let data = await Student.findOne({
          where: { id },
        });
        return okRes(res, { data });
      } catch (error) {
        return errRes(res, error);
      }
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    static async showTeacher(req,res) {
        try {
            let data = await Teacher.find({});
            return okRes(res, { data });
        } catch (error) {
            return errRes(res, error);
        }
    }
    
    //FIXME: password not compared 
    static async login(req:Request,res:Response) {
        let isValid = validate(req.body, Validator.login());
        if (isValid) return errRes(res, isValid);
    
        let user = await Teacher.findOne({ where: { emaill:req.body.emaill } });
        if (!user) return errRes(res, `email is not registered`);

        let validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return errRes(res, `Please check your data`);

        const token = jwt.sign({ id: user.id }, 12345);

        return okRes(res, { data: { token } });
        // return okRes(res,token)
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    //FIXME: generate not serial id s (likly random and save it to DB)
    static async addteach(req:Request,res:Response) {
        let isValid = validate(req.body, Validator.addTeacher());
        if (isValid) return errRes(res, isValid);

        let user:any;
        user = await Student.findOne({ where: { phone: req.body.phone } });
        if (user) return errRes(res, `Phone ${req.body.phone} already exists`);

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        let teacher:any;
        try {
            teacher = await Teacher.create({
                ...req.body,
                password,
              });
              await teacher.save();
              return okRes(res,{teacher});
        } catch (error) {
        errRes(res,error.detail)        
        }
    }
    /**
     * 
     * @param req 
     * @param res 
     */
    static async showStudent(req:Request,res:Response) {
        try {
            let data = await Student.find({});
            return okRes(res, { data });
        } catch (error) {
            return errRes(res, error);
        }
        }
        /**
         * 
         * @param req 
         * @param res 
         */
    static async addStudent (req:Request,res:Response) {
        let isValid = validate(req.body, Validator.addStudent());
        if (isValid) return errRes(res, isValid);
        
        let user:any;
        try {
            user = await Student.findOne({ where: { phone: req.body.phone } });
            if (user) return errRes(res, `Phone ${req.body.phone} already exists`);
            
        } catch (error) {
        console.log(`the errore is ${error}`);
                    
        }

        let student:any;
        student = await Student.create({...req.body});
        await student.save(); 
        return res.json(student);
    }
}