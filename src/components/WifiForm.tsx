"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  wifiFormSchema,
  type WifiFormData,
  securityOptions,
} from "@/lib/schemas";
import { ColorPicker } from "@/components/ColorPicker";
import { useState } from "react";

interface WifiFormProps {
  onSubmit: (data: WifiFormData) => void;
  onColorChange: (color: string) => void;
  selectedColor: string;
}

export function WifiForm({
  onSubmit,
  onColorChange,
  selectedColor,
}: WifiFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<WifiFormData>({
    resolver: zodResolver(wifiFormSchema),
    defaultValues: {
      brandName: "",
      ssid: "",
      password: "",
      security: "WPA",
      backgroundColor: "#ffffff",
    },
    mode: "onChange",
  });

  const watchedValues = watch();

  const handleFormSubmit = async (data: WifiFormData) => {
    setIsSubmitting(true);
    try {
      await onSubmit(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleColorSelect = (color: string) => {
    setValue("backgroundColor", color);
    onColorChange(color);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* 브랜드 이름 */}
      <div className="space-y-2">
        <Label htmlFor="brandName" className="text-sm font-medium">
          브랜드 이름 *
        </Label>
        <Input
          id="brandName"
          placeholder="예: 스타벅스, 맥도날드"
          className="h-11"
          {...register("brandName")}
        />
        {errors.brandName && (
          <p className="text-sm text-red-500">{errors.brandName.message}</p>
        )}
      </div>

      <Separator />

      {/* 네트워크 정보 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">
          WiFi 네트워크 정보
        </h3>

        <div className="space-y-2">
          <Label htmlFor="ssid" className="text-sm font-medium">
            네트워크 이름 (SSID) *
          </Label>
          <Input
            id="ssid"
            placeholder="WiFi 네트워크 이름을 입력하세요"
            className="h-11"
            {...register("ssid")}
          />
          {errors.ssid && (
            <p className="text-sm text-red-500">{errors.ssid.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            비밀번호 *
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="WiFi 비밀번호를 입력하세요"
            className="h-11"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="security" className="text-sm font-medium">
            보안 타입
          </Label>
          <Select
            value={watchedValues.security}
            onValueChange={(value) => setValue("security", value)}
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="보안 타입을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {securityOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.security && (
            <p className="text-sm text-red-500">{errors.security.message}</p>
          )}
        </div>
      </div>

      <Separator />

      {/* 배경색 선택 */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">카드 디자인</h3>

        <ColorPicker
          selectedColor={selectedColor}
          onColorChange={handleColorSelect}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-lg font-semibold"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? "생성 중..." : "QR 코드 카드 생성"}
      </Button>
    </form>
  );
}
