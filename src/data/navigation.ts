type navigatinoItem = {
  name: string;
  href: string;
};

export const base = '/astro-fit';

export const navigation: navigatinoItem[] = [
  { name: 'Inicio', href: `${base}/#inicio` },
  { name: 'Precios', href: `${base}/#precios` },
  { name: 'Publicaciones', href: `${base}/publicaciones` },
  { name: 'Servicios', href: `${base}/servicios` },
  { name: 'Contacto', href: `${base}/contacto` },
];