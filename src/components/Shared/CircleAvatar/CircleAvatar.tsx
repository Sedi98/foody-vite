import React, { useEffect, useState } from 'react';

// Function to generate random background color
const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Function to determine if the color is light or dark
const isLightColor = (hexColor: string): boolean => {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};

// Define types for the props
interface CircleAvatarProps {
  username: string;
  localStorageKey: string;
}

const CircleAvatar: React.FC<CircleAvatarProps> = ({ username, localStorageKey }) => {
  const [bgColor, setBgColor] = useState<string | null>(null);
  const [firstName, lastName] = username?.split(' ') || ['', ''];

  // Get initials from firstName and lastName
  const initials: string = `${firstName[0]}${lastName[0]}`.toUpperCase();

  useEffect(() => {
    // Check if color exists in localStorage
    const savedColor = localStorage.getItem(localStorageKey);

    if (savedColor) {
      setBgColor(savedColor); // Set the saved color
    } else {
      const newColor = getRandomColor();
      localStorage.setItem(localStorageKey, newColor); // Save new color to localStorage
      setBgColor(newColor); // Set the new color
    }
  }, [localStorageKey]);

  const textColor = bgColor && isLightColor(bgColor) ? 'text-black' : 'text-white';

  return (
    <div
      className={`flex items-center justify-center rounded-full w-[50px] h-[50px] font-bold text-xl ${textColor}`}
      style={{ backgroundColor: bgColor || '#ccc' }} // Default to grey if color not set
    >
      {initials}
    </div>
  );
};

export default CircleAvatar
