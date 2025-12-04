/**
 * Application Configuration
 * Central place to manage provinces and app settings
 */

const AppConfig = {
  // Province Configuration
  // To add a new province:
  // 1. Get the province StateId from the AQMS API
  // 2. Add an entry below with id, name (Persian), and center coordinates
  // 3. That's it! The app will automatically include it everywhere.

    PROVINCES: {
    1: {
      id: 1,
      name: 'لرستان',
      center: { latitude: 33.4954, longitude: 48.5683 }
    },
    2: {
      id: 2,
      name: 'تهران',
      center: { latitude: 35.6679, longitude: 51.4321 }
    },
    3: {
      id: 3,
      name: 'هرمزگان',
      center: { latitude: 26.8707, longitude: 56.2313 }
    },
    4: {
      id: 4,
      name: 'آذربایجان شرقی',
      center: { latitude: 37.9131, longitude: 46.264 }
    },
    5: {
      id: 5,
      name: 'فارس',
      center: { latitude: 29.3187, longitude: 52.7746 }
    },
    6: {
      id: 6,
      name: 'اصفهان',
      center: { latitude: 32.7175, longitude: 51.6406 }
    },
    7: {
      id: 7,
      name: 'البرز',
      center: { latitude: 35.8343, longitude: 50.8087 }
    },
    8: {
      id: 8,
      name: 'خراسان رضوی',
      center: { latitude: 36.0943, longitude: 59.5087 }
    },
    9: {
      id: 9,
      name: 'خوزستان',
      center: { latitude: 31.3512, longitude: 48.9869 }
    },
    10: {
      id: 10,
      name: 'مرکزی',
      center: { latitude: 34.1792, longitude: 49.7996 }
    },
    11: {
      id: 11,
      name: 'بوشهر',
      center: { latitude: 28.4591, longitude: 51.6161 }
    },
    12: {
      id: 12,
      name: 'آذربایجان غربی',
      center: { latitude: 37.6362, longitude: 45.2292 }
    },
    13: {
      id: 13,
      name: 'اردبیل',
      center: { latitude: 38.2254, longitude: 48.2747 }
    },
    14: {
      id: 14,
      name: 'ایلام',
      center: { latitude: 33.3197, longitude: 46.446 }
    },
    15: {
      id: 15,
      name: 'چهارمحال و بختیاری',
      center: { latitude: 32.0316, longitude: 50.9647 }
    },
    16: {
      id: 16,
      name: 'خراسان جنوبی',
      center: { latitude: 32.9792, longitude: 59.0413 }
    },
    17: {
      id: 17,
      name: 'خراسان شمالی',
      center: { latitude: 37.2232, longitude: 57.2703 }
    },
    18: {
      id: 18,
      name: 'زنجان',
      center: { latitude: 36.3682, longitude: 48.7185 }
    },
    19: {
      id: 19,
      name: 'سمنان',
      center: { latitude: 35.7867, longitude: 53.5496 }
    },
    20: {
      id: 20,
      name: 'سیستان و بلوچستان',
      center: { latitude: 28.7056, longitude: 60.8342 }
    },
    21: {
      id: 21,
      name: 'قزوین',
      center: { latitude: 38.5472, longitude: 51.8 }
    },
    22: {
      id: 22,
      name: 'قم',
      center: { latitude: 34.6146, longitude: 50.8808 }
    },
    23: {
      id: 23,
      name: 'کردستان',
      center: { latitude: 35.4549, longitude: 46.7545 }
    },
    24: {
      id: 24,
      name: 'کرمان',
      center: { latitude: 29.7187, longitude: 56.9367 }
    },
    25: {
      id: 25,
      name: 'کهگیلویه و بویراحمد',
      center: { latitude: 30.6089, longitude: 50.7761 }
    },
    26: {
      id: 26,
      name: 'گلستان',
      center: { latitude: 37.0805, longitude: 54.553 }
    },
    27: {
      id: 27,
      name: 'گیلان',
      center: { latitude: 37.0282, longitude: 49.5099 }
    },
    28: {
      id: 28,
      name: 'مازندران',
      center: { latitude: 36.586, longitude: 52.5342 }
    },
    29: {
      id: 29,
      name: 'همدان',
      center: { latitude: 34.8305, longitude: 48.6118 }
    },
    30: {
      id: 30,
      name: 'یزد',
      center: { latitude: 31.9324, longitude: 54.4592 }
    },
    31: {
      id: 31,
      name: 'کرمانشاه',
      center: { latitude: 34.4286, longitude: 46.7694 }
    }
  },

  // Default province (fallback)
  DEFAULT_PROVINCE_ID: 2,

  // Maximum distance from province center (in kilometers)
  MAX_DISTANCE_FROM_PROVINCE: 150,

  // Cache and timing settings
  CACHE: {
    STATION_THROTTLE: 30 * 1000, // 30 seconds minimum between requests
    REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes auto-refresh
    STALE_DATA_THRESHOLD: 15 * 60 * 1000 // 15 minutes
  },

  // Geolocation settings
  GEOLOCATION: {
    TIMEOUT: 12000, // 12 seconds for geolocation API
    FALLBACK_TIMEOUT: 15000, // 15 seconds total before showing timeout message
    MAX_AGE: 0 // Don't use cached location
  },

  // API settings
  API: {
    ENDPOINT: '/api.php',
    REQUEST_TIMEOUT: 35000 // 35 seconds (backend has 30s)
  }
};

// Freeze config to prevent accidental modifications
Object.freeze(AppConfig);
Object.freeze(AppConfig.PROVINCES);
Object.freeze(AppConfig.CACHE);
Object.freeze(AppConfig.GEOLOCATION);
Object.freeze(AppConfig.API);
