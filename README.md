## 📚 Book Manager · Gestor de Libros

![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") Fullstack app to manage personal books. Allows user authentication and CRUD operations on books.  
![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Aplicación fullstack para gestionar libros personales. Permite autenticación de usuarios y operaciones CRUD sobre libros.

Built with / Desarrollada con: **Next.js**, **Supabase**, **Docker**


> [!NOTE]  
> ### 🚧 Requirements · Requisitos
> 
> - Node.js `>=18`  
> - Docker  
> - Supabase CLI (`npm install -g supabase`)  


### 📁 Run locally · Como correr en local

#### 1. Clone the repository · Clonar el repo

```bash
git clone https://github.com/mLascurain/book-manager
cd book-manager
```

#### 2. Install dependencies · Instalar dependencias

```bash
npm install
```

#### 3. Start local Supabase · Iniciar Supabase local

![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") This will spin up the database locally using Docker.  
![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Esto levanta la base de datos localmente con Docker:

```bash
npx supabase start
```

#### 4. Apply migrations · Aplicar migraciones

![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") This command applies the schema automatically from `supabase/migrations/`.  
![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Este comando aplica el esquema automáticamente desde `supabase/migrations/`.

> [!WARNING]  
> ![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") This will delete all current data. Be sure to back up if you already had records locally.</br>
> ![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Este comando elimina todos los datos actuales. Fijate de hacer backup si ya tenías registros en local.

```bash
npx supabase db reset
```

#### 5. Run the app in development · Correr la app en desarrollo

```bash
npm run dev
```

![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") This will run Next.js at [http://localhost:3000](http://localhost:3000) and Supabase Studio at [http://localhost:54323](http://localhost:54323)  
![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Esto ejecuta Next.js en [http://localhost:3000](http://localhost:3000) y Supabase Studio arranca en [http://localhost:54323](http://localhost:54323)

### 🧪 Features · Funcionalidad

 ![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom")
- ✅ User authentication with Supabase Auth
- ✅ CRUD operations on personal books
- ✅ RLS policies for data security
- ✅ Automatic migrations for reproducible environments</br>


 ![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain")
- ✅  Autenticación de usuarios con Supabase Auth
- ✅  Operaciones CRUD sobre libros personales  
- ✅  Policies con RLS para seguridad de datos 
- ✅  Migraciones automáticas para reproducibilidad del entorno


### 🐳 Docker

![United Kingdom](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/gb.png "United Kingdom") This project uses `Docker` via Supabase CLI so you can run all services easily.  
![Spain](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/es.png "Spain") Este proyecto utiliza `Docker` mediante Supabase CLI para que puedas correr todos los servicios altoque.

To stop them / Si querés frenarlos:

```bash
npx supabase stop
```
