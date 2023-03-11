/* eslint-disable import/no-internal-modules */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BsHash } from 'react-icons/bs';
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa';

interface SidebarGroupProps {
  header: React.ReactNode;
  selections: string[];
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({
  header,
  selections,
}) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="dropdown">
      <div
        onClick={() => setExpanded(!expanded)}
        className="dropdown-header flex justify-between"
      >
        <h5
          className={
            expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'
          }
        >
          {header}
        </h5>
        <ChevronIcon expanded={expanded} />
      </div>
      {expanded &&
        selections &&
        selections.map((selection) => (
          <TopicSelection key={selection} selection={selection} />
        ))}
    </div>
  );
};

interface ChevronIconProps {
  expanded: boolean;
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ expanded }) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded ? (
    <FaChevronDown size="14" className={chevClass} />
  ) : (
    <FaChevronRight size="14" className={chevClass} />
  );
};

interface TopicSelectionProps {
  selection: string;
}

const TopicSelection: React.FC<TopicSelectionProps> = ({ selection }) => (
  <div className="dropdown-selection">
    <BsHash size="24" className="text-gray-400" />
    <h5 className="dropdown-selection-text">{selection}</h5>
  </div>
);
