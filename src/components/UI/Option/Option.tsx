import React from 'react';
import './Option.scss';
import { SelectOption } from '../../../utils/types';

export type Props = {
  option: SelectOption;
  onChange: (selectedOption: SelectOption) => void;
};

const Option: React.FC<Props> = ({
  option,
  onChange
}) => (
  <li
    className="select__item"
    onClick={() => onChange(option)}
  >
    <span>{option.value}</span>
  </li>
);

export default Option;
