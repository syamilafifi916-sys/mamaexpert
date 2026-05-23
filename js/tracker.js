// ============================================
// MAMAEXPERT — tracker.js
// Data 40 minggu kehamilan + logik interaktif
// ============================================

const weekData = [
  {
    week: 1, fruit: "🌱", fruitName: "Benih",
    length: "< 1 mm", weight: "< 1g",
    title: "Perjalanan bermula!",
    baby: "Pembuahan baru berlaku. Sel telur yang disenyawakan mula membelah diri dengan pesat untuk membentuk embrio. Ini adalah permulaan sebuah kehidupan baru yang menakjubkan.",
    mama: "Kau mungkin belum tahu kau mengandung lagi. Hormon mula berubah perlahan-lahan dalam badan kau.",
    tips: ["Mula ambil asid folik 400mcg sehari sekarang", "Elakkan alkohol dan rokok sepenuhnya", "Makan makanan berkhasiat dan seimbang", "Rehat yang cukup dan kurangkan tekanan"],
    milestones: ["🔬 Pembuahan berlaku", "🧬 DNA terbentuk", "🌀 Sel mula membelah", "💗 Kromosom lengkap"],
    mamaSymptoms: ["🤷 Belum ada gejala ketara", "🌡️ Suhu badan sedikit meningkat", "💭 Mungkin rasa penat sedikit", "🔄 Kitaran haid terhenti"],
    checklist: ["Mula ambil vitamin folat", "Buat ujian kehamilan", "Elak kafein berlebihan", "Hubungi doktor untuk temujanji pertama"]
  },
  {
    week: 2, fruit: "🫐", fruitName: "Biji Blueberry",
    length: "< 1 mm", weight: "< 1g",
    title: "Embrio mula terbentuk",
    baby: "Embrio sedang membesar dengan pantas. Sel-sel mula membahagi kepada lapisan-lapisan yang akan menjadi organ yang berbeza.",
    mama: "Ovulasi berlaku minggu ini. Badan kau sedang bersedia untuk menyambut embrio.",
    tips: ["Teruskan suplemen asid folik", "Makan makanan kaya folat seperti sayur hijau", "Elak aktiviti berat yang melampau", "Kekalkan berat badan yang sihat"],
    milestones: ["🌱 Embrio sedang berkembang", "🧫 Lapisan sel terbentuk", "💊 Folat sangat penting", "🥗 Pemakanan adalah kunci"],
    mamaSymptoms: ["🤔 Belum ada perubahan ketara", "💧 Mungkin discharge lebih dari biasa", "🌡️ Suhu badan sedikit tinggi", "😴 Rasa sedikit penat"],
    checklist: ["Teruskan vitamin folat", "Makan sayur-sayuran berdaun hijau", "Kurangkan kafein", "Mulakan jurnal kehamilan"]
  },
  {
    week: 3, fruit: "🫘", fruitName: "Biji Kacang",
    length: "~1 mm", weight: "< 1g",
    title: "Implantasi berlaku",
    baby: "Embrio mula tanam diri dalam dinding rahim. Ini dipanggil implantasi — satu proses kritikal dalam kehamilan.",
    mama: "Kau mungkin rasa sedikit kekejangan atau bleeding kecil (implantation bleeding) — ini normal.",
    tips: ["Elak ubat-ubatan tanpa nasihat doktor", "Minum air yang cukup", "Tidur sekurang-kurangnya 8 jam", "Jaga tekanan darah"],
    milestones: ["🏠 Implantasi dalam rahim", "🔗 Plasenta mula terbentuk", "❤️ Jantung mula berkembang", "🧠 Sistem saraf mula terbina"],
    mamaSymptoms: ["🩸 Mungkin ada spotting kecil", "🤢 Morning sickness mula", "😴 Sangat penat", "🍋 Sensitif bau"],
    checklist: ["Buat ujian kehamilan", "Hubungi klinik untuk temujanji", "Elak makanan mentah", "Beri tahu pasangan"]
  },
  {
    week: 4, fruit: "🌰", fruitName: "Biji Poppy",
    length: "~2 mm", weight: "< 1g",
    title: "Ujian kehamilan positif!",
    baby: "Embrio sudah boleh dikesan oleh ujian kehamilan. Lapisan-lapisan asas organ mula terbentuk termasuk sistem saraf dan jantung.",
    mama: "Haid terlambat — ini masa untuk buat ujian kehamilan! Hormon HCG meningkat dengan pesat.",
    tips: ["Buat ujian kehamilan", "Buat temujanji dengan doktor", "Mula ambil vitamin prenatal", "Elak X-ray dan pendedahan bahan kimia"],
    milestones: ["✅ HCG boleh dikesan", "🧠 Tiub neural mula terbentuk", "❤️ Jantung mula berdegup", "🫁 Paru-paru mula berkembang"],
    mamaSymptoms: ["🤢 Morning sickness", "😴 Keletihan teruk", "🍋 Sensitif bau", "💔 Payudara sakit & bengkak"],
    checklist: ["Buat ujian kehamilan", "Hubungi doktor segera", "Mula vitamin prenatal", "Elak alkohol sepenuhnya"]
  },
  {
    week: 5, fruit: "🫘", fruitName: "Biji Bijan",
    length: "~3 mm", weight: "< 1g",
    title: "Jantung mula berdegup!",
    baby: "Satu pencapaian besar — jantung baby mula berdegup! Otak, saraf tunjang, dan organ-organ utama mula terbentuk dengan pesat.",
    mama: "Morning sickness mungkin semakin kuat sekarang. Ini tanda hormon kehamilan berfungsi dengan baik.",
    tips: ["Makan dalam kuantiti kecil tapi kerap", "Halia boleh bantu kurangkan loya", "Rehat bila rasa penat", "Elak bau yang kuat"],
    milestones: ["❤️ Jantung berdegup!", "🧠 Otak & saraf berkembang", "👀 Mata mula terbentuk", "🦷 Tunas gigi muncul"],
    mamaSymptoms: ["🤢 Loya & muntah", "😴 Sangat penat", "💧 Air liur berlebihan", "🍽️ Selera makan berubah"],
    checklist: ["Temujanji doktor pertama", "Ultrasound pertama", "Ambil vitamin B6 untuk loya", "Minum air halia"]
  },
  {
    week: 6, fruit: "🫐", fruitName: "Blueberry",
    length: "~6 mm", weight: "< 1g",
    title: "Muka baby mula terbentuk",
    baby: "Ciri-ciri muka baby mula kelihatan — mata, hidung, mulut, dan telinga sedang terbentuk. Otak berkembang dengan laju.",
    mama: "Gejala kehamilan mungkin pada tahap puncak sekarang. Morning sickness, keletihan, dan payudara sakit adalah normal.",
    tips: ["Ambil gambar bump pertama kau", "Kongsikan berita gembira dengan keluarga", "Mula pakai bra yang lebih selesa", "Cuba makanan mudah seperti biskut untuk atasi loya"],
    milestones: ["👀 Mata mula terbentuk", "👂 Telinga berkembang", "👃 Hidung muncul", "🦷 Tunas gigi bawah terbentuk"],
    mamaSymptoms: ["🤢 Morning sickness puncak", "😴 Keletihan teruk", "💔 Payudara sangat sensitif", "🚽 Kerap buang air kecil"],
    checklist: ["Ultrasound untuk dengar degupan jantung", "Ambil gambar bump minggu ini", "Beli bra kehamilan", "Kongsi berita dengan keluarga terdekat"]
  },
  {
    week: 7, fruit: "🫑", fruitName: "Blueberry Besar",
    length: "~13 mm", weight: "~1g",
    title: "Tangan & kaki mula tumbuh",
    baby: "Tunas tangan dan kaki mula kelihatan! Jantung sudah mempunyai 4 ruang dan berdegup lebih dari 100 kali seminit.",
    mama: "Rahim kau sudah membesar ke saiz oren. Mungkin kau rasa perut lebih penuh dari biasa.",
    tips: ["Minum susu atau ambil kalsium yang cukup", "Elak keju lembut dan makanan mentah", "Mulakan senaman ringan", "Buat rekod simptom harian"],
    milestones: ["🖐️ Tunas tangan tumbuh", "🦶 Tunas kaki muncul", "❤️ 4 ruang jantung terbentuk", "🧠 Otak berkembang pesat"],
    mamaSymptoms: ["🤢 Loya berterusan", "💨 Kembung perut", "😴 Penat melampau", "🚽 Kerap kencing"],
    checklist: ["Ambil vitamin D yang cukup", "Makan makanan kaya kalsium", "Elak ikan yang tinggi merkuri", "Cuba yoga ibu mengandung"]
  },
  {
    week: 8, fruit: "🫐", fruitName: "Raspberi",
    length: "~16 mm", weight: "~1g",
    title: "Baby mula bergerak!",
    baby: "Baby sudah boleh bergerak walaupun kau belum dapat rasa lagi. Jari-jemari tangan dan kaki mula terbentuk.",
    mama: "Rahim kau sekarang sebesar oren. Kau mungkin perlu seluar dengan pinggang yang lebih longgar.",
    tips: ["Mula fikirkan kelas antenatal", "Beli buku panduan kehamilan", "Berbincang dengan pasangan tentang perancangan", "Ambil gambar bump setiap minggu"],
    milestones: ["🖐️ Jari-jemari terbentuk", "👅 Lidah terbentuk", "🦷 8 gigi susu terbentuk", "💪 Otot mula berkembang"],
    mamaSymptoms: ["🤢 Masih loya", "💧 Constipation mungkin mula", "😴 Penat berterusan", "💔 Payudara membesar"],
    checklist: ["Daftar kelas antenatal", "Beli baju kehamilan pertama", "Mula rekod berat badan", "Plan hospital untuk bersalin"]
  },
  {
    week: 9, fruit: "🍇", fruitName: "Anggur",
    length: "~23 mm", weight: "~2g",
    title: "Dari embrio ke fetus!",
    baby: "Baby kini secara rasminya dipanggil fetus! Semua organ utama sudah terbentuk dan akan terus membesar dan matang.",
    mama: "Rahim kau sudah sebesar buah pear. Kau mungkin mula nampak sedikit perubahan pada bentuk badan.",
    tips: ["Teruskan vitamin prenatal setiap hari", "Minum 8 gelas air sehari", "Elak duduk atau berdiri terlalu lama", "Mulakan senaman kegel"],
    milestones: ["🎓 Secara rasmi jadi fetus!", "👀 Kelopak mata terbentuk", "🦷 Gigi susu berkembang", "💪 Otot makin kuat"],
    mamaSymptoms: ["🤢 Loya sedikit berkurang", "💧 Cecair vagina lebih banyak", "💊 Mungkin ada sembelit", "🌙 Insomnia mungkin mula"],
    checklist: ["Ultrasound pertama trimester", "Ambil carta berat badan", "Mula senaman kegel", "Beli bantal kehamilan"]
  },
  {
    week: 10, fruit: "🍓", fruitName: "Strawberi",
    length: "~31 mm", weight: "~4g",
    title: "Organ penting semua terbentuk!",
    baby: "Semua organ penting sudah terbentuk! Dari sekarang baby akan fokus membesar dan matang. Kuku-kuku kecil mula tumbuh.",
    mama: "Risiko keguguran berkurangan dengan ketara selepas minggu 10. Kau mungkin mula rasa lebih baik sedikit.",
    tips: ["Boleh mula kongsikan berita dengan rakan", "Cuba prenatal massage yang lembut", "Makan buah-buahan yang kaya vitamin C", "Jaga kesihatan gigi — lawatan ke dentist dibenarkan"],
    milestones: ["💅 Kuku-kuku kecil tumbuh", "🦴 Tulang mula terkeras", "👅 Bayi boleh menelan", "👁️ Mata hampir lengkap"],
    mamaSymptoms: ["😊 Loya mula berkurang", "💪 Tenaga sedikit pulih", "🤰 Perut mula kelihatan", "💔 Payudara makin besar"],
    checklist: ["Beritahu majikan tentang kehamilan", "Lawat dentist untuk checkup", "Beli cream anti-stretch mark", "Ambil gambar bump 10 minggu"]
  },
  {
    week: 11, fruit: "🍋", fruitName: "Limau Nipis",
    length: "~41 mm", weight: "~7g",
    title: "Baby mula menguap!",
    baby: "Baby sudah boleh menguap dan stretching! Jantina baby sudah ditentukan tapi masih terlalu awal untuk nampak dalam ultrasound.",
    mama: "Trimester pertama hampir tamat! Kebanyakan ibu mula rasa lebih baik dalam beberapa minggu lagi.",
    tips: ["Mula fikirkan nama bayi", "Beli baju kehamilan yang selesa", "Teruskan senaman ringan", "Buat ujian darah jika belum"],
    milestones: ["😮 Baby menguap!", "🤸 Baby stretch", "🔬 Jantina ditentukan", "🦴 100 tulang terbentuk"],
    mamaSymptoms: ["😊 Loya makin berkurang", "💧 Mungkin ada pening", "🌙 Tidur makin susah", "🚽 Kerap kencing berterusan"],
    checklist: ["Buat ujian darah lengkap", "Ambil gambar bump", "Mula fikirkan nama bayi", "Daftar kelas penyusuan"]
  },
  {
    week: 12, fruit: "🍋", fruitName: "Limau",
    length: "~54 mm", weight: "~14g",
    title: "Akhir Trimester Pertama!",
    baby: "Pencapaian besar! Trimester pertama hampir tamat. Baby sudah mempunyai semua organ asas dan akan fokus membesar sekarang.",
    mama: "Kebanyakan ibu mula kongsikan berita dengan orang ramai sekarang kerana risiko keguguran sudah sangat berkurang.",
    tips: ["Kongsi berita gembira dengan semua orang!", "Ambil gambar bump 12 minggu", "Beli baju kehamilan yang lebih banyak", "Plan babymoon kalau nak"],
    milestones: ["🎉 Tamat trimester 1!", "🧠 Otak berkembang pesat", "👶 Refleks mula terbentuk", "💅 Kuku sempurna"],
    mamaSymptoms: ["😊 Loya mula hilang", "💪 Tenaga meningkat", "🤰 Perut mula kelihatan jelas", "✨ Kulit mula bersinar"],
    checklist: ["Kongsi berita dengan semua", "Ultrasound 12 minggu", "Beli baju kehamilan", "Plan percutian trimester 2"]
  },
  {
    week: 13, fruit: "🫛", fruitName: "Kacang Pea",
    length: "~74 mm", weight: "~23g",
    title: "Selamat datang Trimester 2!",
    baby: "Trimester kedua bermula! Baby kini mempunyai jari-jemari yang boleh dibezakan dan cap jari yang unik sudah terbentuk.",
    mama: "Trimester kedua sering dipanggil 'honeymoon trimester' — loya berkurang dan tenaga kembali!",
    tips: ["Nikmati peningkatan tenaga kau!", "Mula beli barang keperluan bayi", "Buat kajian tentang penyusuan", "Daftar kelas antenatal kalau belum"],
    milestones: ["👆 Cap jari unik terbentuk!", "🖐️ Jari-jemari lengkap", "💪 Otot makin kuat", "🦴 Tulang makin keras"],
    mamaSymptoms: ["💪 Tenaga kembali!", "😊 Mood lebih baik", "🤰 Perut jelas membesar", "💛 Kulit bersinar"],
    checklist: ["Mula beli barang bayi", "Daftar kelas antenatal", "Buat kajian tentang penyusuan", "Plan babymoon"]
  },
  {
    week: 14, fruit: "🍋", fruitName: "Lemon",
    length: "~87 mm", weight: "~43g",
    title: "Baby boleh mengerutkan muka!",
    baby: "Baby sudah pandai bermain dengan ekspresi muka — mengerutkan dahi, tersenyum, dan mengunyah. Rambut halus (lanugo) mula tumbuh.",
    mama: "Kau mungkin mula rasa lebih bertenaga dan mood lebih baik. Selera makan mungkin meningkat.",
    tips: ["Makan protein yang cukup", "Mula plan bilik bayi", "Beli buku nama bayi", "Teruskan senaman prenatal"],
    milestones: ["😊 Ekspresi muka terbentuk", "💇 Rambut halus tumbuh", "🦴 Tulang makin keras", "👂 Telinga hampir sempurna"],
    mamaSymptoms: ["🍽️ Selera makan meningkat", "💪 Tenaga lebih baik", "😊 Mood positif", "🤰 Bump makin ketara"],
    checklist: ["Plan dan dekorasi bilik bayi", "Beli pillow kehamilan", "Ambil gambar bump", "Berbincang nama bayi"]
  },
  {
    week: 15, fruit: "🍎", fruitName: "Epal",
    length: "~10 cm", weight: "~70g",
    title: "Baby boleh bernafas!",
    baby: "Baby mula berlatih bernafas dengan menghirup cecair amniotik. Ini penting untuk perkembangan paru-paru yang sihat.",
    mama: "Kau mungkin mula rasa pergerakan baby yang pertama — rasa seperti 'flutter' atau rama-rama dalam perut.",
    tips: ["Cuba yoga prenatal", "Mula bercakap dengan baby", "Dengarkan muzik atau quran untuk baby", "Makan makanan tinggi omega-3"],
    milestones: ["🫁 Berlatih bernafas", "👂 Boleh dengar bunyi samar", "💪 Tangan & kaki lebih kuat", "🦴 Tulang terus mengeras"],
    mamaSymptoms: ["🦋 Rasa flutter dalam perut", "🤰 Bump ketara", "💛 Kulit bersinar", "💔 Payudara makin besar"],
    checklist: ["Mula yoga prenatal", "Bercakap dengan baby setiap hari", "Dengarkan quran/muzik untuk baby", "Beli buku cerita untuk baby"]
  },
  {
    week: 16, fruit: "🥑", fruitName: "Avokado",
    length: "~11.6 cm", weight: "~100g",
    title: "Baby mendengar suara kau!",
    baby: "Telinga baby sudah cukup berkembang untuk mendengar suara kau! Ajaklah baby bercakap — dia sudah boleh mendengar.",
    mama: "Ujian darah trimester kedua mungkin dijadualkan minggu ini. Pergerakan baby mungkin lebih ketara.",
    tips: ["Ajaklah baby bercakap setiap hari", "Nyanyikan lagu untuk baby", "Baca quran dengan kuat untuk baby", "Mula rekod pergerakan baby"],
    milestones: ["👂 Boleh dengar suara!", "💪 Lengan & kaki lebih panjang", "🎵 Respons kepada bunyi", "👁️ Mata sensitif cahaya"],
    mamaSymptoms: ["🦋 Pergerakan lebih ketara", "💪 Tenaga baik", "🤰 Bump membesar", "💅 Kuku & rambut tumbuh pesat"],
    checklist: ["Ujian darah trimester 2", "Rekod pergerakan baby", "Ajar partner bercakap dengan baby", "Ambil gambar bump 16 minggu"]
  },
  {
    week: 17, fruit: "🍐", fruitName: "Pear",
    length: "~13 cm", weight: "~140g",
    title: "Lemak mula terbentuk!",
    baby: "Lemak mula terbentuk di bawah kulit baby untuk kekalkan suhu badan. Tulang menjadi makin keras.",
    mama: "Pusat graviti kau berubah. Kau mungkin rasa sakit belakang yang ringan — ini normal.",
    tips: ["Beli kasut yang selesa tanpa tumit", "Cuba buaian atau urut belakang", "Tidur miring ke kiri untuk peredaran darah lebih baik", "Latihan senaman bahu dan belakang"],
    milestones: ["🔥 Lemak badan terbentuk", "🦴 Tulang terus mengeras", "👂 Pendengaran makin baik", "💤 Baby ada waktu tidur"],
    mamaSymptoms: ["🦵 Sakit belakang mula", "🚽 Kerap kencing", "💤 Susah tidur", "🤰 Pusat graviti berubah"],
    checklist: ["Beli kasut selesa", "Mula tidur miring ke kiri", "Beli bantal sokongan belakang", "Exercise ringan untuk belakang"]
  },
  {
    week: 18, fruit: "🫑", fruitName: "Cili Capsicum",
    length: "~14.2 cm", weight: "~190g",
    title: "Ultrasound morfologi minggu ini!",
    baby: "Minggu yang penting — ultrasound morfologi boleh mendedahkan jantina baby dan memastikan perkembangan organ yang normal.",
    mama: "Kau mungkin rasa tendangan baby yang lebih kuat sekarang. Ini sangat teruja!",
    tips: ["Buat temujanji ultrasound morfologi", "Mula pilih nama berdasarkan jantina", "Plan bilik bayi mengikut jantina kalau nak", "Capture momen istimewa ini"],
    milestones: ["👶 Jantina boleh dilihat!", "👁️ Mata boleh bergerak", "💪 Gerakan aktif", "🎵 Respons kepada muzik"],
    mamaSymptoms: ["🦵 Tendangan makin kuat", "💆 Pening mungkin berlaku", "🤰 Bump besar", "🦶 Kaki mungkin bengkak sedikit"],
    checklist: ["Ultrasound morfologi", "Umumkan jantina kalau nak", "Plan tema bilik bayi", "Beli barang bayi mengikut jantina"]
  },
  {
    week: 19, fruit: "🥭", fruitName: "Mangga",
    length: "~15.3 cm", weight: "~240g",
    title: "Otak berkembang dengan pesat!",
    baby: "Otak baby sedang berkembang dengan sangat pesat — juta-juta neuron sedang terbentuk setiap minit. Deria sentuh, rasa, dan bau mula berkembang.",
    mama: "Kau mungkin rasa sakit ligamen yang tajam apabila bergerak cepat — ini normal dan dipanggil 'round ligament pain'.",
    tips: ["Elak bangun cepat dari duduk atau berbaring", "Mula buat perancangan cuti bersalin", "Baca buku atau dengarkan cerita untuk baby", "Mula cari kelas penyusuan"],
    milestones: ["🧠 Berjuta neuron terbentuk", "👅 Deria rasa berkembang", "👃 Deria bau muncul", "🤚 Deria sentuh aktif"],
    mamaSymptoms: ["⚡ Sakit ligamen apabila gerak", "💤 Susah cari posisi tidur", "🦶 Kaki bengkak", "💔 Sakit tulang rusuk"],
    checklist: ["Plan cuti bersalin", "Daftar kelas penyusuan", "Beli bra penyusuan", "Buat kajian tentang birth plan"]
  },
  {
    week: 20, fruit: "🌽", fruitName: "Jagung",
    length: "~25 cm", weight: "~300g",
    title: "Separuh perjalanan!",
    baby: "Tahniah! Kau sudah separuh perjalanan! Baby kini boleh mendengar dengan jelas dan mungkin bergerak apabila mendengar suara kau.",
    mama: "Ultrasound anomali scan biasanya dibuat minggu ini untuk memastikan semua organ baby normal.",
    tips: ["Ajaklah baby bercakap setiap hari", "Rakam video bump untuk kenangan", "Mula buat birth plan", "Beli car seat untuk baby"],
    milestones: ["🎉 50% perjalanan!", "👂 Pendengaran penuh", "💪 Gerakan kuat dan kerap", "🌡️ Baby rasa temperature"],
    mamaSymptoms: ["🦋 Tendangan jelas terasa", "💪 Tenaga baik", "🤰 Bump besar dan cantik", "✨ Kulit bersinar"],
    checklist: ["Anomaly scan ultrasound", "Rakam video bump", "Beli car seat", "Mula tulis birth plan"]
  },
  {
    week: 21, fruit: "🍌", fruitName: "Pisang",
    length: "~26.7 cm", weight: "~360g",
    title: "Baby boleh menelan!",
    baby: "Baby menelan cecair amniotik setiap hari — ini cara baby belajar fungsi sistem penghadaman. Kening dan bulu mata sudah terbentuk.",
    mama: "Kau mungkin rasa heartburn yang makin kerap sekarang kerana rahim menekan perut.",
    tips: ["Elak makan banyak sekaligus — makan sedikit tapi kerap", "Jangan berbaring selepas makan", "Cuba bantal tambahan untuk tidur", "Mulakan latihan pernafasan"],
    milestones: ["🍽️ Baby menelan cecair amnio", "👁️ Kening & bulu mata terbentuk", "🦴 Tulang makin padat", "💪 Gerakan aktif"],
    mamaSymptoms: ["🔥 Heartburn kerap", "🤰 Perut rasa penuh", "🦵 Kram kaki mungkin mula", "💤 Susah tidur"],
    checklist: ["Makan dalam kuantiti kecil", "Beli antasid yang selamat untuk ibu hamil", "Latihan pernafasan", "Ambil gambar bump"]
  },
  {
    week: 22, fruit: "🌽", fruitName: "Jagung Besar",
    length: "~27.8 cm", weight: "~430g",
    title: "Baby nampak seperti newborn!",
    baby: "Baby sudah mula kelihatan seperti bayi yang akan lahir, cuma lebih kecil dan kurus. Fitur muka sudah jelas terbentuk.",
    mama: "Kau mungkin rasa Braxton Hicks kontraksi — ini latihan untuk persediaan bersalin. Normal dan tidak merbahaya.",
    tips: ["Jangan panik bila rasa Braxton Hicks", "Minum air yang cukup untuk kurangkan Braxton Hicks", "Mula buat senarai nama bayi", "Rancang baby shower"],
    milestones: ["👶 Nampak seperti newborn", "👄 Bibir terbentuk sempurna", "🤲 Genggaman tangan kuat", "💤 Corak tidur terbentuk"],
    mamaSymptoms: ["⚡ Braxton Hicks mula", "💆 Sakit kepala mungkin", "🦶 Bengkak kaki bertambah", "🔥 Heartburn berterusan"],
    checklist: ["Plan baby shower", "Senarai nama bayi pilihan", "Beli baju newborn", "Daftar hospital untuk bersalin"]
  },
  {
    week: 23, fruit: "🍆", fruitName: "Terung",
    length: "~28.9 cm", weight: "~501g",
    title: "Baby boleh rasa sakit!",
    baby: "Baby sudah boleh merasai sakit sekarang. Dia aktif bergerak dan mungkin kau boleh nampak pergerakan dari luar perut kau!",
    mama: "Jika tendangan baby yang teratur, kau boleh mula rekod 'kick count' — sekurang-kurangnya 10 gerakan dalam 2 jam.",
    tips: ["Mula rekod kick count harian", "Kongsi momen tendangan dengan pasangan", "Beli monitor detak jantung baby untuk rumah", "Mula bincang tentang nama bayi"],
    milestones: ["🤕 Boleh rasa sakit", "👁️ Mata mula terbuka sikit", "👂 Respons kepada bunyi luar", "💪 Gerakan sangat aktif"],
    mamaSymptoms: ["🤰 Perut rasa berat", "🦵 Kram kaki kerap", "💤 Insomnia bertambah", "🚽 Kerap ke tandas"],
    checklist: ["Mula rekod kick count", "Ajak partner rasa tendangan", "Beli nursing pillow", "Semak insurans hospital"]
  },
  {
    week: 24, fruit: "🌽", fruitName: "Jagung Manis",
    length: "~30 cm", weight: "~600g",
    title: "Milestone viability!",
    baby: "Ini minggu penting — baby sudah mencapai 'viability' bermakna ada peluang untuk survive jika lahir awal. Paru-paru mula menghasilkan surfactant.",
    mama: "Ujian diabetes gestasi (GDM) biasanya dilakukan minggu 24-28. Pastikan kau buat ujian ini.",
    tips: ["Buat ujian GDM sekarang", "Elak gula berlebihan", "Mula kelas antenatal kalau belum", "Rancang hospital bag"],
    milestones: ["🏆 Milestone viability!", "🫁 Paru-paru menghasilkan surfactant", "👁️ Mata makin berkembang", "🦴 Tulang makin kuat"],
    mamaSymptoms: ["🔥 Heartburn teruk", "🦵 Sakit belakang meningkat", "💤 Sukar tidur selesa", "🦶 Bengkak kaki"],
    checklist: ["Ujian GDM (diabetes gestasi)", "Mula kelas antenatal", "Rancang hospital bag", "Beli barang keperluan newborn"]
  },
  {
    week: 25, fruit: "🥦", fruitName: "Brokoli",
    length: "~34.6 cm", weight: "~660g",
    title: "Baby pandai menendang!",
    baby: "Baby semakin kuat dan tendangannya makin kuat boleh dirasai. Otak berkembang dengan kompleks dan saraf makin matang.",
    mama: "Kau mungkin rasa sakit pada bahagian pelvik — ini kerana ligamen meregang untuk bersedia menghadapi bersalin.",
    tips: ["Cuba berenang untuk kurangkan sakit pelvik", "Pakai sokongan perut (belly band)", "Elak berdiri atau duduk terlalu lama", "Buat jurnal kehamilan"],
    milestones: ["💪 Tendangan sangat kuat", "🧠 Otak kompleks berkembang", "👂 Pendengaran hampir sempurna", "💅 Kuku sempurna"],
    mamaSymptoms: ["⚡ Sakit pelvik", "🤰 Perut sangat besar", "😮‍💨 Sesak nafas sedikit", "🔥 Heartburn teruk"],
    checklist: ["Beli belly band", "Cuba berenang prenatal", "Siapkan bilik bayi", "Buat senarai hospital bag"]
  },
  {
    week: 26, fruit: "🥬", fruitName: "Salad Butter",
    length: "~35.6 cm", weight: "~760g",
    title: "Mata baby terbuka!",
    baby: "Mata baby mula terbuka untuk pertama kali! Dia boleh membezakan antara terang dan gelap.",
    mama: "Hampir tamat trimester kedua! Kau mungkin rasa kaki dan pergelangan kaki bengkak terutama pada waktu petang.",
    tips: ["Angkat kaki apabila duduk atau berbaring", "Kurangkan pengambilan garam", "Minum air yang cukup walaupun kerap kencing", "Buat ujian hemoglobin"],
    milestones: ["👁️ Mata terbuka pertama kali!", "🌟 Boleh kesan cahaya", "🫁 Paru-paru makin matang", "🤸 Sangat aktif bergerak"],
    mamaSymptoms: ["🦶 Kaki bengkak teruk", "💤 Insomnia", "😮‍💨 Sesak nafas", "🔥 Heartburn"],
    checklist: ["Angkat kaki selalu", "Kurangkan garam", "Beli stokin compression", "Selesaikan bilik bayi"]
  },
  {
    week: 27, fruit: "🥦", fruitName: "Kembang Kol",
    length: "~36.6 cm", weight: "~875g",
    title: "Selamat datang Trimester 3!",
    baby: "Trimester terakhir bermula! Baby sangat aktif dan boleh merasai cahaya yang terang. Otak berkembang dengan pesat.",
    mama: "Kau hanya ada lebih kurang 13 minggu lagi! Mula buat persediaan akhir untuk menyambut baby.",
    tips: ["Buat persediaan akhir untuk hospital bag", "Siapkan plan penjagaan untuk anak-anak lain", "Buat kuliah penyusuan", "Berbincang dengan doktor tentang birth plan"],
    milestones: ["🎉 Trimester 3 bermula!", "🧠 Otak berkembang drastik", "👁️ Sensitif cahaya", "💪 Gerakan sangat aktif"],
    mamaSymptoms: ["😮‍💨 Sesak nafas bertambah", "🔥 Heartburn kronik", "💤 Sangat susah tidur", "🦵 Sakit belakang teruk"],
    checklist: ["Siapkan hospital bag", "Buat birth plan", "Daftar kelas penyusuan", "Plan penjagaan anak-anak lain"]
  },
  {
    week: 28, fruit: "🍆", fruitName: "Terung Besar",
    length: "~37.6 cm", weight: "~1 kg",
    title: "Baby cecah 1kg!",
    baby: "Baby sudah mencecah 1 kilogram! Ini pencapaian yang besar. Paru-paru makin matang dan baby sudah boleh menangis.",
    mama: "Ujian Rhesus (Rh factor) dan antibodi biasanya dilakukan minggu ini. Doktor mungkin beri suntikan jika perlu.",
    tips: ["Buat ujian darah Rh factor", "Mula rekod tendangan dengan lebih serius", "Tidur dengan bantal antara lutut", "Mula belajar teknik pernafasan untuk bersalin"],
    milestones: ["⚖️ Baby cecah 1kg!", "😭 Baby boleh menangis", "🫁 Paru-paru hampir matang", "🧠 Aktiviti otak meningkat"],
    mamaSymptoms: ["💤 Tidur sangat susah", "🦵 Kram kaki kerap malam", "😮‍💨 Sesak nafas teruk", "🚽 Kerap ke tandas"],
    checklist: ["Ujian darah Rh factor", "Rekod kick count harian", "Belajar teknik pernafasan", "Siapkan hospital bag"]
  },
  {
    week: 29, fruit: "🥥", fruitName: "Kelapa",
    length: "~38.6 cm", weight: "~1.15 kg",
    title: "Otak baby berkembang pesat!",
    baby: "Otak baby berkembang dengan sangat pesat membentuk lipatan-lipatan yang kompleks. Baby boleh mengawal suhu badannya sendiri.",
    mama: "Kau mungkin rasa kesukaran bernafas kerana rahim menekan diafragma. Ini akan lega setelah baby turun ke pelvik.",
    tips: ["Duduk tegak untuk bantu pernafasan", "Elak senaman yang terlalu berat", "Mula buat list barang untuk hospital bag", "Berbincang dengan doktor tentang labour signs"],
    milestones: ["🧠 Lipatan otak terbentuk", "🌡️ Kawalan suhu badan", "💪 Otot makin kuat", "🦴 Tulang sangat padat"],
    mamaSymptoms: ["😮‍💨 Sesak nafas", "🔥 Heartburn teruk", "🤰 Perut sangat besar dan berat", "🚶 Susah berjalan"],
    checklist: ["Siapkan hospital bag sepenuhnya", "Buat list nombor kecemasan", "Plan laluan ke hospital", "Berbincang labour signs dengan doktor"]
  },
  {
    week: 30, fruit: "🎃", fruitName: "Labu Kecil",
    length: "~39.9 cm", weight: "~1.3 kg",
    title: "10 minggu lagi!",
    baby: "Hanya 10 minggu lagi! Baby menghabiskan masa dengan tidur, bergerak, dan berlatih bernafas. Rambut di kepala makin lebat.",
    mama: "Doktor mungkin mula periksa posisi baby. Posisi kepala ke bawah adalah yang terbaik untuk bersalin normal.",
    tips: ["Tanya doktor tentang posisi baby", "Cuba posisi all-fours untuk bantu baby turn", "Mula dengar podcast atau baca tentang bersalin", "Rehat lebih banyak"],
    milestones: ["💇 Rambut lebat tumbuh", "🏋️ Baby makin berat", "💤 Tidur panjang", "🫁 Latihan nafas aktif"],
    mamaSymptoms: ["🤰 Perut sangat besar", "🦵 Sangat penat berjalan", "💤 Tidur sangat susah", "🚽 Kerap ke tandas"],
    checklist: ["Semak posisi baby dengan doktor", "Siapkan hospital bag", "Plan cuti bersalin", "Rehat sebanyak mungkin"]
  },
  {
    week: 31, fruit: "🥥", fruitName: "Kelapa Muda",
    length: "~41.1 cm", weight: "~1.5 kg",
    title: "Baby boleh putar kepala!",
    baby: "Baby sudah boleh memutar kepalanya dari sisi ke sisi. Semua deria sudah aktif berfungsi — rasa, bau, dengar, dan lihat.",
    mama: "Kau mungkin rasa rasa Braxton Hicks yang lebih kerap dan kuat. Ini persiapan badan untuk bersalin.",
    tips: ["Kenal pasti tanda-tanda bersalin sebenar vs Braxton Hicks", "Pastikan nombor hospital dalam telefon", "Berbincang dengan pasangan tentang perancangan hari bersalin", "Rehat sebanyak yang boleh"],
    milestones: ["🔄 Boleh putar kepala", "👃 Deria bau aktif", "👁️ Penglihatan berkembang", "🧠 Memori jangka pendek terbentuk"],
    mamaSymptoms: ["⚡ Braxton Hicks kuat", "😮‍💨 Sesak nafas teruk", "🦶 Bengkak kaki berterusan", "💤 Insomnia teruk"],
    checklist: ["Hafal tanda bersalin sebenar", "Simpan nombor hospital", "Berbincang plan hari bersalin", "Siapkan rumah untuk bayi"]
  },
  {
    week: 32, fruit: "🎃", fruitName: "Labu",
    length: "~42.4 cm", weight: "~1.7 kg",
    title: "Baby dalam posisi bersalin!",
    baby: "Kebanyakan baby sudah dalam posisi kepala ke bawah bersedia untuk bersalin. Ruang dalam rahim makin sempit.",
    mama: "Kau mungkin rasa baby bergerak lebih sedikit — bukan sebab baby kurang aktif, tapi sebab ruang dah sempit. Namun rekod tetap penting.",
    tips: ["Terus rekod kick count walaupun pergerakan terasa berbeza", "Buat packing hospital bag sekarang", "Ajak pasangan ke kelas antenatal", "Tidur miring ke kiri"],
    milestones: ["👇 Posisi kepala ke bawah", "🦴 Tulang kepala masih lembut", "🫁 Paru-paru hampir siap", "💅 Kuku panjang"],
    mamaSymptoms: ["🔥 Heartburn sangat teruk", "💤 Tidur dengan banyak bantal", "🦵 Sakit pelvik teruk", "🚽 Sangat kerap ke tandas"],
    checklist: ["Pack hospital bag sekarang!", "Cuci baju baby", "Pasang car seat", "Semak insurans hospital"]
  },
  {
    week: 33, fruit: "🍍", fruitName: "Nanas",
    length: "~43.7 cm", weight: "~1.9 kg",
    title: "Tulang baby makin keras!",
    baby: "Tulang baby makin keras kecuali tulang kepala yang kekal fleksibel untuk membantu proses bersalin. Baby sedang simpan lemak dengan aktif.",
    mama: "Kau mungkin berjalan dengan cara yang berbeza — ini dipanggil 'pregnancy waddle' dan normal sepenuhnya!",
    tips: ["Beli slip-on shoes yang mudah pakai", "Minta bantuan untuk kerja yang membongkok", "Cuba prenatal massage", "Berehat dengan kaki dinaikkan"],
    milestones: ["🦴 Tulang makin keras", "🔥 Simpan lebih lemak", "💪 Sistem imun berkembang", "👶 Nampak macam newborn"],
    mamaSymptoms: ["🚶 Cara jalan berubah", "⚡ Sakit pelvik teruk", "💤 Sangat penat", "😮‍💨 Sesak nafas"],
    checklist: ["Beli slip-on shoes", "Prenatal massage", "Kemas rumah untuk bayi", "Rehat banyak-banyak"]
  },
  {
    week: 34, fruit: "🍉", fruitName: "Tembikai Kecil",
    length: "~45 cm", weight: "~2.15 kg",
    title: "Baby hampir siap!",
    baby: "Paru-paru baby hampir matang sepenuhnya. Sistem saraf pusat terus berkembang. Baby tidur 90% masa dalam rahim!",
    mama: "Kau mungkin rasa 'lightning crotch' — tembakan saraf yang tajam di kawasan pelvik. Ini kerana kepala baby menekan saraf.",
    tips: ["Elak ketawa, bersin atau batuk kuat-kuat (akan rasa sakit)", "Pakai pad kalau ada kebocoran air kecil", "Rehat sebanyak yang boleh", "Siapkan segalanya sekarang kalau baby datang awal"],
    milestones: ["🫁 Paru-paru hampir matang!", "💤 Tidur 90% masa", "🧠 Otak berkembang pesat", "💊 Sistem imun aktif"],
    mamaSymptoms: ["⚡ Lightning crotch", "🚽 Mungkin ada kebocoran", "💤 Keletihan ekstrem", "🔥 Heartburn paling teruk"],
    checklist: ["Hospital bag mesti siap!", "Simpan nombor doktor di speed dial", "Plan siapa hantar ke hospital", "Rehat — simpan tenaga untuk bersalin"]
  },
  {
    week: 35, fruit: "🍈", fruitName: "Honeydew",
    length: "~46.2 cm", weight: "~2.4 kg",
    title: "Baby hampir full term!",
    baby: "Baby hampir full term! Rambut lanugo yang halus mula luruh dan baby menelannya bersama cecair amniotik.",
    mama: "Lawatan ke doktor mungkin lebih kerap sekarang — setiap minggu atau dua minggu sekali. Semak jadual dengan doktor kau.",
    tips: ["Pergi checkup lebih kerap", "Kenali tanda-tanda bersalin awal", "Tidur bila ada peluang", "Minum air dan makan dengan baik"],
    milestones: ["💇 Lanugo luruh", "🏋️ Berat bertambah cepat", "🫁 Paru-paru hampir siap 100%", "🤲 Genggaman sangat kuat"],
    mamaSymptoms: ["🔽 Baby mungkin mula turun", "😮‍💨 Pernafasan lebih senang", "🚽 Lebih kerap ke tandas", "⚡ Sakit pelvik makin teruk"],
    checklist: ["Checkup lebih kerap", "Hafal tanda-tanda bersalin", "Cukupkan tidur", "Siap segalanya di rumah"]
  },
  {
    week: 36, fruit: "🥬", fruitName: "Kobis Besar",
    length: "~47.4 cm", weight: "~2.6 kg",
    title: "Late preterm — hampir full term!",
    baby: "Baby sudah 'late preterm'. Kebanyakan organ sudah matang. Baby sedang simpan lemak dan mempersiapkan diri untuk dunia luar.",
    mama: "Kau mungkin rasa baby 'drop' atau turun ke pelvik — ini dipanggil 'lightening'. Kau boleh bernafas lebih senang!",
    tips: ["Berehat sebanyak yang boleh sebelum bersalin", "Pastikan hospital bag dah dalam kereta", "Semak plan untuk hari bersalin dengan semua orang yang terlibat", "Makan kurma — ada kajian yang menunjukkan ia bantu bersalin"],
    milestones: ["⬇️ Baby turun ke pelvik", "🫁 Paru-paru matang", "🏋️ Simpan lemak terakhir", "👶 Hampir sedia!"],
    mamaSymptoms: ["😮‍💨 Pernafasan lebih lega", "🚽 Tekanan pada pundi kencing", "⚡ Sakit pelvik teruk", "🔽 Rasa berat di bawah"],
    checklist: ["Hospital bag dalam kereta!", "Makan kurma setiap hari", "Semak plan bersalin dengan semua", "Inform majikan bila nak cuti"]
  },
  {
    week: 37, fruit: "🥬", fruitName: "Swiss Chard",
    length: "~48.6 cm", weight: "~2.9 kg",
    title: "Full term! Baby boleh lahir bila-bila masa!",
    baby: "Tahniah! Baby kau sudah full term! Dia sudah sedia untuk dilahirkan pada bila-bila masa. Organ semua matang.",
    mama: "Kau mungkin mengalami 'nesting instinct' yang kuat — rasa nak bersihkan dan kemas rumah. Ikut naluri tu tapi jangan penat!",
    tips: ["Kenali tanda-tanda bersalin dengan tepat", "Pergi hospital jika ada darah, air ketuban pecah, atau kontraksi 5 minit sekali", "Rehat sebanyak yang boleh", "Minta orang lain tolong kerja rumah"],
    milestones: ["🎉 FULL TERM!", "🫁 Semua organ matang", "💪 Sangat kuat dan sihat", "👶 Sedia untuk dunia!"],
    mamaSymptoms: ["🏠 Nesting instinct kuat", "⚡ Kontraksi mungkin kerap", "🚽 Selalu ke tandas", "🦆 Cara jalan makin pelik"],
    checklist: ["KENALI TANDA BERSALIN!", "Hospital bag sedia di pintu", "Isi minyak kereta", "Hubungi orang penting tentang EDD"]
  },
  {
    week: 38, fruit: "🎃", fruitName: "Pumpkin",
    length: "~49.8 cm", weight: "~3.1 kg",
    title: "Hampir masa!",
    baby: "Baby terus menyimpan lemak dan menambah berat. Kepala sudah turun ke pelvik dan bersedia untuk lahir.",
    mama: "Serviks mungkin mula meregang dan menipis (effacement) dan membuka (dilation). Doktor akan periksa pada checkup.",
    tips: ["Pergi checkup terakhir", "Tanya doktor tentang status serviks", "Simpan tenaga untuk bersalin", "Makan kurma — 6 biji sehari"],
    milestones: ["⬇️ Kepala turun sepenuhnya", "🏋️ Berat baby hampir sempurna", "🫁 Paru-paru 100% matang", "🤱 Sedia untuk menyusu!"],
    mamaSymptoms: ["⚡ Kontraksi Braxton Hicks kerap", "🔵 Mucus plug mungkin keluar", "🚽 Tekanan kuat di bawah", "😴 Sangat penat"],
    checklist: ["Checkup doktor", "Makan kurma", "Rehat maksimum", "Tunggu dengan sabar 💗"]
  },
  {
    week: 39, fruit: "🍉", fruitName: "Tembikai",
    length: "~50.7 cm", weight: "~3.3 kg",
    title: "Mana-mana hari sekarang!",
    baby: "Baby sudah 100% bersedia! Dia sedang menunggu masa yang tepat untuk keluar. Berat dan panjang hampir sama dengan newborn.",
    mama: "Setiap hari sekarang boleh jadi hari istimewa itu! Percayai badan kau dan dengar isyarat yang dia berikan.",
    tips: ["Percayai badan kau", "Pergi hospital bila rasa perlu — jangan tunggu terlalu lama", "Minta sokongan dari orang tersayang", "Berdoa dan bertawakal"],
    milestones: ["✅ Baby 100% sedia!", "💪 Berat sempurna", "🤱 Kolostrum siap dalam payudara", "❤️ Masa hampir tiba!"],
    mamaSymptoms: ["⚡ Kontraksi mungkin bermula", "💧 Air ketuban mungkin pecah", "🔵 Mucus plug keluar", "⬇️ Tekanan sangat kuat"],
    checklist: ["Pergi hospital jika kontraksi 5-1-1", "Hubungi doktor jika ada keraguan", "Tawakal dan doa", "Simpan tenaga!"]
  },
  {
    week: 40, fruit: "🍉", fruitName: "Tembikai Masak",
    length: "~51.2 cm", weight: "~3.5 kg",
    title: "Due date! Tahniah Mama! 🎉",
    baby: "Baby sudah cukup bulan! Dia sangat sedia untuk menemui kau. Saiz baby sekarang hampir sama seperti bayi yang akan kau peluk tidak lama lagi.",
    mama: "Hari ini adalah hari yang dinantikan! Ingat, hanya 5% baby lahir tepat pada due date — jadi bersabarlah. Doktor akan pantau dengan teliti.",
    tips: ["Pergi hospital jika ada tanda bersalin", "Jangan stress jika belum bersalin — boleh sampai 42 minggu", "Terus rekod pergerakan baby", "Doktor mungkin cadangkan induksi selepas 41 minggu"],
    milestones: ["🎊 DUE DATE!", "👶 Baby sedia sepenuhnya!", "❤️ Hampir masa memeluk baby!", "🌸 Kau hampir jadi Mama!"],
    mamaSymptoms: ["🤗 Teruja dan cemas", "⚡ Mungkin kontraksi kuat", "💧 Mungkin air ketuban pecah", "💗 Setiap detik sangat berharga"],
    checklist: ["Pergi hospital bila sedia", "Hubungi semua yang penting", "Ambil gambar last bump!", "Tawakal — kau boleh buat ini! 💪"]
  }
];

