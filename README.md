## **📘** Cook-Book Angular

**Live demo:** [[https://cook-book-angular-ed28b.web.app\](https://cook-book-angular-ed28b.web.app/)
**GitHub**](https://cook-book-angular-ed28b.web.app￼GitHub)**:** <https://github.com/SirGladkov/cook-book-angular>

---

## **🧑‍🍳 О проекте**

Angular 16 + Angular Material + Firebase\
Полноценное CRUD-приложение «Поваренная книга» с авторизацией, загрузкой картинок и деплоем на Firebase.

---

## **⚙️ Возможности**

-  ✅ Авторизация через Google (Firebase Auth)

-  ✅ Создание, редактирование, удаление рецептов

-  ✅ Динамический список ингредиентов

-  ✅ Загрузка фото (base64, без Storage)

-  ✅ Адаптивный Material-дизайн

-  ✅ Автоматический деплой на Firebase Hosting

---

## **📦 Установка**

**bash**

Copy

```
git clone https://github.com/SirGladkov/cook-book-angular.git
cd cook-book-angular/app
npm install
```

---

## **🚀 Запуск**

**bash**

Copy

```
ng serve
# Открой http://localhost:4200
```

---

## **🌐 Деплой**

**bash**

Copy

```
ng build --configuration production
firebase deploy
```

---

## **🔐 Настройка Firebase**

1. Создайте проект в [Firebase Console](https://console.firebase.google.com/)

2. Включите **Authentication --> Google**

3. В разделе **Firestore --> Rules** установите:

**JavaScript**

Copy

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

1. Скопируйте конфиг в `src/environments/environment.ts`

---

## 
