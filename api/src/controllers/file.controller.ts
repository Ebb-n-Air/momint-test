import { Request, Response } from "express";
import zlib = require("zlib");
import fs = require("fs");

export const uploadFile = async (req: Request, res: Response) => {
    try {
        console.log('upload hit');
        let uf = req.body.media_data;
        let fn = req.body.file_name;
        const regex = /^data:.+\/(.+);base64,(.*)$/;
        let matches = uf.match(regex);
        let ext = matches[1];
        let data = matches[2]; 
        const basePath ="/src/media-uploads/"; 
        const src = basePath + fn; // TODO: replace hardcoded src val with environment variable
        console.log(src);
        fs.writeFile(src, data, {encoding: 'base64'}, function (err) {
            const dest = "opt_" + src;
            const convert = require("media-converter");
            convert(src, dest, () => {
                res.download('.//media-uploads/' + fn, dest, function (err) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('File downloaded');
                    }    
                });
            });
        });
        
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};