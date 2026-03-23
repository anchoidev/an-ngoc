import images from "../images";

// Import bride images
const brideAvatar = require("../albums/images/z7591994148425_1daf6436b1a4080eb7e1422bc2cfcaff.jpg");
const brideImage1 = require("../albums/images/z7591994159005_a1a422cd24faab6f78fb6219616ce9d0.jpg");
const brideImage2 = require("../albums/images/z7591994203577_128848d68a3326c64cc4747f53f124d3.jpg");

// Import groom images
const groomAvatar = require("../albums/images/z7591994180074_d58efc0b58147f2180fbfcd37259dfdc.jpg");
const groomImage1 = require("../albums/images/photo_1.jpg");
const groomImage2 = require("../albums/images/photo_2.jpg");

// Import album images for all sections
const img1 = require("../albums/images/z7582844788960_6b784d15a37986b84d2e47fcea7a4831.jpg");
const img2 = require("../albums/images/z7582844784339_92a5e371cbd9cee3ae2e4d85caa893e1.jpg");
const img3 = require("../albums/images/z7582844806388_02568b8739fff9e02b77612a0d703c2f.jpg");
const img4 = require("../albums/images/z7582844816941_fb5fa10c6eed1cc51bc50a6a706689d2.jpg");
const img5 = require("../albums/images/z7582844956821_a47510d83945227a21abcf357a6e353e.jpg");
const img6 = require("../albums/images/z7582844825772_43dacdc595013d88c1f28a5aa8e2f4f9.jpg");
const img7 = require("../albums/images/z7582844883121_889a51799ea8f1b9753f4123d56d6af0.jpg");
const img8 = require("../albums/images/z7582844969836_bb6ad7ca8280182b685f8bfa2b3d1132.jpg");
const img9 = require("../albums/images/z7582844931015_09c2b380a596f2a75cb0c456891b96b3.jpg");
const img10 = require("../albums/images/z7582844950578_bd35b42585e2fd2ee035b018a22cd1ce.jpg");
const img11 = require("../albums/images/z7591994146302_a522e0d384ee4fad5e651b8f5df0bde8.jpg");
const img12 = require("../albums/images/z7591994174230_1702e54999dd57003e209135bf4e6d6b.jpg");
const img13 = require("../albums/images/z7591994139258_b27cd27624ee09b122dc5db014f8e12e.jpg");
const img14 = require("../albums/images/z7591994210813_c459179dfcb61e175867ed65c065d94a.jpg");
const img15 = require("../albums/images/z7591994166639_990a609aae3dc32a2377ebeb1dbdf9b8.jpg");
const img16 = require("../albums/images/z7591994463266_506bb5f5bb9462b0d20c5b91a64fdc21.jpg");
const img19 = require("../albums/images/z7591994212991_3cbf34b193922a4dfa79d81559a534b9.jpg");
const img20 = require("../albums/images/z7591994225574_333e7cebe6e442328aae9cbf6ef991a8.jpg");
const img21 = require("../albums/images/z7591994225868_f843323dfb0ab16471458207fef02200.jpg");
const img22 = require("../albums/images/z7591994242363_4638123b5e14aa0a1fb9f91312418b34.jpg");
const img23 = require("../albums/images/z7591994252486_e792d42ff03d4397a49eece8b09ecf27.jpg");
const img24 = require("../albums/images/z7591994239061_28c2a5ce4560b43f67f345d164307276.jpg");
const img25 = require("../albums/images/z7591994133725_94d41ee776c894b429b46a55117fbcc4.jpg");
const img26 = require("../albums/images/z7582844974217_148ab95e1bdd73d0d968d28abdfaf57d.jpg");
const img27 = require("../albums/images/z7582844986561_410c0fe6d2639f80770c7a483521be7f.jpg");

const WISH_API_LINK =
  "/api/wishes"; // Next.js API route (proxy Google Sheets + Telegram)

