# Siber Savaş Akademisi '24 Frontend Değerlendirme Görevi

## Proje Arayüzü

![Proje Arayüzü](https://github.com/mrttyyldrm/case-brief/assets/98252720/235c025a-bfae-4fae-95b0-295bad6e977a)

Frontend Değerlendirme Süreci Case Brief kapsamında verilen **Kullanıcı Yönetimi** temalı Dashboard Arayüzü:

#### 1) Proje Yapısı: HTML5
#### 2) Tasarım Geliştirmesi: SCSS
#### 3) İnteraktif Operasyonlar: Next.js 14

teknolojileri kullanılarak geliştirilmiştir. Proje genelinde stillendirme süreçlerinde ana HTML yapısını kirletmemek amacıyla bilinçli olarak herhangi bir unsur (CSS Library, CSS Modules, Styled Components) kullanılmayak **sıfırdan geliştirilmiştir**. Proje üzerinde herhangi bir Statik/Dinamik API bağlantısı kullanılmamıştır. Datalar **Local Storage** bünyesinde tutulmakta ve işlenmektedir.

## Proje Klasör Yapısı

![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/cfcccf88-77ae-4fe5-8e8f-58d96aede3ba)

### App

Proje genelinde React.js 14 ile geliştirme sağlanmış olup Routing yapıları App Route metadolojisi üzerinden kurgulanmıştır. App Routing kapsamında ilgili **app** klasörü içerisinde geliştirilen sayfa yapıları:

#### 1) layout.jsx: 
Projenin ana HTML yapısını ve diğer üçüncü parti CDN araçlarını içeren sayfadır.

#### 2) page.jsx
Projenin açılışında layout.jsx bünyesindeki body içerisinde render edilmek üzere kullanılan projenin tekil Static Routing sayfasıdır.

### Components

Components klasöründe proje genelinde kullanılan Button, Input, Menu, Modal, Search, Select ve Table olmak üzere toplam 7 adet Component **index.jsx** ve **style.scss** dosyaları ile ilgili klasörler altında bulunmaktadır.

#### 1) Button Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/b1ec4b04-0b1c-4bdf-a14c-b68c7e77f71d)

#### 2) Input Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/5c6587f9-81e0-45c9-a1e2-3bbdb4e9791c)

#### 3) Menu Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/866b58c3-8084-4ad2-9715-ba927676f635)

#### 4) Modal Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/058a1914-63d0-43ff-ada7-43e1957e8d00)

#### 5) Search Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/bd684b4b-65f5-4fd4-936d-ac2ffd3c52c0)

#### 6) Select Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/0d95e004-cf1d-4ae0-a6fb-6debb686b7f7)

#### 7) Table Component: 
![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/f2ea0569-528f-4e22-81eb-befe49672fb4)

### Styles

Proje stil dosyalarının bulunduğu klasör dizinidir. Tüm proje genelinde kullan ana CSS dosyaları **base.scss** içerisinde tanımlanarak layout.jsx içerisinde render edilmektedir. Proje renklendirmeleri pratik renk düzenlemesi sağlamak adına **colors.scss** içerisinde bulunmakta ve diğer kullanılan tüm SCSS dosyalarına import edilmektedir. Dashboard içerisinde kullanılan tüm elementlerin stillendirmeleri **dashboard.scss** içerisinde geliştirilmiştir. Component stillendirmeleri her biri için oluşturulmuş ayrı **style.scss** dosyası altında extend edilebilr SCSS Component yapısında geliştirilmiştir. Componentlerin stillendirmeleri dashboard.scss içerisinde Componentlerin kullanıldığı bölümlerde extend edilmiştir. Böylece React JSX ve Importing felsefesine bağlı kalınmıştır.

### SCSS Stillendirme Yapısı

![image](https://github.com/mrttyyldrm/case-brief/assets/98252720/3f9a9815-0326-4f11-b96c-202ee7e606e2)

# CANLI DENEYİN
Proje canlı olarak Host edilmektedir. Aşağıda bulunan URL aracılığıyla projenin önizlemesini gerçekleştirebilirsiniz.

### Proje Bağlantısı: [https://preview.yildirimmert.com/](https://preview.yildirimmert.com/)


 




