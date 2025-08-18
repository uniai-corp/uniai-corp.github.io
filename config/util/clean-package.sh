#!/bin/bash

echo "🚿 패키지 클린 설치 시작..."

echo "📦 node_modules 제거 중..."
rm -rf node_modules

echo "🔐 pnpm-lock.yaml 제거 중..."
rm -rf pnpm-lock.yaml

echo "Next.js 캐시 제거 중..."
rm -rf .next

echo "🧹 pnpm store 정리 중..."
pnpm store prune

echo "📥 패키지 재설치 중..."
pnpm install

echo "✅ 클린 설치 완료!"