// Helper function to get image src
const getImgSrc = (img) => img.default?.src || img;

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "11/04",
      year: "2026",
      time: "11:00",
      full: "Thứ Bảy, Ngày 11 Tháng 4 năm 2026",
    },
    address: "Số nhà 04 Đường số 2, Thôn Mỹ Cầu, Hoằng Giang, Thanh Hoá",
    street: "19°54'47.4\"N 105°46'12.9\"E",
    phone: "0394846200",
    posision: "bottom left",
  },
];

// April 2026
const daysInMonth = [
  {
    title: "mon",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "tue",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "wed",
    days: [1, 8, 15, 22, 29, 0],
  },
  {
    title: "thu",
    days: [2, 9, 16, 23, 30, 0],
  },
  {
    title: "fri",
    days: [3, 10, 17, 24, 0, 0],
  },
  {
    title: "sat",
    days: [4, 11, 18, 25, 0, 0],
  },
  {
    title: "sun",
    days: [5, 12, 19, 26, 0, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:  getImgSrc(img2),
  brideFirstLetter: "A",
  groomFirstLetter: "N",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "bride",
      name: "Lê thị minh Ngọc",
      avatar: brideAvatar.default?.src || brideAvatar,
      images: [
        brideImage1.default?.src || brideImage1,
        brideImage2.default?.src || brideImage2,
      ],
    },
    {
      title: "groom",
      name: "Lê Ngọc An",
      avatar: groomAvatar.default?.src || groomAvatar,
      images: [
        groomImage2.default?.src || groomImage2,
        groomImage1.default?.src || groomImage1,
      ],
    },
  ],
};

// invitation section

const invitationSection = {
  imgs: [getImgSrc(img7), getImgSrc(img4), getImgSrc(img6)],
  activeDay: 11,
};

// album section

const albumSection = {
  images: [
    getImgSrc(img1),
    getImgSrc(img3),
    getImgSrc(img4),
    getImgSrc(img5),
    getImgSrc(img7),
    getImgSrc(img8),
  ],
};

// guestbook section

const guestbookSection = {
  image: getImgSrc(img26),
  time: "11/04/2026",
};

// gift section

const giftSection = {
  image:
    getImgSrc(img27),
  brideBank: {
    name: "Lê thị minh Ngọc",
    bankName: "Techcombank ",
    qr: images.qr2.default.src,
    bankNumber: "11040388889999",
  },
  groomBank: {
    name: "Lê Ngọc An",
    bankName: "Techcombank",
    qr: images.qr.default.src,
    bankNumber: "19036591858018",
  },
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 11,
    month: 4,
  },
};

// final section

const finalSection = {
  images: [
    getImgSrc(img19),
    getImgSrc(img20),
    getImgSrc(img21),
    getImgSrc(img22),
  ],
};

// Album Page

const albumPage = {
  topImage: getImgSrc(img23),
  bottomImage: getImgSrc(img24),
  mainImage: getImgSrc(img1),
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: getImgSrc(img1),
      },

      {
        id: 2,
        img: getImgSrc(img4),
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: getImgSrc(img3),
      },
      {
        id: 4,
        img: getImgSrc(img5),
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: getImgSrc(img6),
      },
      {
        id: 6,
        img: getImgSrc(img7),
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: getImgSrc(img8),
      },
      {
        id: 8,
        img: getImgSrc(groomImage1),
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: getImgSrc(img9),
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: getImgSrc(img10),
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: getImgSrc(img11),
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: getImgSrc(img12),
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: getImgSrc(img13),
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: getImgSrc(img14),
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: getImgSrc(img15),
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: getImgSrc(img16),
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Báo Hỉ An - Ngọc | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/land.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho An - Ngọc",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/am11.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730394150/wedding5_1/a3.jpg",
  },
  album: {
    title: "Album của An - Ngọc`",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/final3.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  giftSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
