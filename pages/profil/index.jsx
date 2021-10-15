import Image from 'next/image'
import { Layout } from '@/components/Layout'

import styles from './index.module.css'

import sectionProfilePicture from '@/public/home-1.jpg'
import sectionTwoPicture from '@/public/home-2.jpg'

export default function Profile() {
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
        <div className={styles.ProfileSectionIntro}>
          <div className="container mx-auto">
            <div className="pt-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-28">
                <div className="col-span-12">
                  <p className="text-lg">
                    Visi MA MUHAMMADIYAH 3 JETIS yang disusun mengacu pada
                    tujuan pendidikan menengah dan berorientasi pada potensi,
                    minat, perkembangan, kebutuhan dan kepentingan peserta didik
                    yaitu membentuk peserta didik yang berakhlaqul karimah,
                    menanamkan keimanan, ketaqwaan, menghasilkan tamatan yang
                    memiliki karakter, kecakapan dan ketrampilan yang kuat untuk
                    digunakan dalam mengadakan hubungan timbal balik dengan
                    lingkungan sosial, budaya dan alam sekitar serta
                    mengembangkan kemampuan lebih lanjut di Perguruan Tinggi.
                    <br />
                    <br />
                    Visi MA MUHAMMADIYAH 3 JETIS yang disusun juga berorientasi
                    pada kepentingan daerah dan nasional serta berorientasi pada
                    perkembangan ilmu pengetahuan, Teknologi dan seni serta
                    memperhatikan lingkungan sosial, dalam rangka menumbuhkan
                    peduli lingkungan, menjalin kerja sama dengan warga madrasah
                    dan lembaga lain. Selain itu Visi MA Muhammadiyah 3 Jetis
                    juga memberi inspirasi dan tantangan dalam meningkatkan
                    kualitas proses dan hasil pendidikan.
                    <br />
                    <br />
                    Sejalan dengan uraian yang tersebut di atas, maka Visi MA
                    Muhammdiyah 3 Jetis adalah sebagai berikut:
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Visi & Misi */}
        <div className={styles.ProfileSectionVision}>
          <div className="container mx-auto">
            <div className="pb-20 px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-28">
                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">Visi</h1>
                  <p className="text-lg mb-8">
                    Terbentuknya Pelajar Muslim yang "Berakhlaqul Kharimah,
                    Unggul dalam prestasi, cakap, mandiri, dan Religius"
                  </p>
                  <h1 className="text-3xl font-black font-title mb-12">Misi</h1>
                  <p className="text-lg mb-8">
                    <ol className="list-decimal list-outside pl-4">
                      <li>
                        Menanamkan keimanan dan ketaqwaan melalui pengamalan
                        ajaran Islam.
                      </li>
                      <li>Mengoptimalkan proses pembelajaran dan bimbingan.</li>
                      <li>
                        Mengembangkan bidang Ilmu Pengetahuan dan Teknologi
                        berdasarkan minat, bakat, dan potensi peserta didik.
                      </li>
                      <li>
                        Membina kemandirian peserta didik melalui kegiatan
                        pembiasaan, kewirausahaan dan pengembangan diri yang
                        terencana dan berkesinambungan.
                      </li>
                      <li>
                        Menjalin kerja sama yang harmonis antar warga sekolah,
                        dan lembaga lain yang Terkait.
                      </li>
                    </ol>
                  </p>
                </div>

                <div className="col-span-6">
                  <h1 className="text-3xl font-black font-title mb-12">
                    Tujuan Pendidikan Menengah
                  </h1>
                  <p className="text-lg mb-8">
                    Dengan berpedoman pada Visi dan Misi, Madrasah Aliyah
                    Muhammadiyah 3 Jetis Ponorogo telah merumuskan beberapa
                    tujuan antara lain:
                  </p>
                  <p className="text-lg mb-8">
                    <ol className="list-decimal list-outside pl-4">
                      <li>
                        Membentuk siswa yang berkembang secara optimal sesuai
                        dengan potensi yang dimilki dan mengembangkan budaya
                        madrasah yang Islam.
                      </li>
                      <li>
                        Mewujudkan terbentuknya Madrasah yang mandiri dan
                        berkarakter.
                      </li>
                      <li>
                        Meningkatkan dan mendayagunakan sarana prasarana
                        pendidikan yang memadai dan mengikuti perkembangan jaman
                        .
                      </li>
                      <li>
                        Tercapainya program-program Madrasah yang telah
                        direncanakan.
                      </li>
                      <li>
                        Terlaksananya kehidupan madrasah yang bermartabat.
                      </li>
                      <li>
                        Menghasilkan lulusan yang berakhlaq mulia,
                        berprestasi,percaya diri, mandiri, berwawasan global dan
                        bertaqwa kepada Allah SWT.
                      </li>
                    </ol>
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
