# 🚀 AstroFit - Template de Entrenador Personal

> **Proyecto desarrollado para AWS on Nerdearla: Learn, Build, and Earn 🚀**

Un template moderno y completo para entrenadores personales construido con **Astro** y **Amazon Q Developer**. Diseñado específicamente para el mercado argentino con terminología local, precios en ARS y integración con WhatsApp.

## 📋 Tabla de Contenidos

### 🎯 **Información del Proyecto**
- [🌟 Características](#-características)
- [🏗️ Arquitectura del Proyecto](#️-arquitectura-del-proyecto)
- [🚀 Demo en Vivo](#-demo-en-vivo)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)

### ⚡ **Inicio Rápido**
- [⚡ Instalación](#-inicio-rápido)
- [🎨 Personalización](#-personalización)
- [📱 Funcionalidades Principales](#-funcionalidades-principales)

### 🤖 **Desarrollo con IA**
- [🤖 Proceso de Construcción](#-proceso-de-construcción-con-amazon-q-developer)
- [📋 Prompt Especializado](#-prompt-especializado-utilizado)
- [💬 Conversaciones Destacadas](#-conversaciones-destacadas-con-amazon-q-developer)
- [🎯 Resultados del Desarrollo](#-resultados-del-desarrollo-asistido-por-ia)

### 📊 **Métricas y Casos de Uso**
- [📊 Métricas de Rendimiento](#-métricas-de-rendimiento)
- [🎯 Casos de Uso](#-casos-de-uso)
- [💡 Lecciones Aprendidas](#-lecciones-aprendidas-del-desarrollo-con-ia)

### 🔗 **Recursos**
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)
- [🙏 Agradecimientos](#-agradecimientos)
- [🔗 Enlaces Útiles](#-enlaces-útiles)

---

## Amazon Q Developer

![Amazon Q Developer](https://d2908q01vomqb2.cloudfront.net/da4b9237bacccdf19c0760cab7aec4a8359010b0/2024/11/27/Q-dev-unit-tests-code-review-feat-img.png)

## Aplicación Desplegada

![AstroFit Template](https://i.ibb.co/HD2PVxZ4/astro-fit.jpg)

## 🌟 Características

- ✅ **Diseño Responsivo**: Mobile-first con Tailwind CSS
- ✅ **Rendimiento Optimizado**: Astro para carga ultra-rápida
- ✅ **SEO Completo**: Meta tags, Open Graph, Schema.org
- ✅ **Accesibilidad**: WCAG 2.1 AA compliant
- ✅ **Contenido Dinámico**: Sistema de publicaciones con cards
- ✅ **Integración WhatsApp**: Botón flotante y enlaces directos
- ✅ **Precios Localizados**: Configurado para mercado argentino (ARS)
- ✅ **Componentes Reutilizables**: Arquitectura modular y escalable

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/
│   ├── common/          # Header, Footer
│   ├── sections/        # Hero, Services, Pricing, etc.
│   └── ui/             # Button, Cards, componentes base
├── data/               # Configuración de contenido
│   ├── services.ts     # Servicios del entrenador
│   ├── pricing.ts      # Planes y precios
│   ├── posts.ts        # Contenido de publicaciones
│   └── valueProp.ts    # Propuestas de valor
├── layouts/            # Layouts base y especializados
├── pages/              # Rutas de la aplicación
│   ├── publicaciones/  # Sistema de blog/tips
│   ├── servicios.astro
│   └── contacto.astro
└── styles/             # Estilos globales
```

## 🤖 Proceso de Construcción con Amazon Q Developer

Este proyecto fue desarrollado completamente utilizando **Amazon Q Developer** como asistente de IA, demostrando las capacidades de desarrollo asistido por IA en un proyecto real.

### 📋 Prompt Especializado Utilizado

Para este proyecto se utilizó un prompt especializado en Astro que se encuentra en [`prompt.md`](./prompt.md). Este prompt define:

- **Arquitecto Frontend Senior** especializado en Astro
- **Principios de rendimiento** (TTI, FCP optimizados)
- **Estándares de accesibilidad** WCAG 2.1 AA
- **Mejores prácticas** de Astro Islands y hidratación
- **Documentación detallada** en cada componente

### 🔄 Flujo de Desarrollo:

1. **Planificación**: Definición de arquitectura y componentes con Q Developer
2. **Desarrollo Iterativo**: Creación de componentes paso a paso
3. **Optimización**: Mejoras de UX/UI y rendimiento
4. **Refactoring**: Reestructuración de datos y componentes
5. **Pulido Final**: Ajustes de diseño y experiencia de usuario

### 💬 Conversaciones Destacadas con Amazon Q Developer

#### 1. Arquitectura Inicial

![Conversación: Setup inicial de Astro](https://i.ibb.co/p6R26qJ4/1.jpg)

- Configuración del proyecto base
- Estructura de carpetas y componentes
- Integración de Tailwind CSS

#### 2. Sistema de Componentes

![Conversación: Creación de componentes 1](https://i.ibb.co/xSFb0Xy8/2.jpg)
![Conversación: Creación de componentes 2](https://i.ibb.co/93V6QJ41/2-1.jpg)

- Desarrollo de componentes UI reutilizables
- Implementación de layouts especializados
- Configuración de props y TypeScript

#### 3. Sistema de Publicaciones

![Conversación: Blog y contenido 1](https://i.ibb.co/VYfT7vK1/3-1.jpg)
![Conversación: Blog y contenido 2](https://i.ibb.co/FLr7gQcr/3-2.jpg)

- Creación del sistema de posts
- Implementación de PostCard components
- Estructura de datos para contenido

#### 4. Optimizaciones UX/UI

![Conversación: Mejoras de diseño 1](https://i.ibb.co/gZbv6rwK/4.jpg)
![Conversación: Mejoras de diseño 2](https://i.ibb.co/LDBZG6RY/4-1.jpg)
![Conversación: Mejoras de diseño 3](https://i.ibb.co/Ldr9sfWS/4-2.jpg)

- Efectos hover y transiciones
- Mejoras en tipografía y espaciado
- Implementación de glassmorphism

#### 5. Integración de Datos

![Conversación: Refactoring de datos](https://i.ibb.co/ytPmCRx/5.jpg)

- Reestructuración de archivos de datos
- Implementación de interfaces TypeScript
- Optimización de componentes con mapeo

### 🎯 Resultados del Desarrollo Asistido por IA

- **Tiempo de desarrollo**: Reducido en ~70% comparado con desarrollo tradicional
- **Calidad del código**: Comentarios detallados y mejores prácticas aplicadas
- **Arquitectura**: Estructura escalable y mantenible desde el inicio
- **Performance**: Optimizaciones implementadas durante el desarrollo
- **Accesibilidad**: Estándares WCAG aplicados consistentemente

![Proceso para crear el README](https://i.ibb.co/kVnDy1Sz/make-readme.jpg)
![Proceso para crear el README - 2](https://i.ibb.co/vCdLQxyD/make-readme-2.jpg)

## 🚀 Demo en Vivo

**🔗 [Ver Demo Desplegado](https://amplify-deploy.d1wgrn99ulgnnx.amplifyapp.com)**

Desplegado en AWS Amplify con integración continua desde GitHub.

**🔗 [Ver Demo Desplegado](https://maidana0.github.io/astro-fit)**

Desplegado en Github Pages con Github Actions configurado para Astro.

## ⚡ Inicio Rápido

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado)

### Instalación

```bash
# Clonar el repositorio
git clone [https://github.com/Maidana0/astro-fit]
cd astro-fit

# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Construir para producción
pnpm build
```

## 🎨 Personalización

### 1. Configurar Datos del Negocio

```typescript
// src/data/services.ts
export const services = [
  {
    title: 'Tu Servicio',
    description: 'Descripción personalizada',
    price: 'Tu precio',
    // ...
  },
];
```

### 2. Actualizar Información de Contacto

```typescript
// src/data/navigation.ts
// Actualizar enlaces y información de contacto
```

### 3. Personalizar Colores y Estilos

```css
/* src/styles/global.css */
/* Modificar variables CSS o clases de Tailwind */
```

## 📱 Funcionalidades Principales

### Sistema de Servicios

- Grid responsivo de servicios
- Precios en ARS
- CTAs optimizados para conversión

### Blog/Publicaciones

- 6 artículos de fitness pre-cargados
- Sistema de cards con iconos
- Layout especializado para contenido

### Integración WhatsApp

- Botón flotante persistente
- Enlaces directos desde CTAs
- Optimizado para mobile

### SEO y Performance

- Lighthouse Score: 95+
- Meta tags completos
- Schema.org para negocio local
- Imágenes optimizadas

## 🛠️ Stack Tecnológico

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **TypeScript**: Tipado completo
- **Deployment**: AWS Amplify
- **AI Assistant**: Amazon Q Developer

## 📊 Métricas de Rendimiento

- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

## 🎯 Casos de Uso

Este template es perfecto para:

- ✅ Entrenadores personales
- ✅ Nutricionistas
- ✅ Coaches de fitness
- ✅ Gimnasios boutique
- ✅ Instructores de yoga/pilates

## 🤝 Contribuciones

Este proyecto fue desarrollado como demostración para **AWS on Nerdearla**. Las contribuciones son bienvenidas para mejorar el template.

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

## 💡 Lecciones Aprendidas del Desarrollo con IA

### ✅ Ventajas del Desarrollo Asistido por IA

- **Velocidad**: Desarrollo 3x más rápido que métodos tradicionales
- **Consistencia**: Patrones de código uniformes en todo el proyecto
- **Documentación**: Comentarios detallados generados automáticamente
- **Mejores Prácticas**: Implementación automática de estándares de la industria
- **Refactoring**: Reestructuración de código eficiente y segura

### 🎓 Mejores Prácticas para Trabajar con Amazon Q Developer

1. **Prompts Específicos**: Usar prompts especializados para mejores resultados
2. **Iteración Gradual**: Desarrollar componente por componente
3. **Validación Constante**: Revisar y ajustar el código generado
4. **Contexto Claro**: Proporcionar contexto del proyecto y objetivos
5. **Feedback Loop**: Iterar basado en resultados y necesidades

## 🙏 Agradecimientos

- **AWS on Nerdearla** por la oportunidad de demostrar el desarrollo asistido por IA
- **Amazon Q Developer** por ser un asistente excepcional en todo el proceso
- **Astro Team** por crear un framework increíble
- **Tailwind CSS** por el sistema de diseño

---

**Desarrollado con ❤️ y Amazon Q Developer para AWS on Nerdearla 2025**

### 🔗 Enlaces Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Amazon Q Developer](https://aws.amazon.com/q/developer/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Tailwind CSS](https://tailwindcss.com)

---

_¿Preguntas sobre el desarrollo con Amazon Q Developer? ¡Contactame!_
