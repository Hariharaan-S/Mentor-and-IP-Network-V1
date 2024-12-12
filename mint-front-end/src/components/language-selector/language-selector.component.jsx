import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('en');

    const languages = [
        { code: "en", lang: "English" },
        { code: "fr", lang: "French" },
        { code: "hi", lang: "Hindi" },
        { code: "gu", lang: "Gujarati" },
    ];

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [i18n, language]);

    return (
        <div className="btn-container">
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((lng) => (
                    <option key={lng.code} value={lng.code}>
                        {lng.lang}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
