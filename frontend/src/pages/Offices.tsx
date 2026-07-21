import { useEffect, useState } from 'react';
import { api, type Office } from '../services/api';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation, getLocalizedText } from '../i18n/translations';

const DEPARTMENTS = [
  { id: '', label: 'All Departments' },
  { id: 'immigration', label: 'Immigration' },
  { id: 'drp', label: 'Registration of Persons' },
  { id: 'motor-traffic', label: 'Motor Traffic' },
  { id: 'ird', label: 'Inland Revenue' },
  { id: 'companies', label: 'Registrar of Companies' },
  { id: 'rgd', label: 'Registrar General' },
];

export function OfficesPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [offices, setOffices] = useState<Office[]>([]);
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(true);
  const [mapsKey, setMapsKey] = useState('');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    api.get('/maps/config').then(({ data }) => {
      setMapsKey(data.data.apiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '');
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const params: Record<string, string> = {};
    if (department) params.department = department;

    const fetchOffices = userLocation
      ? api.get('/maps/offices/nearby', {
          params: { lat: userLocation.lat, lng: userLocation.lng, radius: 100000 },
        })
      : api.get('/maps/offices', { params });

    fetchOffices
      .then(({ data }) => setOffices(data.data.offices))
      .catch(() => setOffices([]))
      .finally(() => setLoading(false));
  }, [department, userLocation]);

  const findNearMe = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setUserLocation(null)
    );
  };

  const getMapUrl = (office: Office) => {
    const [lng, lat] = office.location.coordinates;
    if (mapsKey && mapsKey !== 'your_google_maps_api_key_here') {
      return `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${lat},${lng}&zoom=15`;
    }
    return `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  };

  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1 className="page-header__title">{t.offices.title}</h1>
          <p className="page-header__subtitle">{t.offices.subtitle}</p>
        </div>
      </header>

      <div className="page-content container">
        <div className="flex flex-wrap gap-3 mb-6">
          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm"
            aria-label="Filter by department"
          >
            {DEPARTMENTS.map((d) => (
              <option key={d.id} value={d.id}>{d.label}</option>
            ))}
          </select>
          <button
            type="button"
            onClick={findNearMe}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dark transition-colors"
          >
            📍 {t.offices.nearMe}
          </button>
        </div>

        {loading ? (
          <p className="text-muted text-center py-12">{t.common.loading}</p>
        ) : offices.length === 0 ? (
          <p className="text-muted text-center py-12">{t.offices.noResults}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {offices.map((office) => (
              <article
                key={office._id}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <iframe
                  title={`Map of ${office.name.en}`}
                  src={getMapUrl(office)}
                  className="w-full h-48 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-5">
                  <h2 className="font-semibold text-lg text-gray-900">
                    {getLocalizedText(office.name, language)}
                  </h2>
                  <p className="text-sm text-muted mt-1">{office.address}, {office.city}</p>
                  {office.phone && (
                    <a href={`tel:${office.phone}`} className="text-sm text-primary mt-2 inline-block">
                      📞 {office.phone}
                    </a>
                  )}
                  {office.website && (
                    <a
                      href={office.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary ml-4 inline-block"
                    >
                      🌐 {t.contact.visitWebsite}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
