'use client';

import Link from 'next/link';
import { NativeSelect } from '@mui/material';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<NativeSelect className='flex gap-x-3'>
			{i18n.locales.map((locale) => {
				return (
					<select key={locale} title={locale}>
						<Link
							href={redirectedPathName(locale)}
							className='rounded-md border bg-black px-3 py-2 text-white'
						>
							{locale}
						</Link>
					</select>
				);
			})}
		</NativeSelect>
	);
}
