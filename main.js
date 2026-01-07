tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            colors: {
                royal: { 800: '#001b3d', 900: '#001229' },
                gold: { 
                    100: '#FCF6BA', 
                    300: '#FBF5B7', 
                    400: '#BF953F', 
                    500: '#B38728', 
                    600: '#AA771C' 
                },
                surface: '#f8fafc'
            },
            animation: {
                'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        }
    }
}
