
import React from 'react';
import { Test, Campaign } from './types';

export const MEDICAL_TESTS: Test[] = [
  {
    id: 'fbc',
    name: 'Full Blood Count',
    category: 'Hematology',
    description: 'A comprehensive evaluation of your blood cells to screen for infections, anemia, and other disorders.',
    price: 150,
    preparation: 'No specific preparation needed.',
    turnaround: '2-4 hours',
    whoNeedsIt: 'Anyone undergoing general health checks or showing signs of infection/anemia.'
  },
  {
    id: 'lipid',
    name: 'Lipid Profile',
    category: 'Biochemistry',
    description: 'Measures cholesterol levels to assess risk for heart disease and stroke.',
    price: 200,
    preparation: 'Fasting for 9-12 hours required before the test.',
    turnaround: '24 hours',
    whoNeedsIt: 'Adults monitoring heart health, diabetics, or those with high BP.'
  },
  {
    id: 'psa',
    name: 'PSA (Prostate Specific Antigen)',
    category: 'Tumor Markers',
    description: 'Screening for prostate cancer and monitoring prostate health.',
    price: 300,
    preparation: 'Avoid ejaculation 48 hours before testing.',
    turnaround: '24-48 hours',
    whoNeedsIt: 'Men over 45 or those with urinary symptoms.'
  },
  {
    id: 'lft',
    name: 'Liver Function Tests (LFTs)',
    category: 'Biochemistry',
    description: 'Assesses how well your liver is functioning by measuring enzymes and proteins.',
    price: 250,
    preparation: 'Some medications may need to be paused (consult your doctor).',
    turnaround: '24 hours',
    whoNeedsIt: 'Individuals with symptoms of jaundice or heavy alcohol consumers.'
  },
  {
    id: 'antenatal',
    name: 'Antenatal Screening',
    category: 'Maternal Care',
    description: 'Essential series of tests for expectant mothers to ensure healthy pregnancy.',
    price: 450,
    preparation: 'Standard maternity prep as advised by your midwife.',
    turnaround: '48 hours',
    whoNeedsIt: 'All pregnant women in their first and second trimesters.'
  },
  {
    id: 'std',
    name: 'Confidential STD Screening',
    category: 'Infectious Disease',
    description: 'Comprehensive screening for HIV, Syphilis, Hepatitis, and others.',
    price: 400,
    preparation: 'No specific preparation.',
    turnaround: '24-72 hours',
    whoNeedsIt: 'Anyone wanting confidential verification of sexual health status.'
  }
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: '1',
    title: 'Affordable Full Body Health Screening',
    description: 'Get a comprehensive view of your health with our discounted full body diagnostic package.',
    cta: 'Book a Test',
    image: '/images/campaign_full_body.jpg',
    active: true
  },
  {
    id: '2',
    title: 'Antenatal Screening for Expectant Mothers',
    description: 'Ensuring safety for both mother and baby. Comprehensive packages available today.',
    cta: 'Schedule Screening',
    image: '/images/campaign_antenatal.jpg',
    active: true
  },
  {
    id: '3',
    title: 'Corporate Staff Medical Screening',
    description: 'Keep your workforce healthy. On-site and in-center corporate health checks.',
    cta: 'Inquire Now',
    image: '/images/campaign_corporate.jpg',
    active: true
  }
];
