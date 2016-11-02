import { hash, randomId } from './hashers'


const tennantId = randomId()
const userId = randomId()
const userPassword = hash('boogerface')
const equipmentIds = {
  canonCam: randomId(),
  sonyCam: randomId(),
  sonyLens: randomId(),
  manfrottoTripod: randomId(),
  atMic: randomId(),
  windshield: randomId(),
  micCable: randomId(),
  micMount: randomId(),
  boom: randomId(),
  pelican: randomId(),
  ipad: randomId(),
  ipadCase: randomId()
}
const kitId = randomId()
const reservationId = randomId()
const reservationStartDate = new Date().getTime()


export const mockSnapshop = {
  tennants: { [tennantId]: { name: 'Demo University' }},
  users: {
    [tennantId]: {
      active: {
        index: {
          [userId]: 0
        },
        data: [{
          id: userId, tennant: tennantId, email: 'bob@demo.edu', password: userPassword,
          is: { admin: true, leader: true, labworker: true },
          active: true, name: 'Bob Smith', lowerName: 'bob smith', graduationDate: null
        }]
      },
      inactive: {
        index:{},
        data:[]
      }
    }
  },
  lookup: {
    users: { 'bob@demo.edu': { id: userId, tennant: tennantId } },
    reservation: { [tennantId]: { [reservationStartDate]: { userId, reservationId } } }
  },
  categories: {
    [tennantId]: {
      'Cameras': { 'Lenses': true, 'Camera Support': true },
      'Audio': { 'Microphones': true, 'Accessories': true, 'Cables': true },
      'Cases': {},
      'Computers': { 'Tablets': true }
    }
  },
  equipment: {
    [tennantId]: {
      inKit: {
        index: {
          [equipmentIds.sonyCam]: 0,
          [equipmentIds.sonyLens]: 1,
          [equipmentIds.manfrottoTripod]: 2
        },
        barcodeIndex: {
          "35268":0, "35318":0,
          "35269":1,"35324":1,
          "35405":2,"35408":2
        },
        data: [{
          "id": equipmentIds.sonyCam,
          "name": "Sony PXW-FS7 XDCAM Super 35 Camera System",
          "lowerName": "sony pxw-fs7 xdcam super 35 camera system",
          "category": "Cameras",
          "imageUrl": "https://www.bhphotovideo.com/images/images500x500/sony_pxw_fs7_compact_4k_xdcam_with_1082825.jpg",
          "mfg": "Sony",
          "model": "PXW-FS7",
          "price": 7999.00,
          "qty": 2,
          "inKit": true,
          "barcodes": {
            "35268":{"checkedIn": true,"damaged": false,"missing": false},
            "35318":{"checkedIn": true,"damaged": false,"missing": false}
          }
        },
        {
          "id": equipmentIds.sonyLens,
          "name": "Sony FE PZ 28-135mm f/4 G OSS Lens",
          "lowerName": "sony fe pz 28-135mm f/4 g oss lens",
          "category": "Cameras",
          "subcategory": "Lenses",
          "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/sony_selp28135g_e_pz_28_135mm_f_4_1082051.jpg",
          "mfg": "Sony",
          "model": "FE PZ 28-135mm",
          "price": 2498.00,
          "qty": 2,
          "inKit": true,
          "barcodes": {
            "35269":{"checkedIn": true,"damaged": false,"missing": false},
            "35324":{"checkedIn": true,"damaged": false,"missing": false}
          }
        },
        {
          "id": equipmentIds.manfrottoTripod,
          "name": "Manfrotto 526,545BK Professional Video Tripod System with 526 Head",
          "lowerName": "manfrotto 526,545bk professional video tripod system with 526 head",
          "category": "Cameras",
          "subcategory": "Camera Support",
          "imageUrl": "https://www.bhphotovideo.com/images/images500x500/Manfrotto_526_545BK_526_545BK_Professional_Video_Tripod_589954.jpg",
          "mfg": "Manfrotto",
          "model": "526,545BK",
          "price": 1899.00,
          "qty": 2,
          "inKit": true,
          "barcodes": {
            "35405":{"checkedIn": true,"damaged": false,"missing": false},
            "35408":{"checkedIn": true,"damaged": true,"missing": false}
          }
        }
        ]
      },
      notInKit: {
        index: {
          [equipmentIds.canonCam]: 0
        },
        barcodeIndex: {
          "123456":0,"123457":0,"123458":0,"123480":0,"254140":0,"254173":0
        },
        data: [{
          "id": equipmentIds.canonCam,
          "name": "Canon EOS 70D DSLR Camera with 18-55mm f/3.5-5.6 STM Lens",
          "lowerName": "canon eos 70d dslr camera with 18-55mm f/3.5-5.6 stm lens",
          "category": "Cameras",
          "imageUrl": "https://www.bhphotovideo.com/images/images1000x1000/canon_8469b009_canon_eos_70d_dslr_986390.jpg",
          "mfg": "Canon",
          "model": "EOS 70D",
          "price": 1099.00,
          "qty": 6,
          "inKit": false,
          "barcodes": {
            "123456":{"checkedIn": true,"damaged": false,"missing": false},
            "123457":{"checkedIn": true,"damaged": false,"missing": false},
            "123458":{"checkedIn": true,"damaged": false,"missing": false},
            "123480":{"checkedIn": false,"damaged": false,"missing": false},
            "254140":{"checkedIn": true, "damaged": true, "missing": false},
            "254173":{checkedIn: false, damaged: false, missing: true}
          }
        }
      ]
      }
    }
  },
  kits: {
    [tennantId]: {
      index: {
        [kitId]: 0
      },
      data: [{
        name: 'Sony FS7 Kit',
        lowerName: 'sony fs7 kit',
        isKit: true,
        children: {
          [equipmentIds.sonyCam]: true,
          [equipmentIds.sonyLens]: true,
          [equipmentIds.manfrottoTripod]: true
        }
      }]
    }
  },
  reservations: {
    [tennantId]: {
      [userId]: {
        index:{
          [reservationId]: 0
        },
        data: [{
          id: reservationId,
          start: reservationStartDate,
          user: userId,
          cart: {
            [kitId]: 1
          },
          late: false
        }
       ]
      }
    }
  }
}
