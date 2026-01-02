const fs = require("fs/promises");
const path = require("path");

const artits = [
  {
    name: "Gita-Gutawa",
    lagu: [
      "Idul-Fitri",
      "Mau-Tapi-Malu",
      "Bukan-Permainan",
      "Kembang-Perawan",
      "Terimakasih-Kasihku",
    ],
  },
  {
    name: "Sheila",
    lagu: [
      "Memori-Baik",
      "Jadikan-Aku-Pacarmu",
      "Tunggu-Aku-Dijakarta",
      "Kita",
      "Dan",
    ],
  },
  {
    name: "Didi-Kempot",
    lagu: ["Suket-Teki", "Cidro", "Tatu", "Jambu-Alas", "Ambyar"],
  },
  {
    name: "Iwan-Fals",
    lagu: [
      "Siang-Seberang-Istana",
      "Tikus-Tikus-Kantor",
      "Bongkar",
      "Bento",
      "Kemesraan",
    ],
  },
  {
    name: "Noah",
    lagu: [
      "Siang-Seberang-Istana",
      "Tikus-Tikus-Kantor",
      "Bongkar",
      "Bento",
      "Kemesraan",
    ],
  },
];

const musik = async () => {
  try {
    for (let i = 0; i < artits.length; i++) {
      const artis = artits[i];
      const folderArtis = path.join("musik", artis.name);

      await fs.mkdir(folderArtis, { recursive: true });

      for (let j = 0; j < artis.lagu.length; j++) {
        const lagu = artis.lagu[j];
        const laguFile = path.join(folderArtis, lagu + ".mp3");

        await fs.writeFile(laguFile, "");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

musik();
