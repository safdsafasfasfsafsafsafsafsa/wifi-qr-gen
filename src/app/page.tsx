import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Home() {
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
              <CardContent className="space-y-6">
                {/* 브랜드 이름 */}
                <div className="space-y-2">
                  <Label htmlFor="brandName" className="text-sm font-medium">
                    브랜드 이름 *
                  </Label>
                  <Input
                    id="brandName"
                    placeholder="예: 스타벅스, 맥도날드"
                    className="h-11"
                  />
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
                    />
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
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="security" className="text-sm font-medium">
                      보안 타입
                    </Label>
                    <Input
                      id="security"
                      placeholder="WPA, WEP, 또는 없음"
                      defaultValue="WPA"
                      className="h-11"
                    />
                  </div>
                </div>

                <Separator />

                {/* 배경색 선택 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">
                    카드 디자인
                  </h3>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">배경색</Label>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        {
                          name: "흰색",
                          value: "#ffffff",
                          color: "bg-white border",
                        },
                        {
                          name: "회색",
                          value: "#f8fafc",
                          color: "bg-slate-50 border",
                        },
                        {
                          name: "파란색",
                          value: "#3b82f6",
                          color: "bg-blue-500",
                        },
                        {
                          name: "초록색",
                          value: "#10b981",
                          color: "bg-emerald-500",
                        },
                        {
                          name: "보라색",
                          value: "#8b5cf6",
                          color: "bg-violet-500",
                        },
                        {
                          name: "핑크색",
                          value: "#ec4899",
                          color: "bg-pink-500",
                        },
                      ].map((color) => (
                        <button
                          key={color.value}
                          className={`w-8 h-8 rounded-full ${color.color} hover:scale-110 transition-transform`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full h-12 text-lg font-semibold">
                  QR 코드 카드 생성
                </Button>
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
