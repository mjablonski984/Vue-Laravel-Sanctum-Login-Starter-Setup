## Laravel-Vue-SPA-Sanctum-Login-Setup
Starter setup for Vue & Laravel project with Sanctum login system
    <br>
## Setup

1. Install Composer Dependencies:
    ```
    composer install
    ```
    <br>
2. Install NPM Dependencies:
    ```
    npm install
    ```
    <br>
3. Create a new .env file (copy of env.example):
    ```
    cp .env.example .env
    ```
    <br>
4. Generate an app encryption key:
    ```
    php artisan key:generate
    ```
    <br>
5. In the .env file, add your database name, username & password. 
    <br>
6. Run migrations:
    ```
    php artisan migrate
    ```
    <br>
7. To compile assets (Mix) run :
    ```
    npm run dev
    ```
    <br>
    <br>
## Docs
- [Laravel](https://laravel.com/docs)
- [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum)
- [Vue.js](https://vuejs.org/)
- [Tailwindcss](https://tailwindcss.com/docs/installation)
    <br>
    <br>
## Starter creation guide:
1. Install laravel UI & set Vue UI
    ```
    composer require laravel/ui
    php artisan ui vue --auth - create vue ui
    ```
    <br>
2. Compile ui scafolding
    ```
    npm install && npm run dev
    ```
    <br>
3. (Optional) Install Tailwindcss 
    ```
    npm install tailwindcss vue-router
    ```
    - Next setup tailwind ( docs https://tailwindcss.com/docs/installation)
      - add imports to app.scss,
      - npx tailwindcss init  - to create tailwind.config
      - set laravel mix for scss (in webpack.mix.js)
    
    - (Optional install) To remove unused CSS in production : 
    ```
    npm install laravel-mix-purgecss --save-dev
    ```
    - Next import and add mix in webpack.mix.js
    <br>
4. Install vue-router.
   To use vue router set routes to {any} in web.php 
    <br>
5. Sanctum authentication: 
    ```
    composer require laravel/sanctum
    ```
    Next publish sanctum config and migration files:
    ```
    php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
    ```
    <br>
6. Run migrations:
    ```
    php artisan migrate
    ```
    <br>
7. In kernel.php : 
        use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;
    - Next in the same kernel.php  api array add :
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    <br>
8. Make controllers:
    ```
    php artisan make:controller RegisterController
    php artisan make:controller LoginController
    ```
    <br>
9. Create api routes