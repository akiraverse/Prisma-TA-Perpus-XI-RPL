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


export const getPetugasById = async(req,res) =>{
    try {
        const result = await prisma.petugas.findUnique({
            where:{
                id_petugas: Number(req.params.id)
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

export const addPetugas = async(req,res) =>{
    try {
        const {nama, password, alamat} = req.body
        const result = await prisma.petugas.create({
            data:{
                nama: nama,
                password: password,
                alamat: alamat
            }
        })
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

export const updatePetugas = async(req,res) =>{
    try {
        const {nama, password, alamat} = req.body
        const result = await prisma.petugas.update({
            where:{
                id_petugas: Number(req.params.id)
            },
            data:{
                nama: nama,
                password: password,
                alamat: alamat
        
            }
        })
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

export const deletePetugas = async(req,res) =>{
    try {
        const result = await prisma.petugas.delete({
            where:{
                id_petugas: Number(req.params.id)
            }
        })
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