import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';
import * as CiIcons from "react-icons/ci";
import * as FiIcons from "react-icons/fi";
import * as LuIcons from "react-icons/lu";

const iconSets = {
  fa: FaIcons,
  md: MdIcons,
  ai: AiIcons,
  gi: GiIcons,
  io: IoIcons,
  ci: CiIcons,
  fi: FiIcons,
  lu: LuIcons,
};


const Icon = ({ name, set = 'fa', size = 24, color = 'currentColor', className = '' }) => {
  const IconComponent = iconSets[set][name];

  if (!IconComponent) {
    console.warn(`Icon ${name} from set ${set} not found`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;

