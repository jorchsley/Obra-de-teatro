# 🎭 Sitio Web de Obra de Teatro

Un sitio web moderno y responsivo para promocionar una obra de teatro, con navegación flotante y múltiples secciones informativas.

## 📋 Características

### ✨ **Funcionalidades Principales**
- **Header flotante** con navegación que se adapta al scroll
- **Contador regresivo** para el estreno de la obra
- **Formulario de registro** para boletos con generación de folio
- **Diseño responsivo** optimizado para móviles, tablets y desktop
- **Animaciones CSS** suaves y profesionales
- **Iconografía** con Font Awesome

### 🎨 **Páginas Incluidas**
1. **Inicio** (`index.html`) - Página principal con descripción y registro
2. **Actores** (`actores.html`) - Información del elenco y equipo técnico
3. **Escenografía** (`escenografia.html`) - Diseño de escena y elementos visuales
4. **Documentación** (`documentacion.html`) - Recursos y materiales promocionales

### 🛠️ **Tecnologías Utilizadas**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript ES6+** - Funcionalidad interactiva
- **Font Awesome** - Iconografía profesional
- **Google Fonts** - Tipografía Poppins

## 🚀 Instalación y Uso

### **Requisitos**
- Navegador web moderno
- Servidor web local (opcional, para desarrollo)

### **Pasos de Instalación**
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio está funcionando

### **Para Desarrollo Local**
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Luego abre http://localhost:8000
```

## 📁 Estructura del Proyecto

```
web/
├── index.html              # Página principal
├── actores.html            # Página del elenco
├── escenografia.html       # Página de escenografía
├── documentacion.html      # Página de documentación
├── style.css              # Estilos CSS
├── script.js              # JavaScript funcional
├── apps_script.gs         # Google Apps Script (backend)
└── README.md              # Este archivo
```

## 🎯 Funcionalidades Específicas

### **Header Flotante**
- Se mantiene fijo en la parte superior
- Cambia de tamaño al hacer scroll
- Navegación con indicador de página activa
- Efectos hover en los enlaces

### **Contador Regresivo**
- Cuenta hacia el estreno de la obra
- Actualización en tiempo real
- Formato: días, horas, minutos, segundos

### **Formulario de Registro**
- Validación de campos requeridos
- Generación automática de folio
- Integración preparada para Google Apps Script

### **Diseño Responsivo**
- Adaptable a todos los dispositivos
- Menú colapsable en móviles
- Imágenes optimizadas

## 🎨 Personalización

### **Colores Principales**
- **Primario**: `#667eea` (Azul)
- **Secundario**: `#764ba2` (Púrpura)
- **Acento**: `#ffd700` (Dorado)

### **Tipografía**
- **Principal**: Poppins (Google Fonts)
- **Iconos**: Font Awesome 6.4.0

## 🔧 Configuración

### **Cambiar Fecha de Estreno**
Edita la línea 4 en `script.js`:
```javascript
const estreno = new Date("2025-08-07T09:30:00").getTime();
```

### **Modificar Información de Contacto**
Actualiza los datos en `documentacion.html` en la sección "Información de Contacto".

### **Personalizar Colores**
Modifica las variables de color en `style.css`:
```css
/* Colores principales */
--primary-color: #667eea;
--secondary-color: #764ba2;
--accent-color: #ffd700;
```

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Móviles iOS/Android

## 🚀 Próximas Mejoras

- [ ] Integración con Google Apps Script para procesar registros
- [ ] Galería de imágenes con lightbox
- [ ] Sistema de reservas en línea
- [ ] Integración con redes sociales
- [ ] PWA (Progressive Web App)
- [ ] Sistema de notificaciones push

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:
- **Email**: info@obrateatro.com
- **Teléfono**: +52 55 1234 5678

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para el mundo del teatro** 