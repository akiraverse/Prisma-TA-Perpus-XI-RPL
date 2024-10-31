// id_peminjaman Int @id @default(autoincrement())
// id_petugas Int
// id_buku Int
// id_anggota Int
// tanggal_pinjam DateTime
// tanggal_kembali DateTime
// petugas Petugas @relation(fields: [id_petugas],references: [id_petugas])
// buku Buku @relation(fields: [id_buku],references: [id_buku])
// anggota Anggota @relation(fields: [id_anggota],references: [id_anggota])

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPeminjaman = async(req,res) => {
	let { id_petugas, id_buku, id_anggota } = req.body

	const [getPetugasById, getBukuById, getAnggotaById] = await Promise.all([
		prisma.petugas.findUnique({ where: {id_petugas: Number(id_petugas)} }),
		prisma.buku.findUnique({ where: {id_buku: Number(id_buku)} }),
		prisma.anggota.findUnique({ where: {id_anggota: Number(id_anggota)} })
	]);

	if (getPetugasById && getBukuById && getAnggotaById) {
		try {
			const result = await prisma.peminjaman.create({
				data: {
					tanggal_pinjam: Date(),
					tanggal_kembali: Date(),
					petugas: {
						connect: {
							id_petugas: Number(id_petugas)
						}
					},
					buku: {
						connect: {
							id_buku: Number(id_buku)
						}
					},
					anggota: {
						connect: {
							id_anggota: Number(id_anggota)
						}
					}
				}
			});

			if (result) {
				
			}
		} catch (error) {
			
		}
	}
}