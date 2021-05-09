import { Request, Response } from "express";
import {multer } from "multer";
import zlib = require("zlib");
import fs = require("fs");

export const uploadFile = async (req: Request, res: Response) => {
    try {
        console.log('upload hit');
        let uf = req.body.media_data;
        let ext = req.body.extension;
        let fn = req.body.file_name;
        let file = btoa(uf.split(':base64,').pop());
        const basePath ="C:/S/R/momint/momint-test/api/src/media-uploads/"; 
        const src = basePath + fn; // TODO: replace hardcoded src val with environment variable
        console.log(src);
        fs.writeFile(src, file, {encoding: 'base64'}, function (err) {
            const srcStream = fs.createReadStream(src);
            const dest = src + ".gz";
            const destStream = fs.createWriteStream(dest);
            console.log('zipping file');
            const zip = zlib.createGzip();
            srcStream.pipe(zip).pipe(destStream);
            res.download('.//media-uploads/' + fn, dest, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File downloaded');
                }
            });
        });
        
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};