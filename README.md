# TypeScript 프로젝트

이 프로젝트는 TypeScript로 작성된 Node.js 애플리케이션입니다.

## 설치

의존성을 설치하려면 다음 명령어를 실행하세요:

```bash
npm install
```

## 사용법

### 개발 모드로 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 빌드된 파일 실행

```bash
npm start
```

### 파일 변경 감지 모드

```bash
npm run watch
```

## 프로젝트 구조

```
typescript/
├── src/           # TypeScript 소스 파일
│   └── index.ts   # 메인 진입점
├── dist/          # 컴파일된 JavaScript 파일 (빌드 후 생성)
├── package.json   # 프로젝트 설정 및 의존성
├── tsconfig.json  # TypeScript 컴파일러 설정
└── README.md      # 프로젝트 문서
```

## 스크립트

- `npm run dev`: ts-node를 사용하여 TypeScript 파일을 직접 실행
- `npm run build`: TypeScript를 JavaScript로 컴파일
- `npm start`: 컴파일된 JavaScript 파일 실행
- `npm run watch`: 파일 변경을 감지하여 자동으로 컴파일

## TypeScript 설정

이 프로젝트는 다음과 같은 TypeScript 설정을 사용합니다:

- **Target**: ES2020
- **Module**: CommonJS
- **Strict Mode**: 활성화
- **Source Maps**: 활성화
- **Declaration Files**: 생성
