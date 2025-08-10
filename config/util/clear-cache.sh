#!/bin/bash

echo "🧹 캐시 정리 시작..."


echo "Next.js 캐시 제거 중..."
rm -rf .next

echo "🧹 pnpm store 정리 중..."
pnpm store prune

echo "✅ 캐시 정리 완료!"