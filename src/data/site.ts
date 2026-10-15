export const profile = {
	name: 'Diana Pinto',
	givenName: 'Diana',
	familyName: 'Pinto',
	username: 'soydianapinto',
	handle: '@soydianapinto',
	headline: 'Ingeniera Full-Stack & Creadora de Contenido Tech',
	jobTitle: 'Ingeniera Full-Stack y Creadora de Contenido Tech',
	description:
		'Conoce a Diana Pinto, ingeniera Full-Stack y creadora de contenido tech. Encuentra sus redes sociales, proyectos y formas de contacto.',
	title: 'Diana Pinto | Full-Stack Engineer & Tech Creator',
	/** Combined follower count across the social profiles. Last updated October 12, 2026. */
	followers: 60174,
};

export const socialLinks = [
	{
		label: 'Instagram',
		src: '/icons/instagram.svg',
		href: 'https://www.instagram.com/soydianapinto/',
	},
	{
		label: 'Facebook',
		src: '/icons/facebook.svg',
		href: 'https://www.facebook.com/soydianapinto/',
	},
	{
		label: 'LinkedIn',
		src: '/linkedin.svg',
		href: 'https://www.linkedin.com/in/soydianapinto/',
	},
	{
		label: 'YouTube',
		src: '/icons/youtube.svg',
		href: 'https://www.youtube.com/channel/UCcCb2sTaPgF4Cq7K17p4N3A',
	},
	{
		label: 'TikTok',
		src: '/icons/tiktok.svg',
		href: 'https://www.tiktok.com/@soydianapinto',
	},
	{
		label: 'GitHub',
		src: '/icons/github.svg',
		href: 'https://github.com/soydianapinto',
	},
] as const;

export const outbound = {
	aws: 'https://builder.aws.com/community/@soydianapinto/',
	nextReview: 'https://github.com/soydianapinto/nextreview/',
	repository: 'https://github.com/soydianapinto/soydianapinto.github.io',
	fable: 'https://fable.co/fabler/diana-pinto-429057031651?referralID=HZVmNglGxz',
	mentoring: 'https://www.paypal.com/ncp/payment/S9PN3T8F3NJVJ/',
	support: 'https://www.paypal.com/paypalme/soydianapinto',
	facebookSubscribe: 'https://www.facebook.com/soydianapinto/subscribe',
	collaboration: 'mailto:depa.apolinar@gmail.com?subject=Colaboraci%C3%B3n%20con%20Diana%20Pinto',
} as const;

const spotifyPlaylistId = '3KaA1cmL17vYQbxIBZ31Se';

export const spotifyPlaylist = {
	uri: `spotify:playlist:${spotifyPlaylistId}`,
	url: `https://open.spotify.com/playlist/${spotifyPlaylistId}`,
};

export const externalLinkAttrs = {
	target: '_blank',
	rel: 'noopener noreferrer',
} as const;

type ProfileLink = {
	label: string;
	href: string;
	description?: string;
	sectionLabel?: string;
};

export const profileLinks: ProfileLink[] = [
	{
		label: 'Colaboraciones y campañas',
		description: 'Contacto para marcas',
		href: outbound.collaboration,
	},
	{
		label: 'AWS Community Builder',
		description: 'Perfil de la comunidad AWS',
		href: outbound.aws,
	},
	{
		label: 'Mentorías / Tutorías',
		description: 'Acompañamiento en tecnología',
		href: outbound.mentoring,
	},
	{
		sectionLabel: 'Menciones en mis videos',
		label: 'Suscríbete a mi canal de Facebook',
		href: outbound.facebookSubscribe,
	},
	{
		label: 'Gracias por tu apoyo',
		description: 'Si te gusta mi contenido, puedes invitarme un cafesito',
		href: outbound.support,
	},
	// TODO: Restore the Cold Brew link.
];

export const projects = [
	{
		name: 'Next Review',
		description: 'Herramienta open-source para gestión de pull requests.',
		href: outbound.nextReview,
		badges: ['Browser Extension', 'Developer Tools'],
	},
	{
		name: 'Sitio personal (esta página)',
		description: 'Sitio personal construido con Astro y Tailwind CSS.',
		href: outbound.repository,
		badges: ['Astro', 'Tailwind CSS', 'GitHub Pages'],
	},
];

export function formatFollowers(total: number) {
	return `${(total / 1000).toFixed(1)}k`;
}
