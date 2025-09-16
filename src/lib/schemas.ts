import { z } from "zod";

export const wifiFormSchema = z.object({
  brandName: z
    .string()
    .min(1, "브랜드 이름을 입력해주세요")
    .max(50, "브랜드 이름은 50자 이하로 입력해주세요"),
  ssid: z
    .string()
    .min(1, "네트워크 이름을 입력해주세요")
    .max(32, "네트워크 이름은 32자 이하로 입력해주세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요")
    .max(63, "비밀번호는 63자 이하로 입력해주세요"),
  security: z.string().min(1, "보안 타입을 선택해주세요"),
  backgroundColor: z.string(),
});

export type WifiFormData = z.infer<typeof wifiFormSchema>;

export const colorOptions = [
  { name: "흰색", value: "#ffffff", color: "bg-white border" },
  { name: "회색", value: "#f8fafc", color: "bg-slate-50 border" },
  { name: "파란색", value: "#3b82f6", color: "bg-blue-500" },
  { name: "초록색", value: "#10b981", color: "bg-emerald-500" },
  { name: "보라색", value: "#8b5cf6", color: "bg-violet-500" },
  { name: "핑크색", value: "#ec4899", color: "bg-pink-500" },
] as const;

export const securityOptions = [
  { value: "WPA", label: "WPA/WPA2" },
  { value: "WEP", label: "WEP" },
  { value: "nopass", label: "없음" },
] as const;
