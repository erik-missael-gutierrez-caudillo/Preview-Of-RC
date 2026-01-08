# Rente Confort - Digital Experience Platform

## Overview

Rente Confort is a luxury event furniture and equipment rental service website based in León, Guanajuato, Mexico. The platform serves as a premium digital experience for clients seeking high-end event solutions including structural tents, furniture, and complete event setups.

The application is built as a modern, single-page marketing website with:
- Premium visual aesthetics targeting luxury clientele
- Interactive product catalog and quotation system
- AI-powered chatbot for customer engagement
- Social proof integration with customer testimonials
- Mobile-responsive design with conversion-focused UX

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Build Tool**: Vite 5.4.x for fast development and optimized production builds
- **Styling**: Tailwind CSS loaded via CDN with custom configuration extending the default theme
- **Typography**: Google Fonts (Playfair Display for serif headings, Inter for sans-serif body text)
- **Icons**: Boxicons and Font Awesome for iconography
- **JavaScript**: Vanilla ES6 modules, no frontend framework

### Design System
- **Color Palette**: Gold metallic gradients (#BF953F, #FCF6BA, #B38728), Royal Blue/Black (#001229, #001b3d), and neutral whites/grays
- **Visual Effects**: CSS gradients for metallic textures, smooth scroll behavior, fade-in animations
- **Components**: Custom-styled cards with soft shadows, glass morphism navigation, responsive mobile menu

### Application Structure
- `index.html` - Main single-page application with all sections (Hero, Collection, Quotation, Testimonials, FAQ)
- `main.js` - Tailwind configuration extending theme with custom colors, fonts, and animations
- `script.js` - Core application logic including inventory management, cart system, chat functionality, and UI interactions
- `style.css` - Custom CSS extending Tailwind with metallic gradients and luxury styling

### Key Features Implementation
- **Product Catalog**: JavaScript-based inventory system with package definitions
- **Quotation System**: Interactive cart with quantity controls, localStorage persistence
- **Chat System**: State machine-based conversational flow with lead scoring and psychographic segmentation
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling

### State Management
- Application state managed via JavaScript module-level variables
- Cart data persisted to localStorage for session continuity
- Chat state tracks user journey, lead scoring, and conversation context

## External Dependencies

### CDN Dependencies
- **Tailwind CSS**: Loaded via CDN (cdn.tailwindcss.com) - utility-first CSS framework
- **Google Fonts**: Playfair Display and Inter font families
- **Boxicons**: Icon library (unpkg.com)
- **Font Awesome 6.4.0**: Additional icon set (cdnjs.cloudflare.com)
- **Popper.js**: Tooltip/popover positioning (unpkg.com)

### Build Dependencies
- **Vite**: Development server and build tool (no additional plugins configured)

### Planned Integrations (from README)
- WhatsApp Business API for VIP customer handoff
- Google Maps/Waze for location services
- Instagram feed integration for social proof
- Real-time inventory management system
- Heat mapping and analytics for user behavior tracking