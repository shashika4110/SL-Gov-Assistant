import mongoose from 'mongoose';

const officeSchema = new mongoose.Schema(
  {
    name: {
      en: { type: String, required: true },
      si: String,
      ta: String,
    },
    department: {
      type: String,
      enum: [
        'immigration',
        'drp',
        'motor-traffic',
        'ird',
        'companies',
        'rgd',
        'general',
      ],
      required: true,
    },
    address: { type: String, required: true },
    city: { type: String, required: true },
    district: String,
    phone: String,
    email: String,
    website: String,
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], required: true }, // [lng, lat]
    },
    openingHours: String,
    services: [String],
  },
  { timestamps: true }
);

officeSchema.index({ location: '2dsphere' });
officeSchema.index({ department: 1, city: 1 });

export const GovernmentOffice = mongoose.model('GovernmentOffice', officeSchema);
