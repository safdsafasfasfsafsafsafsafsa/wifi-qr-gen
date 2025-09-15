import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">WiFi QR Generator</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>WiFi 정보 입력</CardTitle>
            <CardDescription>
              WiFi 네트워크 정보를 입력하여 QR 코드를 생성하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ssid">네트워크 이름 (SSID)</Label>
              <Input id="ssid" placeholder="WiFi 네트워크 이름을 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" type="password" placeholder="WiFi 비밀번호를 입력하세요" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="security">보안 타입</Label>
              <Input id="security" placeholder="WPA, WEP, 또는 없음" />
            </div>
            <Button variant="destructive" className="w-full">QR 코드 생성</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
