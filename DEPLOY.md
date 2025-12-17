# GitHub'dan Sunucuya Deploy Rehberi

## 🚀 Sunucuya Pull Etme Yöntemleri

### Yöntem 1: SSH ile Manuel Pull (Önerilen)

#### 1. Sunucuya SSH ile Bağlanın
```bash
ssh kullanici@sunucu-ip
# veya
ssh kullanici@domain.com
```

#### 2. Proje Klasörüne Gidin
```bash
cd /var/www/trivasoft
# veya projenizin bulunduğu klasör
```

#### 3. GitHub'dan Pull Edin
```bash
# Eğer ilk kez çekiyorsanız
git clone https://github.com/kamandaragasafli/trivasoft.git

# Eğer zaten klonlanmışsa
git pull origin main
```

#### 4. Dependencies Yükleyin
```bash
npm install
```

#### 5. Build Edin
```bash
npm run build
```

#### 6. Build Dosyalarını Deploy Edin
```bash
# Nginx için
sudo cp -r dist/* /var/www/html/trivasoft/

# Apache için
sudo cp -r dist/* /var/www/html/trivasoft/
```

---

### Yöntem 2: Otomatik Deploy Script

#### deploy.sh Script Oluşturun
```bash
#!/bin/bash

# Proje klasörüne git
cd /var/www/trivasoft

# GitHub'dan pull et
git pull origin main

# Dependencies yükle
npm install

# Build et
npm run build

# Build dosyalarını deploy et
sudo cp -r dist/* /var/www/html/trivasoft/

# Nginx/Apache restart (gerekirse)
sudo systemctl restart nginx
# veya
sudo systemctl restart apache2

echo "Deploy tamamlandı!"
```

#### Script'i Çalıştırılabilir Yapın
```bash
chmod +x deploy.sh
```

#### Script'i Çalıştırın
```bash
./deploy.sh
```

---

### Yöntem 3: GitHub Actions ile Otomatik Deploy

#### .github/workflows/deploy.yml Oluşturun
```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
      env:
        VITE_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
        VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
        VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
    
    - name: Deploy to server
      uses: appleboy/scp-action@master
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.SSH_KEY }}
        source: "dist/*"
        target: "/var/www/html/trivasoft"
```

---

### Yöntem 4: Vercel/Netlify (En Kolay)

#### Vercel
1. https://vercel.com adresine gidin
2. GitHub hesabınızla giriş yapın
3. "New Project" tıklayın
4. Repository'yi seçin: `kamandaragasafli/trivasoft`
5. Environment Variables ekleyin
6. Deploy edin

#### Netlify
1. https://netlify.com adresine gidin
2. GitHub hesabınızla giriş yapın
3. "Add new site" → "Import an existing project"
4. Repository'yi seçin
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Environment Variables ekleyin
7. Deploy edin

---

## 🔐 SSH Key Kurulumu (İlk Kez)

### 1. SSH Key Oluşturun (Local)
```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### 2. Public Key'i Sunucuya Kopyalayın
```bash
ssh-copy-id kullanici@sunucu-ip
```

### 3. Test Edin
```bash
ssh kullanici@sunucu-ip
```

---

## 📋 Sunucu Gereksinimleri

### Node.js ve NPM
```bash
# Node.js 18+ yükleyin
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Git
```bash
sudo apt-get update
sudo apt-get install git
```

### Nginx veya Apache
```bash
# Nginx
sudo apt-get install nginx

# Apache
sudo apt-get install apache2
```

---

## 🔧 Nginx Konfigurasyonu

### /etc/nginx/sites-available/trivasoft
```nginx
server {
    listen 80;
    server_name trivasoft.az www.trivasoft.az;
    
    root /var/www/html/trivasoft;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Nginx'i Aktif Edin
```bash
sudo ln -s /etc/nginx/sites-available/trivasoft /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## ⚙️ Environment Variables (Sunucuda)

### .env Dosyası Oluşturun
```bash
cd /var/www/trivasoft
nano .env
```

### İçeriği:
```env
VITE_EMAILJS_SERVICE_ID=service_jzj1prx
VITE_EMAILJS_TEMPLATE_ID=template_fgrynmz
VITE_EMAILJS_PUBLIC_KEY=tqLw7xcNXcctC8E74
```

---

## 🔄 Hızlı Deploy Komutu

Sunucuda tek komutla deploy:
```bash
cd /var/www/trivasoft && git pull origin main && npm install && npm run build && sudo cp -r dist/* /var/www/html/trivasoft/ && echo "✅ Deploy tamamlandı!"
```

---

## 📝 Notlar

- İlk kez deploy ediyorsanız `git clone` kullanın
- Her deploy'dan önce `git pull` yapın
- Build'den önce `npm install` çalıştırın
- Environment variables'ı unutmayın
- Nginx/Apache konfigürasyonunu kontrol edin

