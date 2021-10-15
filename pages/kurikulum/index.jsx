import Image from 'next/image'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

export default function Curriculum() {
  return (
    <>
      <Layout>
        {/* Section: Tentang Sekolah */}
        {/* <div className={styles.ProfileSectionAbout}>
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-20">
                <div className="col-span-7 text-right">
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube-nocookie.com/embed/tXL4ZRaQkFg?autoplay=1"
                    title="Profil MA Muhammadiyah 3 Jetis"
                    frameborder="0"
                  ></iframe>
                </div>
                <div className="col-span-5">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Tentang Sekolah
                  </h1>
                  <p className="text-lg">
                    Madrasah Tsanawiyah Muhammadiyah 4 Jetis Ponorogo didirikan
                    pada tanggal 01 Juli 1964 dengan izin operasional No.:
                    L.M/3/23/C/1978, yang bernaung dibawah Majelis Pendidikan
                    Dasar dan Menengah Daerah Muhammadiyah Ponorogo.
                    <br />
                    <br />
                    Madrasah Tsanawiyah Muhammadiyah 4 Jetis Ponorogo berupaya
                    melestarikan metode lama yang kami anggap baik dan mengambil
                    baru yang lebih baik. Metode ini diharapkan sesuai dengan
                    arah kebijakan pemerintah mengenai kurikulum pembelajaran
                    tahun 2013 yang telah diberlakukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Section: Visi & Misi */}
        <div className={styles.CurriculumSectionVision}>
          <div className="container mx-auto">
            <div className="py-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-28">
                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Muatan Kurikulum
                  </h1>
                  <p className="text-lg mb-8">
                    Muatan Kurikulum meliputi sejumlah mata pelajaran yang
                    keluasan dan kedalamannya merupakan beban belajar bagi
                    peserta didik pada MA Muhammadiyah 3 Jetis Selain itu,
                    materi muatan lokal dan kegiatan pengembangan diri termasuk
                    ke dalam isi kurikulum.
                  </p>

                  <h1 className="text-3xl font-black font-title mb-12">
                    Jam Pelajaran
                  </h1>
                  <p className="text-lg mb-8">
                    Pembelajaran di MA MUHAMMADIYAH 3 JETIS dilakukan Setengah
                    hari. Dalam seminggu masuk dilakukan selama 6 hari
                  </p>
                </div>

                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Fasilitas
                  </h1>
                  <p className="text-lg mb-8">
                    MA MUHAMMADIYAH 3 JETIS menyediakan listrik untuk membantu
                    kegiatan belajar mengajar . Sumber listrik yang digunakan
                    oleh MA MUHAMMADIYAH 3 JETIS berasal dari PLN. MA
                    MUHAMMADIYAH 3 JETIS menyediakan akses internet yang dapat
                    digunakan untuk mendukung kegiatan belajar mengajar menjadi
                    lebih mudah. Provider yang digunakan di MA MUHAMMADIYAH 3
                    JETIS adalah Speedy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
