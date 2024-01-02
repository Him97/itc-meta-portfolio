import * as React from 'react';
import { NativeSelect } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import i18n from '../../i18n';
import { useLocale } from '../hooks/useLocale';
import { LanguageType } from '../context/localeContext';
import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
	const { t } = useTranslation();
	const { language, setLanguage } = useLocale();

	const chooseLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		const selectedLanguage = event.target.value as LanguageType;
		i18n.changeLanguage(event.target.value);
		setLanguage(selectedLanguage);
	};

	return (
		<NativeSelect
			IconComponent={TranslateIcon}
			id='language'
			name='language'
			title='language'
			aria-label='language'
			onChange={chooseLanguage}
			color='primary'
			defaultValue={language || ''}
		>
			<option disabled value=''>
				{t('select-lang')}
			</option>
			<option value={'en'}>English</option>
			<option value={'zh_hans'}>简体中文</option>
			<option value={'zh_hant'}>正體中文</option>
			<option value={'he'}>עברית</option>
		</NativeSelect>
	);
}
