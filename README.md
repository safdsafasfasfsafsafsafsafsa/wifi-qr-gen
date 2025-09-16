# WiFi QR Generator

cursor ai 테스트

WiFi 네트워크 정보를 QR 코드로 생성하는 웹 애플리케이션입니다. 손님들이 WiFi에 쉽게 연결할 수 있도록 QR 코드를 생성하고 공유할 수 있습니다.

## 기능

- WiFi 네트워크 정보 입력 (SSID, 비밀번호, 보안 타입)
- 실시간 QR 코드 생성 및 미리보기
- QR 코드 다운로드 기능
- 반응형 웹 디자인

## 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **QR Code**: qrcode 라이브러리 (예정)

## 시작하기

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm run start
```

## 사용법

1. WiFi 네트워크의 SSID를 입력합니다
2. 비밀번호를 입력합니다 (선택사항)
3. 보안 타입을 선택합니다 (WPA/WEP/없음)
4. QR 코드가 자동으로 생성됩니다
5. QR 코드를 다운로드하여 인쇄하거나 공유합니다

## 배포

### Vercel (권장)

[Vercel Platform](https://vercel.com/new)을 사용하여 쉽게 배포할 수 있습니다.

### 기타 플랫폼

Next.js 애플리케이션은 다양한 플랫폼에서 배포할 수 있습니다. 자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

## 라이선스

MIT License
