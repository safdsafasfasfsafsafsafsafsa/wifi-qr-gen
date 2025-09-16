"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { type WifiFormData } from "@/lib/schemas";
import { generateWifiQRCode } from "@/lib/qr-generator";
import { cn } from "@/lib/utils";

interface WifiQRCardProps {
  data: WifiFormData | null;
  className?: string;
}

export function WifiQRCard({ data, className }: WifiQRCardProps) {
  const [qrCodeDataURL, setQrCodeDataURL] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!data) {
      setQrCodeDataURL(null);
      setError(null);
      return;
    }

    const generateQR = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const qrCode = await generateWifiQRCode(data, {
          width: 180,
          margin: 1,
          color: {
            dark: "#000000",
            light: data.backgroundColor,
          },
        });
        setQrCodeDataURL(qrCode);
      } catch (err) {
        setError("QR 코드 생성에 실패했습니다.");
        console.error("QR 코드 생성 오류:", err);
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, [data]);

  if (!data) {
    return (
      <div
        className={cn(
          "w-64 h-[341px] bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center",
          className
        )}
      >
        <div className="text-center text-slate-500">
          <div className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <p className="text-sm">WiFi 정보를 입력하면</p>
          <p className="text-sm">QR 코드 카드가 여기에 표시됩니다</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={cn(
          "w-64 h-[341px] rounded-lg border shadow-lg flex items-center justify-center",
          className
        )}
        style={{ backgroundColor: data.backgroundColor }}
      >
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-2 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-600">QR 코드 생성 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={cn(
          "w-64 h-[341px] rounded-lg border shadow-lg flex items-center justify-center",
          className
        )}
        style={{ backgroundColor: data.backgroundColor }}
      >
        <div className="text-center text-red-500">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-64 h-[341px] rounded-lg border shadow-lg flex flex-col p-6",
        className
      )}
      style={{ backgroundColor: data.backgroundColor }}
    >
      {/* 상단: WiFi 접속 텍스트 */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">WiFi 접속</h2>
      </div>

      {/* 중앙: QR 코드 */}
      <div className="flex-1 flex items-center justify-center mb-4">
        {qrCodeDataURL && (
          <Image
            src={qrCodeDataURL}
            alt="WiFi QR Code"
            width={176}
            height={176}
            className="w-44 h-44"
          />
        )}
      </div>

      {/* 하단: 브랜드 이름과 TEST 레이블 */}
      <div className="flex justify-between items-end">
        <div className="text-left">
          <p className="text-sm font-medium text-gray-800">{data.brandName}</p>
        </div>
        <div className="text-right">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            TEST
          </span>
        </div>
      </div>
    </div>
  );
}
