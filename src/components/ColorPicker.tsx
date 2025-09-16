"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { colorOptions } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
  className?: string;
}

export function ColorPicker({
  selectedColor,
  onColorChange,
  className,
}: ColorPickerProps) {
  const [customColor, setCustomColor] = useState("#ffffff");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handlePresetColorSelect = (color: string) => {
    onColorChange(color);
    setShowCustomInput(false);
  };

  const handleCustomColorSubmit = () => {
    if (isValidHexColor(customColor)) {
      onColorChange(customColor);
      setShowCustomInput(false);
    }
  };

  const isValidHexColor = (color: string): boolean => {
    return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
  };

  const getColorPreviewStyle = (color: string) => {
    if (color === "#ffffff") {
      return "bg-white border border-gray-300";
    }
    return `bg-[${color}]`;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Label className="text-sm font-medium">배경색</Label>

      {/* 미리 정의된 색상 팔레트 */}
      <div className="space-y-3">
        <div className="flex gap-2 flex-wrap">
          {colorOptions.map((color) => (
            <button
              key={color.value}
              type="button"
              className={cn(
                "w-8 h-8 rounded-full hover:scale-110 transition-transform",
                color.color,
                selectedColor === color.value
                  ? "ring-2 ring-blue-500 ring-offset-2"
                  : ""
              )}
              title={color.name}
              onClick={() => handlePresetColorSelect(color.value)}
            />
          ))}
        </div>

        {/* 커스텀 색상 입력 */}
        <div className="space-y-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setShowCustomInput(!showCustomInput)}
            className="text-xs"
          >
            {showCustomInput ? "닫기" : "커스텀 색상"}
          </Button>

          {showCustomInput && (
            <div className="flex gap-2 items-center">
              <div className="flex-1">
                <Input
                  type="text"
                  placeholder="#ffffff"
                  value={customColor}
                  onChange={(e) => setCustomColor(e.target.value)}
                  className="h-8 text-sm"
                />
              </div>
              <div
                className={cn(
                  "w-8 h-8 rounded border border-gray-300",
                  getColorPreviewStyle(customColor)
                )}
                title="색상 미리보기"
              />
              <Button
                type="button"
                size="sm"
                onClick={handleCustomColorSubmit}
                disabled={!isValidHexColor(customColor)}
                className="h-8 px-3 text-xs"
              >
                적용
              </Button>
            </div>
          )}
        </div>

        {/* 현재 선택된 색상 표시 */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>선택된 색상:</span>
          <div
            className={cn(
              "w-4 h-4 rounded border border-gray-300",
              getColorPreviewStyle(selectedColor)
            )}
          />
          <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
            {selectedColor}
          </code>
        </div>
      </div>
    </div>
  );
}
