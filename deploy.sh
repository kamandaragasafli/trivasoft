#!/bin/bash

# CivilSofts Deploy Script
# GitHub'dan pull edip build ve deploy eder

echo "🚀 CivilSofts Deploy Başlatılıyor..."

# Proje klasörüne git
cd "$(dirname "$0")" || exit

# GitHub'dan pull et
echo "📥 GitHub'dan pull ediliyor..."
git pull origin main

# Dependencies yükle
echo "📦 Dependencies yükleniyor..."
npm install

# Build et
echo "🔨 Build ediliyor..."
npm run build

# Build başarılı mı kontrol et
if [ -d "dist" ]; then
    echo "✅ Build başarılı!"
    echo "📁 Build dosyaları: dist/"
    echo ""
    echo "💡 Sonraki adımlar:"
    echo "1. Build dosyalarını web sunucunuza kopyalayın:"
    echo "   sudo cp -r dist/* /var/www/html/civilsofts/"
    echo ""
    echo "2. Nginx/Apache restart edin:"
    echo "   sudo systemctl restart nginx"
    echo ""
    echo "✨ Deploy hazır!"
else
    echo "❌ Build başarısız!"
    exit 1
fi

