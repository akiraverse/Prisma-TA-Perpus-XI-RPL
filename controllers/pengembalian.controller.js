// id_pengembalian Int @id @default(autoincrement())
// id_petugas Int
// id_buku Int
// id_anggota Int
// tanggal_pinjam DateTime
// tanggal_kembali DateTime
// denda Boolean
// petugas Petugas @relation(fields: [id_petugas],references: [id_petugas])
// buku Buku @relation(fields: [id_buku],references: [id_buku])
// anggota Anggota @relation(fields: [id_anggota],references: [id_anggota])