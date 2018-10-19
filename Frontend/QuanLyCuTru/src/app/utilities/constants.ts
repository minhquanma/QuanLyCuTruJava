export enum API_URL {
  CUTRU = "http://localhost:7777/quanlycutru",
  DAN = "http://localhost:7777/quanlydan"
}

export enum IMAGE {
  DEFAUTL_AVATAR = "/assets/images/default-avatar.png",
  LANDING_BG = "/assets/images/landing-background.jpg"
}

// Loại cư trú
export enum LOAI_CU_TRU {
  TAM_VANG = 1,
  TAM_TRU = 2,
}

// Trạng thái duyệt
export enum TRANG_THAI {
  DA_DUYET = 1,
  CHUA_DUYET = 0
}

// Trạng thái hết hạn
export enum THOI_HAN {
  HET_HAN = 1,
  CON_HAN = 0
}
