const demoData = [
  {
    'model': 'Tennant',
    'documents': [
      {
        "_id": "2adf3fe3a122782a3326b836",
        "name": "Demo Univeristy",
        "subdomain": "demo",
        "colorTheme": "blue"
      }
    ]
  },
  {
    'model': 'User',
    'documents': [
      {
        "tennantId": "2adf3fe3a122782a3326b836",
        "email": "bob@demo.edu",
        "firstName": "Bob",
        "lastName": "Smith",
        "imageUrl": "/app/assets/img/faces/face-8.jpg",
        "phoneNumber": "555-123-4567",
        "addressOne": "901 S. Sunshine Ave.",
        "addressTwo": "Suite 1B",
        "city": "Middleton",
        "state": "MO",
        "zip": "62892",
        "password": "password",
        "admin": true,
        "manager": true,
        "labAssistant": true
      }
    ]
  },
  {
    'model': 'Category',
    'documents': [
      {
        "_id":"7c9d52c47cb7f29bf8a14d7a",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Cameras"
      },
      {
        "_id": "d7e56ce8b80523a4bf34ca9e",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Cameras_Lenses",
        "parent": "7c9d52c47cb7f29bf8a14d7a"
      },
      {
        "_id": "a5184d2d21053787dfa93c9b",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Cameras_Camera Support",
        "parent": "7c9d52c47cb7f29bf8a14d7a"
      },
      {
        "_id":"ad2295111b90ca8d30553456",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Audio"
      },
      {
        "_id": "7f68134cc87ae6c914f000ff",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Audio_Microphones",
        "parent": "ad2295111b90ca8d30553456"
      },
      {
        "_id": "110c7f2cc9b0959d88a20f2e",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Audio_Accessories",
        "parent": "ad2295111b90ca8d30553456"
      },
      {
        "_id": "5338539a6533b0b7fc23490e",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Audio_Cables",
        "parent": "ad2295111b90ca8d30553456"
      },
      {
        "_id":"058e0edad82c20a95960cb6a",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Cases"
      },
      {
        "_id":"5b81594a5b27c100998e91c6",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Computers"
      },
      {
        "_id": "bff42b83081152e9c536f1ff",
        "tennantId": "2adf3fe3a122782a3326b836",
        "name": "Tablets",
        "parent": "5b81594a5b27c100998e91c6"
      },
    ]
  },
  {
    'model': 'Equipment',
    'documents': [
      {
          "name": "Canon EOS 70D DSLR Camera with 18-55mm f/3.5-5.6 STM Lens",
          "categoryId":"7c9d52c47cb7f29bf8a14d7a",
          "category": "Cameras",
          "imageUrl": "https://www.bhphotovideo.com/images/images1000x1000/canon_8469b009_canon_eos_70d_dslr_986390.jpg",
          "mfg": "Canon",
          "model": "EOS 70D",
          "price": 1099.00,
          "qty": 6,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "123456",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "123457",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "123458",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "123480",
                  "checkedIn": false,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "254140",
                  "checkedIn": true,
                  "damaged": true,
                  "missing": false
              },
              {
                  "barcode": "254173",
                  "checkedIn": false,
                  "damaged": false,
                  "missing": true
              }
          ]
      },
      {
          "name": "Sony PXW-FS7 XDCAM Super 35 Camera System",
          "categoryId":"7c9d52c47cb7f29bf8a14d7a",
          "category": "Cameras",
          "imageUrl": "https://www.bhphotovideo.com/images/images500x500/sony_pxw_fs7_compact_4k_xdcam_with_1082825.jpg",
          "mfg": "Sony",
          "model": "PXW-FS7",
          "price": 7999.00,
          "qty": 2,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "35268",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "35318",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Sony FE PZ 28-135mm f/4 G OSS Lens",
          "categoryId":"d7e56ce8b80523a4bf34ca9e",
          "category": "Cameras_Lenses",
          "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/sony_selp28135g_e_pz_28_135mm_f_4_1082051.jpg",
          "mfg": "Sony",
          "model": "FE PZ 28-135mm",
          "price": 2498.00,
          "qty": 2,
          "barcodes": [
              {
                  "barcode": "35269",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "35324",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Manfrotto 526,545BK Professional Video Tripod System with 526 Head",
          "categoryId":"a5184d2d21053787dfa93c9b",
          "category": "Cameras_Camera Support",
          "imageUrl": "https://www.bhphotovideo.com/images/images500x500/Manfrotto_526_545BK_526_545BK_Professional_Video_Tripod_589954.jpg",
          "mfg": "Manfrotto",
          "model": "526,545BK",
          "price": 1899.00,
          "qty": 2,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "35405",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "35408",
                  "checkedIn": true,
                  "damaged": true,
                  "missing": false
              }
          ]
      },
      {
          "name": "Audio-Technica AT875R Line and Gradient Condenser Microphone",
          "categoryId":"7f68134cc87ae6c914f000ff",
          "category": "Audio_Microphones",
          "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/Audio_Technica_AT875R_AT875_Short_Condenser_Shotgun_495302.jpg",
          "mfg": "Audio-Technica",
          "model": "AT875R",
          "price": 169.00,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "37004",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "37146",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "37221",
                  "checkedIn": false,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Windshield for Shotgun Microphones",
          "categoryId":"110c7f2cc9b0959d88a20f2e",
          "category": "Audio_Accessories",
          "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/auray_wss_2012_pro_matrixwindsheild_20mm_di_850316.jpg",
          "mfg": "Auray",
          "model": "WSS-2012",
          "price": 89.00,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "432158",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "49821",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "465984",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Angled XLR Microphone Cable 10ft",
          "categoryId":"5338539a6533b0b7fc23490e",
          "category": "Audio_Cables",
          "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/Kopul_m4001_5r_Kopul_Studio_Elite_4000_845563.jpg",
          "mfg": "Kopul",
          "model": "M4010R",
          "price": 29.95,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "44252",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "480374",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "4520312",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Shockmount for Shotgun Microphones",
          "categoryId":"110c7f2cc9b0959d88a20f2e",
          "category": "Audio_Accessories",
          "imageUrl": "https://www.bhphotovideo.com/images/images2000x2000/auray_shm_socam_1075739.jpg",
          "mfg": "Auray",
          "model": "SHM-SOCAM",
          "price": 24.95,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "47892",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "472121",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "475135",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Boom Pole",
          "categoryId":"110c7f2cc9b0959d88a20f2e",
          "category": "Audio_Accessories",
          "imageUrl": "https://www.bhphotovideo.com/images/images500x500/Rode_MICRO_BOOMPOLE_Micro_Boompole_3_Section_757123.jpg",
          "mfg": "Rode",
          "model": "MICRO BOOMPOLE",
          "price": 49.00,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "41237",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "4189533",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "4126535",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Pelican 1400 Case",
          "categoryId":"058e0edad82c20a95960cb6a",
          "category": "Cases",
          "imageUrl": "https://www.bhphotovideo.com/images/images2000x2000/Pelican_1400_000_110_1400_Case_with_Foam_40651.jpg",
          "mfg": "Pelican",
          "model": "1400-000-110",
          "price": 71.66,
          "qty": 3,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "42887",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "42935",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "426581",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
          "name": "Apple 16GB iPad Air (Wi-Fi Only, Space Gray)",
          "categoryId":"bff42b83081152e9c536f1ff",
          "category": "Computers_Tablets",
          "imageUrl": "https://www.bhphotovideo.com/images/images1000x1000/apple_md785ll_b_ipad_air_16gb_ipad_1091793.jpg",
          "mfg": "Apple",
          "model": "MD785LL/B",
          "price": 479.00,
          "qty": 2,
          "inKit": false,
          "barcodes": [
              {
                  "barcode": "APP110",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              },
              {
                  "barcode": "APP111",
                  "checkedIn": true,
                  "damaged": false,
                  "missing": false
              }
          ]
      },
      {
        "name": "Case for iPads",
        "categoryId": "058e0edad82c20a95960cb6a",
        "category":"Cases",
        "imageUrl": "https://www.bhphotovideo.com/images/images2500x2500/Xuma_sn_112b_Neoprene_Foam_Sleeve_For_866541.jpg",
        "mfg": "Xuma",
        "model": "SN-112B",
        "price": 4.95,
        "qty": 2,
        "inKit": false,
        "barcodes": [
          {
            "barcode": "812450",
            "checkedIn": true,
            "damaged": false,
            "missing": false
          },
          {
            "barcode": "845675",
            "checkedIn": true,
            "damaged": false,
            "missing": false
          }
        ]
      }
    ]
  }
]

module.exports = demoData
