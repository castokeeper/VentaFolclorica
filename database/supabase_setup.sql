-- ========================================
-- Script SQL para Supabase
-- VentaFolclórica - E-commerce Database
-- ========================================

-- ========================================
-- 1. TABLA DE CATEGORÍAS
-- ========================================
CREATE TABLE IF NOT EXISTS categorias (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    imagen_url TEXT,
    slug VARCHAR(100) UNIQUE NOT NULL,
    activo BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 2. TABLA DE PRODUCTOS
-- ========================================
CREATE TABLE IF NOT EXISTS productos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    categoria_id UUID REFERENCES categorias(id) ON DELETE SET NULL,
    precio DECIMAL(10, 2) NOT NULL,
    precio_anterior DECIMAL(10, 2),
    stock INTEGER DEFAULT 0,
    imagen_url TEXT,
    imagenes_adicionales TEXT[], -- Array de URLs
    badge VARCHAR(50), -- 'Nuevo', 'Oferta', 'Popular', etc.
    estado VARCHAR(20) DEFAULT 'activo' CHECK (estado IN ('activo', 'inactivo', 'agotado')),
    sku VARCHAR(100) UNIQUE,
    peso DECIMAL(8, 2), -- En gramos
    dimensiones JSONB, -- {largo, ancho, alto}
    destacado BOOLEAN DEFAULT false,
    valoracion_promedio DECIMAL(3, 2) DEFAULT 0,
    total_valoraciones INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 3. TABLA DE CLIENTES
-- ========================================
CREATE TABLE IF NOT EXISTS clientes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    fecha_nacimiento DATE,
    direccion_envio JSONB, -- {calle, ciudad, estado, cp, pais}
    direccion_facturacion JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 4. TABLA DE ÓRDENES
-- ========================================
CREATE TABLE IF NOT EXISTS ordenes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    cliente_id UUID REFERENCES clientes(id) ON DELETE SET NULL,
    numero_orden VARCHAR(50) UNIQUE NOT NULL,
    estado VARCHAR(30) DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado')),
    subtotal DECIMAL(10, 2) NOT NULL,
    descuento DECIMAL(10, 2) DEFAULT 0,
    envio DECIMAL(10, 2) DEFAULT 0,
    impuestos DECIMAL(10, 2) DEFAULT 0,
    total DECIMAL(10, 2) NOT NULL,
    metodo_pago VARCHAR(50),
    direccion_envio JSONB NOT NULL,
    notas TEXT,
    fecha_entrega_estimada DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 5. TABLA DE ITEMS DE ORDEN
-- ========================================
CREATE TABLE IF NOT EXISTS orden_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    orden_id UUID REFERENCES ordenes(id) ON DELETE CASCADE,
    producto_id UUID REFERENCES productos(id) ON DELETE SET NULL,
    nombre_producto VARCHAR(255) NOT NULL, -- Por si el producto se elimina
    cantidad INTEGER NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ========================================
-- 6. TABLA DE VALORACIONES
-- ========================================
CREATE TABLE IF NOT EXISTS valoraciones (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    producto_id UUID REFERENCES productos(id) ON DELETE CASCADE,
    cliente_id UUID REFERENCES clientes(id) ON DELETE CASCADE,
    calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5),
    comentario TEXT,
    verificado BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(producto_id, cliente_id)
);

-- ========================================
-- 7. ÍNDICES PARA OPTIMIZACIÓN
-- ========================================
CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_estado ON productos(estado);
CREATE INDEX idx_productos_destacado ON productos(destacado);
CREATE INDEX idx_ordenes_cliente ON ordenes(cliente_id);
CREATE INDEX idx_ordenes_estado ON ordenes(estado);
CREATE INDEX idx_orden_items_orden ON orden_items(orden_id);
CREATE INDEX idx_valoraciones_producto ON valoraciones(producto_id);

-- ========================================
-- 8. TRIGGERS PARA ACTUALIZACIÓN AUTOMÁTICA
-- ========================================

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger a tablas relevantes
CREATE TRIGGER update_categorias_updated_at BEFORE UPDATE ON categorias
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_productos_updated_at BEFORE UPDATE ON productos
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_clientes_updated_at BEFORE UPDATE ON clientes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ordenes_updated_at BEFORE UPDATE ON ordenes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- 9. FUNCIÓN PARA ACTUALIZAR VALORACIÓN PROMEDIO
-- ========================================
CREATE OR REPLACE FUNCTION actualizar_valoracion_producto()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE productos
    SET 
        valoracion_promedio = (
            SELECT COALESCE(AVG(calificacion), 0)
            FROM valoraciones
            WHERE producto_id = NEW.producto_id
        ),
        total_valoraciones = (
            SELECT COUNT(*)
            FROM valoraciones
            WHERE producto_id = NEW.producto_id
        )
    WHERE id = NEW.producto_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_actualizar_valoracion
