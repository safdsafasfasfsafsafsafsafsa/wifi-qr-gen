import QRCode from "qrcode";
import { type WifiFormData } from "./schemas";

/**
 * WiFi 접속 정보를 QR 코드 문자열로 변환
 * WiFi QR 코드 형식: WIFI:T:WPA;S:SSID;P:Password;H:false;;
 */
export function generateWifiQRString(data: WifiFormData): string {
  const { ssid, password, security } = data;

  // 보안 타입 매핑
  const securityType = security === "nopass" ? "nopass" : "WPA";

  // WiFi QR 코드 형식 생성
  const wifiString = `WIFI:T:${securityType};S:${ssid};P:${password};H:false;;`;

  return wifiString;
}

/**
 * WiFi 정보를 QR 코드 이미지로 생성
 */
export async function generateWifiQRCode(
  data: WifiFormData,
  options: {
    width?: number;
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  } = {}
): Promise<string> {
  const wifiString = generateWifiQRString(data);

  const defaultOptions = {
    width: 200,
    margin: 2,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
    ...options,
  };

  try {
    const qrCodeDataURL = await QRCode.toDataURL(wifiString, defaultOptions);
    return qrCodeDataURL;
  } catch (error) {
    console.error("QR 코드 생성 실패:", error);
    throw new Error("QR 코드 생성에 실패했습니다.");
  }
}

/**
 * QR 코드 생성 옵션
 */
export interface QRCodeOptions {
  width: number;
  margin: number;
  color: {
    dark: string;
    light: string;
  };
}

/**
 * 기본 QR 코드 옵션
 */
export const defaultQROptions: QRCodeOptions = {
  width: 200,
  margin: 2,
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
};
