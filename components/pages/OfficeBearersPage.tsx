import React from 'react';
import { TeamLeadsSection } from '../section/TeamLeadsSection';
import { TeamMembersSection } from '../section/TeamMembersSection';

export const OfficeBearersPage = () => {
  return (
    <div className="bg-white min-h-screen font-inter">
      <TeamLeadsSection />
      <TeamMembersSection />
    </div>
  );
};
