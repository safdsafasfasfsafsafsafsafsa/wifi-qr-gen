"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WifiForm } from "@/components/WifiForm";
import { WifiQRCard } from "@/components/WifiQRCard";
import { type WifiFormData } from "@/lib/schemas";
import { useState } from "react";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [formData, setFormData] = useState<WifiFormData | null>(null);

  const handleFormSubmit = (data: WifiFormData) => {
    setFormData(data);
    console.log("Form submitted:", data);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 헤더 */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center text-slate-900">
            WiFi QR 코드 생성기
          </h1>
          <p className="text-center text-slate-600 mt-2">
            매장용 WiFi 접속 카드를 쉽게 만들어보세요
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* 좌측: 입력 폼 영역 */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">WiFi 정보 입력</CardTitle>
                <CardDescription>
                  매장의 WiFi 정보를 입력하여 QR 코드 카드를 생성하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WifiForm
                  onSubmit={handleFormSubmit}
                  onColorChange={handleColorChange}
                  selectedColor={selectedColor}
                />
              </CardContent>
            </Card>
          </div>

          {/* 우측: 미리보기 영역 */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">미리보기</CardTitle>
                <CardDescription>
                  생성될 QR 코드 카드를 미리 확인하세요
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* 카드 미리보기 영역 */}
                <div className="flex justify-center items-center min-h-[500px] bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                  <WifiQRCard data={formData} />
                </div>

                {/* 다운로드 버튼 */}
                <div className="mt-6 space-y-3">
                  <Button variant="outline" className="w-full h-11" disabled>
                    PNG로 다운로드
                  </Button>
                  <Button variant="outline" className="w-full h-11" disabled>
                    JPG로 다운로드
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t bg-white/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-slate-600">
            © 2024 WiFi QR Generator. 모든 데이터는 브라우저에서만 처리됩니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
