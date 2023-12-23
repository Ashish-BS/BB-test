const config = {
  MESSAGE: {
    NO_RECORDS_FOUND: "No records found",
    COPY_EMAIL_SUCCESS: "Email copied successfully",
    COPY_ADDRESS_SUCCESS: "Address copied successfully",
    GENERIC_ERROR: "Something went wrong",
    BLOG_NOT_FOUND_WITH_CATEGORY: "No blogs found for ",
    BLOG_NOT_FOUND_GENERIC: "No blogs found",
    CASE_STUDY_NOT_FOUND_WITH_CATEGORY: "No case study found for ",
    CASE_STUDY_NOT_FOUND_GENERIC: "No case study found",
    CODE_COPIED_SUCCESSFULLY: "Code copied successfully",
    IMAGE_UPLOADING_ERROR: "File must be an image",
    IMAGE_TYPE_ERROR: "File must be of type .jpeg, .jpg or .png",
    MAX_SIZE_IMAGE_UPLOADING_ERROR: "File must be of max. 5mb",
    HAND_DETECTOR_NOT_LOADED: "Please wait, hand detector not loaded yet.",
    USER_CAM_NOT_ACCESSIBLE: "Please enable camera access",
    ENABLE_CAMERA: "Enable camera to try gesture controls",
    DISABLE_CAMERA: "Disable camera to stop gesture control",
    HAND_DETECTOR_NOT_LOADED_PROPERLY: "Hand detector is unable to load",
    HAND_DETECTOR_LOADING: "Loading hand detector...",
    MUMBAI_OFFICE_ADDRESS: "Mumbai Address Copied Successfully",
    AHMEDABAD_BSQUARE_1_OFFICE_ADDRESS:
      "Ahmedabad BSquare-1 Address Copied Successfully",
    AHMEDABAD_BSQUARE_2_OFFICE_ADDRESS:
      "Ahmedabad BSquare-2 Address Copied Successfully",
    NO_RESPONSE_FROM_CMS:
      "Uh oh! This is not you, this is us. Our content factory is currently experiencing an issue. Please try again after sometime.",
    CAPTCHA_NOT_VERIFIED: "Oops! Invalid reCAPTCHA. Retry",
    INVALID_REQUEST_METHOD: "Invalid request",
  },
  TOASTER_OPTIONS: {
    SUCCESS: {
      duration: 4000,
      style: {
        maxWidth: 450,
        borderRadius: "10px",
        background: "#fecf39",
        color: "#ffffff",
      },
    },
    ERROR: {
      duration: 4000,
      style: {
        maxWidth: 450,
        borderRadius: "10px",
        background: "#CD0000",
        color: "#fff",
      },
    },
  },
  SOCIAL_MEDIA_STATS: {
    FACEBOOK: {
      REACH: 34420,
      FOLLOWERS: 3886,
    },
    INSTAGRAM: {
      REACH: 306170,
      FOLLOWERS: 29890,
    },
    YOUTUBE: {
      REACH: 2680,
      FOLLOWERS: 254,
    },
  },
  API_VERSION: "v1",
  TEXT: {
    MODAL_GREETING_TEXT: "Hello",
  },
  STATIC_URL: {
    WHATSAPP: {
      DESKTOP: "https://web.whatsapp.com/send?text=https://bombaysoftwares.com",
      MOBILE: "whatsapp://send?text=https://bombaysoftwares.com",
    },
  },
  SWIPER_MOBILE_VIEW: {
    WIDTH: 575,
  },
  DEFAULT_PAGE_SIZE: 20,
  REVALIDATE_MS: 86400,
  JOB_OPENINGS_REVALIDATE_MS: 21600,
  RECENT_BLOG_DEFAULT_PAGE_SIZE: 2,
  LOCAL_STORAGE_VARIABLES: {
    COUNTRY: "country",
    CHOSEN_PURPOSE: "chosen-purpose",
    DARK_MODE: "dark-mode",
    USER_DATA_CONTACT_US: "user-data-contact-us",
    USER_DATA_NEWSLETTER: "user-data-contact-newsletter",
    INQUIRY: {
      INFORMATION: "information",
      HIRING_INQUIRY: "hiring-inquiry",
      SALES_INQUIRY: "sales-inquiry",
    },
  },
  DARK_MODE_IS_TRUE: "true",
  COLOR_PALETTE: {
    BG_PRIMARY_COLOR: "#ffffff",
  },
  PAGE_NAME: {
    BLOG: "blog",
    CASE_STUDY: "case-study",
    CONTACT_US: "contact-us",
  },
  IMAGE_API_RESPONSE: {
    SUCCESS: "success",
  },
  IMAGE_MAX_SIZE: 5242880,
  IMAGE_TYPES: {
    IMAGE: "image",
    IMAGE_JPEG: "image/jpeg",
    IMAGE_JPG: "image/jpg",
    IMAGE_PNG: "image/png",
  },
  HAND_GESTURES: {
    MODES: {
      SCROLL: "scroll",
      ZOOM_IN: "zoom-in",
      ZOOM_OUT: "zoom-out",
      NAVIGATE_BACK: "navigate-back",
      NAVIGATE_FORWARD: "navigate-forward",
      NEUTRAL: "neutral",
    },
    TIP_IDS: [4, 8, 12, 16, 20],
    UP: 1,
    DOWN: 0,
    WRIST_POSE: {
      ALL_FINGERS_UP: [1, 1, 1, 1, 1],
      LAST_THREE_FINGERS_UP: [0, 0, 1, 1, 1],
      INDEX_FINGER_UP: [0, 1, 0, 0, 0],
      INDEX_AND_MIDDLE_FINGER_UP: [0, 1, 1, 0, 0],
      ALL_FINGERS_DOWN_FIST: [0, 0, 0, 0, 0],
      LAST_THREE_FINGRES_UP: [0, 0, 1, 1, 1],
      INDEX_AND_PINK_FINGER_UP: [0, 1, 0, 0, 1],
    },
    FINGER_POINTS: {
      THUMB: 4,
      INDEX_FINGER: 8,
      MIDDLE_FINGER: 12,
      RING_FINGER: 16,
      PINK_FINGER: 20,
    },
    NUMBER_OF_FRAMES: 30,
    TASK_PATH:
      "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
    WASM_PATH:
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm",
    VIDEO: {
      VIDEO_WIDTH: 426,
      VIDEO_HEIGHT: 240,
      MAX_HEIGHT: "100%",
    },
  },
  MOBILE_SCREEN_SIZE: 576,
  OPEN_SOURCE: {
    FOOTER_NPM_LINK: "https://www.npmjs.com/package/@bombaysoftwares/tskit",
    PYPI_LINK: "https://pypi.org/project/bombaysoftwares-pysupp/",
  },
  HEADERS: {
    CACHE_CONTROL: {
      KEY: "Cache-Contol",
      VALUE: "public, s-maxage=59, stale-while-revalidate=59",
    },
  },
  STAR_RATINGS: {
    GLASSDOOR: 4.9,
    TRUSTPILOT: 4.2,
    GOOGLE: 5,
    AMBITION_BOX: 4.9,
  },
  PAGE_SLUGS: {
    CASE_STUDY: {
      MYC: "my-candidature",
      AUS_TREE_ID: "australian-tree-id",
    },
  },
};

export default config;
