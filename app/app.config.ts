export default defineAppConfig({
  title: 'PT. Hajjah Tini Berkah Jaya',
  description: 'PT Hajjah Tini Berkah Jaya menyediakan solusi inovatif dalam pengelolaan limbah makanan kering dan produksi pakan ternak berkualitas tinggi. Kami berkomitmen untuk menciptakan keberlanjutan dan efisiensi bagi bisnis Anda. Pelajari lebih lanjut tentang layanan kami dan hubungi kami untuk konsultasi gratis.',
  email: 'kontak@hajjahtiniberkahjaya.com',
  phone: '0812 9040 7297',
  social: {
    twitter: 'https://twitter.com/hajjahtiniberkahjaya',
    facebook: 'https://www.facebook.com/hajjahtiniberkahjaya',
    linkedin: 'https://www.linkedin.com/company/hajjahtiniberkahjaya',
    instagram: 'https://www.instagram.com/hajjahtiniberkahjaya',
    youtube: 'https://www.youtube.com/channel/hajjahtiniberkahjaya',
  },
  links: [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '/' },
    { label: 'Layanan', to: '/' },
    { label: 'Produk', to: '/' },
    { label: 'Galeri', to: '/' },
    { label: 'Blog', to: '/' },
    { label: 'Kontak', to: '/' },
  ],
  hero: {
    headline: 'Solusi Terbaik untuk',
    typerHeadline: ['Industri Ransum Makanan Hewan.', 'Konsentrat Makanan Hewan.', 'Perdagangan Minyak dan Lemak Nabati.', 'Perdagangan Berbagai Macam Barang.'],
    subHeadline: 'Mitra terpercaya yang memberikan produk berkualitas tinggi dan layanan unggul untuk mendukung kebutuhan bisnis Anda.',
    ctaText: 'Hubungi Kami Sekarang',
    videoPosterImageUrl: '/images/about13.jpg',
    videoUrl: '/media/movie.mp4',
  },
  service: {
    headline: 'Layanan Kami',
    subHeadline: 'Kami menyediakan berbagai layanan unggulan untuk mendukung kebutuhan industri dan perdagangan Anda.',
    services: [
      {
        icon: 'uil-constructor',
        title: 'Industri Ransum Makanan Hewan',
        description: 'Produksi ransum berkualitas tinggi untuk memenuhi kebutuhan nutrisi hewan ternak dan peliharaan Anda.',
      },
      {
        icon: 'uil-processor',
        title: 'Industri Konsentrat Makanan Hewan',
        description: 'Penyediaan konsentrat dengan formula khusus untuk meningkatkan produktivitas dan kesehatan hewan Anda.',
      },
      {
        icon: 'uil-water-glass',
        title: 'Perdagangan Minyak dan Lemak Nabati',
        description: 'Distribusi minyak dan lemak nabati berkualitas tinggi untuk mendukung berbagai kebutuhan industri.',
      },
      {
        icon: 'uil-box',
        title: 'Perdagangan Berbagai Macam Barang',
        description: 'Solusi lengkap untuk memenuhi kebutuhan barang berkualitas tinggi bagi bisnis Anda.',
      },
    ],
  },
})
