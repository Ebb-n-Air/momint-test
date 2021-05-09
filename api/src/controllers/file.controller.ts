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
        let file = uf.split(':base64,').pop();
        
        const src = "C:/S/R/MediaFiles/" + fn; // TODO: replace hardcoded src val with environment variable
        console.log(src);
        fs.writeFile(src, file, {encoding: 'base64'}, function (err) {
            const srcStream = fs.createReadStream(src);
            const dest = src + ".gz";
            const destStream = fs.createWriteStream(dest);
            const zip = zlib.createGzip();
            srcStream.pipe(zip).pipe(destStream);
            res.download(dest, dest, function (err) {
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