AFTER INSERT OR UPDATE OR DELETE ON valoraciones
FOR EACH ROW EXECUTE FUNCTION actualizar_valoracion_producto();

-- ========================================
-- 10. POLÍTICAS DE SEGURIDAD RLS (Row Level Security)
-- ========================================

-- Habilitar RLS en todas las tablas
ALTER TABLE categorias ENABLE ROW LEVEL SECURITY;
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE ordenes ENABLE ROW LEVEL SECURITY;
ALTER TABLE orden_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE valoraciones ENABLE ROW LEVEL SECURITY;

-- Políticas para CATEGORÍAS (lectura pública, escritura solo autenticados)
CREATE POLICY "Categorías públicas para lectura" ON categorias
    FOR SELECT USING (true);

CREATE POLICY "Categorías solo admin puede modificar" ON categorias
    FOR ALL USING (auth.role() = 'authenticated');

-- Políticas para PRODUCTOS (lectura pública, escritura solo autenticados)
CREATE POLICY "Productos públicos para lectura" ON productos
    FOR SELECT USING (true);

CREATE POLICY "Productos solo admin puede modificar" ON productos
    FOR ALL USING (auth.role() = 'authenticated');

-- Políticas para CLIENTES (cada usuario ve solo su información)
CREATE POLICY "Clientes ven solo su info" ON clientes
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Clientes pueden actualizar su info" ON clientes
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Clientes pueden crear su perfil" ON clientes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Políticas para ÓRDENES (usuarios ven solo sus órdenes)
CREATE POLICY "Órdenes - usuarios ven solo las suyas" ON ordenes
    FOR SELECT USING (
        cliente_id IN (
            SELECT id FROM clientes WHERE user_id = auth.uid()
        )
    );

-- Políticas para VALORACIONES (lectura pública, escritura autenticada)
CREATE POLICY "Valoraciones públicas para lectura" ON valoraciones
    FOR SELECT USING (true);

CREATE POLICY "Usuarios pueden crear valoraciones" ON valoraciones
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- ========================================
-- 11. DATOS INICIALES - CATEGORÍAS
-- ========================================
INSERT INTO categorias (nombre, descripcion, slug, imagen_url) VALUES
    ('Huaraches', 'Calzado artesanal tradicional mexicano', 'huaraches', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2'),
    ('Vestidos', 'Vestidos regionales y trajes folclóricos', 'vestidos', 'https://images.unsplash.com/photo-1595777457583-95e059d581b8'),
    ('Sombreros', 'Sombreros charros y tradicionales', 'sombreros', 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff'),
    ('Accesorios', 'Rebozos, cinturones y más', 'accesorios', 'https://images.unsplash.com/photo-1610701596007-11502861dcfa'),
    ('Blusas', 'Blusas bordadas artesanales', 'blusas', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3'),
    ('Faldas', 'Faldas regionales típicas', 'faldas', 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa')
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- 12. DATOS INICIALES - PRODUCTOS EJEMPLO
-- ========================================
INSERT INTO productos (nombre, descripcion, categoria_id, precio, precio_anterior, stock, imagen_url, badge, estado, destacado) 
SELECT 
    'Huaraches Artesanales de Michoacán',
    'Huaraches hechos a mano con piel genuina de alta calidad. Diseño tradicional con suela flexible y cómoda.',
    id,
    650.00,
    850.00,
    25,
    'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    'Oferta',
    'activo',
    true
FROM categorias WHERE slug = 'huaraches'
ON CONFLICT DO NOTHING;

INSERT INTO productos (nombre, descripcion, categoria_id, precio, stock, imagen_url, badge, estado, destacado)
SELECT 
    'Vestido Jalisco Premium',
    'Vestido tradicional de Jalisco con bordados a mano. Incluye accesorios complementarios.',
    id,
    2500.00,
    10,
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
    'Nuevo',
    'activo',
    true
FROM categorias WHERE slug = 'vestidos'
ON CONFLICT DO NOTHING;

-- ========================================
-- FIN DEL SCRIPT
-- ========================================

-- Para verificar que todo se creó correctamente:
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
