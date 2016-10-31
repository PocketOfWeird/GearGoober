'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockSnapshop = undefined;

var _inKit, _children;

var _hashers = require('./hashers');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tennantId = (0, _hashers.randomId)();
var userId = (0, _hashers.randomId)();
var userPassword = (0, _hashers.hash)('boogerface');
var equipmentIds = {
  canonCam: (0, _hashers.randomId)(),
  sonyCam: (0, _hashers.randomId)(),
  sonyLens: (0, _hashers.randomId)(),
  manfrottoTripod: (0, _hashers.randomId)(),
  atMic: (0, _hashers.randomId)(),
  windshield: (0, _hashers.randomId)(),
  micCable: (0, _hashers.randomId)(),
  micMount: (0, _hashers.randomId)(),
  boom: (0, _hashers.randomId)(),
  pelican: (0, _hashers.randomId)(),
  ipad: (0, _hashers.randomId)(),
  ipadCase: (0, _hashers.randomId)()
};
var kitId = (0, _hashers.randomId)();
var reservationId = (0, _hashers.randomId)();
var reservationStartDate = new Date().getTime();

var mockSnapshop = exports.mockSnapshop = {
  tennants: _defineProperty({}, tennantId, { name: 'Demo University' }),
  users: _defineProperty({}, userId, {
    id: userId, tennant: tennantId, email: 'bob@demo.edu', password: userPassword,
    is: { admin: true, leader: true, labworker: true }
  }),
  lookup: {
    users: { 'bob@demo.edu': userId },
    reservation: _defineProperty({}, tennantId, _defineProperty({}, reservationStartDate, { userId: userId, reservationId: reservationId }))
  },
  categories: _defineProperty({}, tennantId, {
    'Cameras': { 'Lenses': true, 'Camera Support': true },
    'Audio': { 'Microphones': true, 'Accessories': true, 'Cables': true },
    'Cases': {},
    'Computers': { 'Tablets': true }
  }),
  equipment: _defineProperty({}, tennantId, {
    inKit: (_inKit = {}, _defineProperty(_inKit, equipmentIds.sonyCam, {
      "name": "Sony PXW-FS7 XDCAM Super 35 Camera System",
      "category": "Cameras",
      "imageUrl": "https://www.bhphotovideo.com/images/images500x500/sony_pxw_fs7_compact_4k_xdcam_with_1082825.jpg",
      "mfg": "Sony",
      "model": "PXW-FS7",
      "price": 7999.00,
      "qty": 2,
      "inKit": true,
      "barcodes": {
        "35268": { "checkedIn": true, "damaged": false, "missing": false },
        "35318": { "checkedIn": true, "damaged": false, "missing": false }
      }
    }), _defineProperty(_inKit, equipmentIds.sonyLens, {
      "name": "Sony FE PZ 28-135mm f/4 G OSS Lens",
      "category": "Cameras",
      "subcategory": "Lenses",
      "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/sony_selp28135g_e_pz_28_135mm_f_4_1082051.jpg",
      "mfg": "Sony",
      "model": "FE PZ 28-135mm",
      "price": 2498.00,
      "qty": 2,
      "inKit": true,
      "barcodes": {
        "35269": { "checkedIn": true, "damaged": false, "missing": false },
        "35324": { "checkedIn": true, "damaged": false, "missing": false }
      }
    }), _defineProperty(_inKit, equipmentIds.manfrottoTripod, {
      "name": "Manfrotto 526,545BK Professional Video Tripod System with 526 Head",
      "category": "Cameras",
      "subcategory": "Camera Support",
      "imageUrl": "https://www.bhphotovideo.com/images/images500x500/Manfrotto_526_545BK_526_545BK_Professional_Video_Tripod_589954.jpg",
      "mfg": "Manfrotto",
      "model": "526,545BK",
      "price": 1899.00,
      "qty": 2,
      "inKit": true,
      "barcodes": {
        "35405": { "checkedIn": true, "damaged": false, "missing": false },
        "35408": { "checkedIn": true, "damaged": true, "missing": false }
      }
    }), _inKit),
    notInKit: _defineProperty({}, equipmentIds.canonCam, {
      "name": "Canon EOS 70D DSLR Camera with 18-55mm f/3.5-5.6 STM Lens",
      "category": "Cameras",
      "imageUrl": "https://www.bhphotovideo.com/images/images1000x1000/canon_8469b009_canon_eos_70d_dslr_986390.jpg",
      "mfg": "Canon",
      "model": "EOS 70D",
      "price": 1099.00,
      "qty": 6,
      "inKit": false,
      "barcodes": {
        "123456": { "checkedIn": true, "damaged": false, "missing": false },
        "123457": { "checkedIn": true, "damaged": false, "missing": false },
        "123458": { "checkedIn": true, "damaged": false, "missing": false },
        "123480": { "checkedIn": false, "damaged": false, "missing": false },
        "254140": { "checkedIn": true, "damaged": true, "missing": false },
        "254173": { checkedIn: false, damaged: false, missing: true }
      }
    })
  }),
  kits: _defineProperty({}, tennantId, _defineProperty({}, kitId, {
    name: 'Sony FS7 Kit',
    children: (_children = {}, _defineProperty(_children, equipmentIds.sonyCam, true), _defineProperty(_children, equipmentIds.sonyLens, true), _defineProperty(_children, equipmentIds.manfrottoTripod, true), _children)
  })),
  reservations: _defineProperty({}, tennantId, _defineProperty({}, userId, _defineProperty({}, reservationId, {
    start: reservationStartDate,
    user: userId,
    cart: _defineProperty({}, kitId, 1),
    late: false
  })))
};