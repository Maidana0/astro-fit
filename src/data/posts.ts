// Posts content data for publication pages
// Fitness tips and educational content

export interface PostSection {
  title: string;
  content: string;
  icon?: string;
}

export interface PostContent {
  slug: string;
  title: string;
  description: string;
  gradient: string;
  sections: PostSection[];
}

export const posts: PostContent[] = [
  {
    slug: 'rutina-piernas',
    title: 'Rutina de Piernas',
    description: '5 ejercicios para fortalecer tus piernas en casa',
    gradient: 'from-violet-400 to-purple-500',
    sections: [
      {
        title: '1. Sentadillas',
        icon: '🏋️',
        content: '<p><strong>3 series de 15 repeticiones</strong></p><ul><li>Mantené la espalda recta y bajá hasta que tus muslos estén paralelos al suelo</li><li>Respirá profundo en cada repetición</li></ul>'
      },
      {
        title: '2. Zancadas',
        icon: '🦵',
        content: '<p><strong>3 series de 12 por pierna</strong></p><ul><li>Paso amplio hacia adelante, rodilla a 90 grados</li><li>Alternás las piernas en cada repetición</li></ul>'
      },
      {
        title: '3. Peso Muerto con Una Pierna',
        icon: '⚖️',
        content: '<p><strong>3 series de 10 por pierna</strong></p><ul><li>Equilibrio y fuerza en glúteos e isquiotibiales</li><li>Mantené el core activado</li></ul>'
      },
      {
        title: '4. Sentadilla Sumo',
        icon: '🤸',
        content: '<p><strong>3 series de 15 repeticiones</strong></p><ul><li>Pies más separados que el ancho de hombros</li><li>Enfoque en glúteos y cara interna de muslos</li></ul>'
      },
      {
        title: '5. Elevación de Talones',
        icon: '👠',
        content: '<p><strong>3 series de 20 repeticiones</strong></p><ul><li>Fortalece pantorrillas</li><li>Podés usar escalón para mayor rango</li></ul>'
      },
      {
        title: 'Consejos Importantes',
        icon: '💡',
        content: '<ul><li>Calentá 5-10 minutos antes de empezar</li><li>Descansá 30-60 segundos entre series</li><li>Hidratate durante el entrenamiento</li><li>Escuchá a tu cuerpo y progresá gradualmente</li></ul>'
      }
    ]
  },
  {
    slug: 'nutricion-pre-entreno',
    title: 'Nutrición Pre-Entreno',
    description: 'Qué comer antes de entrenar para máximo rendimiento',
    gradient: 'from-purple-400 to-indigo-500',
    sections: [
      {
        title: 'Timing Ideal',
        icon: '⏰',
        content: '<ul><li><strong>1-2 horas antes:</strong> Comida completa</li><li><strong>30-60 minutos antes:</strong> Snack ligero</li><li><strong>15-30 minutos antes:</strong> Solo líquidos</li></ul>'
      },
      {
        title: 'Comidas Completas (1-2h antes)',
        icon: '🍽️',
        content: '<ul><li>Avena con banana y miel</li><li>Tostadas integrales con palta</li><li>Yogur griego con frutas</li><li>Arroz con pollo y verduras</li></ul>'
      },
      {
        title: 'Snacks Rápidos (30-60min antes)',
        icon: '🍌',
        content: '<ul><li>Banana con mantequilla de maní</li><li>Smoothie de frutas</li><li>Barrita de cereales</li><li>Puñado de dátiles</li></ul>'
      },
      {
        title: 'Hidratación',
        icon: '💧',
        content: '<ul><li><strong>2-3 horas antes:</strong> 500ml de agua</li><li><strong>30 minutos antes:</strong> 200ml de agua</li><li><strong>Durante el entreno:</strong> Sorbos pequeños</li></ul>'
      },
      {
        title: 'Qué Evitar',
        icon: '❌',
        content: '<ul><li>Comidas muy grasosas</li><li>Exceso de fibra</li><li>Alimentos nuevos o desconocidos</li><li>Grandes cantidades de líquido justo antes</li></ul>'
      }
    ]
  },
  {
    slug: 'ejercicios-core',
    title: 'Core Fuerte',
    description: 'Rutina de 10 minutos para fortalecer tu abdomen',
    gradient: 'from-indigo-400 to-blue-500',
    sections: [
      {
        title: 'Calentamiento (2 minutos)',
        icon: '🔥',
        content: '<ul><li>Rotaciones de cadera: 30 segundos</li><li>Gato-vaca: 30 segundos</li><li>Respiración diafragmática: 1 minuto</li></ul>'
      },
      {
        title: 'Ronda 1',
        icon: '1️⃣',
        content: '<ul><li>Plancha: 30 segundos</li><li>Mountain climbers: 30 segundos</li><li>Descanso: 1 minuto</li></ul>'
      },
      {
        title: 'Ronda 2',
        icon: '2️⃣',
        content: '<ul><li>Plancha lateral (cada lado): 15 segundos</li><li>Bicicleta: 30 segundos</li><li>Descanso: 1 minuto</li></ul>'
      },
      {
        title: 'Ronda 3',
        icon: '3️⃣',
        content: '<ul><li>Dead bug: 30 segundos</li><li>Russian twists: 30 segundos</li><li>Descanso: 1 minuto</li></ul>'
      },
      {
        title: 'Enfriamiento (2 minutos)',
        icon: '🧘',
        content: '<ul><li>Estiramiento de gato: 30 segundos</li><li>Posición del niño: 30 segundos</li><li>Respiración profunda: 1 minuto</li></ul>'
      },
      {
        title: 'Consejos Técnicos',
        icon: '💡',
        content: '<ul><li>Mantené la respiración constante</li><li>Calidad sobre cantidad</li><li>Core siempre activado</li><li>No fuerces el cuello</li></ul>'
      }
    ]
  },
  {
    slug: 'hidratacion-fitness',
    title: 'Hidratación Correcta',
    description: 'Cuánta agua tomar según tu tipo de entrenamiento',
    gradient: 'from-blue-400 to-cyan-500',
    sections: [
      {
        title: 'Necesidades Básicas Diarias',
        icon: '💧',
        content: '<ul><li><strong>Hombres:</strong> 3.7 litros por día</li><li><strong>Mujeres:</strong> 2.7 litros por día</li><li><strong>Incluye:</strong> Agua, infusiones, frutas, sopas</li></ul>'
      },
      {
        title: 'Entrenamiento de Fuerza (60-90min)',
        icon: '🏋️',
        content: '<ul><li><strong>Antes:</strong> 500ml (2-3h previas)</li><li><strong>Durante:</strong> 150-200ml cada 15-20min</li><li><strong>Después:</strong> 150% del peso perdido en sudor</li></ul>'
      },
      {
        title: 'Cardio Moderado (30-60min)',
        icon: '🏃',
        content: '<ul><li><strong>Antes:</strong> 300-500ml</li><li><strong>Durante:</strong> 100-150ml cada 15min</li><li><strong>Después:</strong> Reposición gradual</li></ul>'
      },
      {
        title: 'Señales de Deshidratación',
        icon: '⚠️',
        content: '<ul><li>Sed intensa</li><li>Orina amarilla oscura</li><li>Fatiga temprana</li><li>Calambres musculares</li><li>Mareos o dolor de cabeza</li></ul>'
      },
      {
        title: 'Bebida Deportiva Casera',
        icon: '🥤',
        content: '<ul><li>1 litro de agua</li><li>1/4 cucharadita de sal</li><li>2 cucharadas de miel</li><li>Jugo de 1 limón</li><li>Pizca de bicarbonato</li></ul>'
      }
    ]
  },
  {
    slug: 'descanso-recuperacion',
    title: 'Descanso Activo',
    description: 'La importancia del descanso en tu transformación',
    gradient: 'from-cyan-400 to-teal-500',
    sections: [
      {
        title: '¿Qué es el Descanso Activo?',
        icon: '🔄',
        content: '<p>Actividad de baja intensidad que promueve la recuperación sin generar fatiga adicional.</p>'
      },
      {
        title: 'Beneficios Clave',
        icon: '✨',
        content: '<ul><li>Mejora la circulación sanguínea</li><li>Reduce la rigidez muscular</li><li>Acelera la eliminación de toxinas</li><li>Mantiene la movilidad articular</li><li>Reduce el estrés mental</li></ul>'
      },
      {
        title: 'Días de Descanso Total',
        icon: '🧘',
        content: '<ul><li>Caminata suave (20-30min)</li><li>Yoga restaurativo</li><li>Estiramientos dinámicos</li><li>Natación recreativa</li><li>Meditación o mindfulness</li></ul>'
      },
      {
        title: 'Entre Entrenamientos Intensos',
        icon: '⚡',
        content: '<ul><li>Movilidad articular (10min)</li><li>Foam rolling</li><li>Ejercicios de respiración</li><li>Caminata en naturaleza</li><li>Baño de inmersión</li></ul>'
      },
      {
        title: 'Señales de Sobreentrenamiento',
        icon: '⚠️',
        content: '<ul><li>Fatiga constante</li><li>Disminución del rendimiento</li><li>Irritabilidad</li><li>Insomnio</li><li>Lesiones frecuentes</li><li>Pérdida de motivación</li></ul>'
      }
    ]
  },
  {
    slug: 'motivacion-fitness',
    title: 'Mantené la Motivación',
    description: '5 estrategias para no abandonar tus objetivos',
    gradient: 'from-teal-400 to-green-500',
    sections: [
      {
        title: '1. Objetivos SMART',
        icon: '🎯',
        content: '<ul><li><strong>Específicos:</strong> "Perder 5kg" vs "bajar de peso"</li><li><strong>Medibles:</strong> Usa báscula, fotos, medidas</li><li><strong>Alcanzables:</strong> Realistas según tu situación</li><li><strong>Relevantes:</strong> Importantes para vos</li><li><strong>Temporales:</strong> Con fecha límite clara</li></ul>'
      },
      {
        title: '2. Sistema de Recompensas',
        icon: '🎁',
        content: '<p><strong>Micro-recompensas (semanales):</strong></p><ul><li>Ropa deportiva nueva</li><li>Masaje relajante</li><li>Película favorita</li><li>Comida especial (saludable)</li></ul>'
      },
      {
        title: '3. Comunidad de Apoyo',
        icon: '👥',
        content: '<ul><li>Entrenamiento con amigos</li><li>Grupos de WhatsApp fitness</li><li>Redes sociales motivacionales</li><li>Compañero de accountability</li><li>Entrenador personal</li></ul>'
      },
      {
        title: '4. Seguimiento Visual',
        icon: '📊',
        content: '<ul><li><strong>Fotos de progreso:</strong> Misma pose, luz, ropa</li><li><strong>Medidas corporales:</strong> Semanal o quincenal</li><li><strong>Diario de entrenamientos:</strong> Apps o cuaderno</li><li><strong>Calendario de hábitos:</strong> Marca días completados</li></ul>'
      },
      {
        title: '5. Flexibilidad Mental',
        icon: '🧠',
        content: '<p><strong>Cuando falles:</strong></p><ul><li>No te castigues mentalmente</li><li>Volvé al plan al día siguiente</li><li>Analizá qué causó la falla</li><li>Ajustá el plan si es necesario</li><li>Celebrá los pequeños logros</li></ul>'
      }
    ]
  }
];

// Helper function to get post by slug
export const getPostBySlug = (slug: string): PostContent | undefined => {
  return posts.find(post => post.slug === slug);
};