// State
let currentWeek = 20;

// Get URL param
const urlParams = new URLSearchParams(window.location.search);
const paramWeek = parseInt(urlParams.get('week'));
if (paramWeek && paramWeek >= 1 && paramWeek <= 40) currentWeek = paramWeek;

// DOM refs
const weekSlider   = document.getElementById('weekSlider');
const weekDisplay  = document.getElementById('weekDisplay');
const weekMinus    = document.getElementById('weekMinus');
const weekPlus     = document.getElementById('weekPlus');
const prevWeekBtn  = document.getElementById('prevWeek');
const nextWeekBtn  = document.getElementById('nextWeek');

function updateTracker(week) {
  currentWeek = Math.min(40, Math.max(1, week));
  const d = weekData[currentWeek - 1];

  // Selector UI
  weekSlider.value  = currentWeek;
  weekDisplay.textContent = currentWeek;

  // Trimester badge
  document.querySelectorAll('.tri-badge').forEach(b => b.classList.remove('active'));
  if (currentWeek <= 12) document.getElementById('tri1').classList.add('active');
  else if (currentWeek <= 26) document.getElementById('tri2').classList.add('active');
  else document.getElementById('tri3').classList.add('active');

  // Fruit
  document.getElementById('fruitEmoji').textContent = d.fruit;
  document.getElementById('fruitName').textContent  = d.fruitName;

  // Metrics
  document.getElementById('resultWeekTag').textContent  = `Minggu ${currentWeek}`;
  document.getElementById('resultTitle').textContent    = d.title;
  document.getElementById('metricLength').textContent   = d.length;
  document.getElementById('metricWeight').textContent   = d.weight;
  document.getElementById('metricRemaining').textContent = `${40 - currentWeek} minggu`;

  // Progress
  const pct = Math.round((currentWeek / 40) * 100);
  document.getElementById('progressPct').textContent    = `${pct}%`;
  document.getElementById('progressFill').style.width   = `${pct}%`;

  // Baby dev
  document.getElementById('babyDev').textContent = d.baby;
  document.getElementById('milestoneGrid').innerHTML = d.milestones
    .map(m => `<div class="milestone-item">${m}</div>`).join('');

  // Mama
  document.getElementById('mamaDev').textContent = d.mama;
  document.getElementById('mamaGrid').innerHTML = d.mamaSymptoms
    .map(m => `<div class="milestone-item">${m}</div>`).join('');

  // Tips
  document.getElementById('tipsList').innerHTML = d.tips.map((t, i) => `
    <div class="tip-item">
      <span class="tip-num">0${i + 1}</span>
      <div>
        <strong>${t}</strong>
      </div>
    </div>`).join('');

  // Checklist
  document.getElementById('checklistItems').innerHTML = d.checklist
    .map(c => `<label class="check-item"><input type="checkbox" /> ${c}</label>`).join('');

  // Nav label
  document.getElementById('weekNavLabel').textContent = `Minggu ${currentWeek} dari 40`;

  // Prev/Next buttons
  prevWeekBtn.disabled = currentWeek <= 1;
  nextWeekBtn.disabled = currentWeek >= 40;

  // Scroll to result on mobile
  if (window.innerWidth < 768) {
    document.getElementById('trackerResult').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Events
weekSlider.addEventListener('input', () => updateTracker(parseInt(weekSlider.value)));
weekMinus.addEventListener('click', () => updateTracker(currentWeek - 1));
weekPlus.addEventListener('click',  () => updateTracker(currentWeek + 1));
prevWeekBtn.addEventListener('click', () => updateTracker(currentWeek - 1));
nextWeekBtn.addEventListener('click', () => updateTracker(currentWeek + 1));

// Init
updateTracker(currentWeek);

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    tab.classList.add('active');
    document.getElementById(`tab${tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)}`).classList.remove('hidden');
  });
});
