import expresss from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import anggotaRoute from '../Backend/routes/anggota.route.js';
import petugasRoute from '../Backend/routes/petugas.route.js';
import bukuRoute from '../Backend/routes/buku.route.js';
import rak from '../Backend/routes/rak.route.js';
import peminjamanRoute from '../Backend/routes/peminjaman.route.js';
import pengembalianRoute from '../Backend/routes/anggota.route.js';

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

app