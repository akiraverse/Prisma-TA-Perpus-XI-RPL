import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getAllPetugas = async(req,res) =>{
    console.log("cek masuk controller")
    try {
        const result = await prisma.petugas.findMany()
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: message.error
        })
        
    }
}


export const getPetugasyId = async(req,res) =>{

    try {
        const result = await prisma.petugas.findUnique({
            where:{
                id_meja:req.params.id
            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })
        
    }
}
export const addMeja = async(req,res) =>{

    try {
        const {nomor} = req.body
        const result = await prisma.meja.create({
            data:{
                nomor_meja:nomor

            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })
        
    }
}
export const updateMeja = async(req,res) =>{

    try {
        const {nomor} = req.body
        const result = await prisma.meja.update({
            where:{
                id_meja : req.params.id
            },
            data:{
                nomor_meja:nomor
        
            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })
        
    }
}
export const deleteMeja = async(req,res) =>{

    try {
        const result = await prisma.meja.delete({
            where:{
                id_meja: req.params.id
            }
        })
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: MessageChannel.error
        })
        
    }
}