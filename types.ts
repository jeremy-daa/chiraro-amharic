import React from 'react';

export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  color: string;
  duration: string;
  price: string;
  curriculum: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}