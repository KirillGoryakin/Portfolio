
# Kirill Goryakin's portfolio site
This is my portfolio site. It is written on Next JS and has Framer Motion animations.

# Link
https://portfolio-kirillgoryakin.vercel.app/
# Development
### Instalation:
Clone repository:
```
git clone https://github.com/KirillGoryakin/Portfolio.git
```
Install packages:
```
npm i
```
### Start dev server:
```
npm run dev
```
### Build production:
```
npm run build
```
### Start production server:
```
npm run start
```

# 🐳 Docker
### Build image
```
docker build . -t portfolio
```
### Run container
```
docker run -d --rm -p 3000:3000 --name portfolio portfolio
```